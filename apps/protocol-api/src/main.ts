import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import Session from 'cookie-session';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import { generateNonce, SiweErrorType, SiweMessage } from 'siwe';
import { LinearClient } from '@linear/sdk';

import { resolvers } from './prisma/generated/type-graphql';
import { customResolvers } from './prisma/resolvers';
import { graphqlHTTP } from 'express-graphql';
import fetch from 'cross-fetch';
import { permissions } from './permissions';

import cors = require('cors');

console.log('Starting');
const prisma = new PrismaClient();

const addAttestationThreshold = async ({
  on_chain_id,
  chain_id,
}: {
  on_chain_id: number;
  chain_id: number;
}) => {
  const contribution = await prisma.contribution.findFirst({
    where: {
      chain_id: { equals: chain_id },
      on_chain_id: { equals: on_chain_id },
    },
  });

  const guildContributions = await prisma.guildContribution.findMany({
    where: {
      contribution_id: { equals: contribution.id },
    },
  });
  console.log('guildContributions', guildContributions);
  if (guildContributions.length === 0) {
    return;
  }
  for (const guildContribution of guildContributions) {
    const guild = await prisma.guildContribution
      .findUnique({
        where: {
          id: guildContribution.id,
        },
      })
      .guild({});
    console.log('verification_setting_id', guild.verification_setting_id);
    if (!guild.verification_setting_id) {
      return;
    }
    console.log(
      'verification_status_id',
      guildContribution.verification_status_id,
    );
    if (
      guildContribution.verification_status_id != 1 &&
      guildContribution.verification_status_id !== null
    ) {
      return;
    }

    let threshold = guildContribution.attestation_threshold;
    console.log('threshold', threshold);
    if (threshold === 0) {
      return;
    }
    if (threshold === null) {
      const verficationNum = await prisma.verificationSetting.findUnique({
        where: {
          id: guild.verification_setting_id,
        },
      });
      threshold = verficationNum.num_of_attestations;
    }
    const new_threshold = threshold - 1;
    const verification_status_id = new_threshold === 0 ? 1 : 2;
    await prisma.guildContribution.update({
      data: {
        attestation_threshold: new_threshold,
        verification_status_id: verification_status_id,
      },
      where: {
        id: guildContribution.id,
      },
    });
  }
};

prisma.$use(async (params, next) => {
  if ((params.model == 'Attestation', params.action === 'create')) {
    const contributionParams =
      params.args.data.contribution.connect.chain_id_on_chain_id;
    await addAttestationThreshold({
      on_chain_id: contributionParams.on_chain_id,
      chain_id: contributionParams.chain_id,
    });
  }
  if ((params.model == 'Attestation', params.action === 'createMany')) {
    throw new Error('Create many not supported for threshold');
  }
  return next(params);
});

const LINEAR_TOKEN_URL = 'https://api.linear.app/oauth/token';
const LINEAR_REDIRECT_URI = process.env.LINEAR_REDIRECT_URI;
const LINEAR_CLIENT_ID = process.env.LINEAR_CLIENT_ID;
const LINEAR_CLIENT_SECRET = process.env.LINEAR_CLIENT_SECRET;
const PROTOCOL_FRONTEND = process.env.PROTOCOL_FRONTEND;

const DISCORD_TOKEN_URL = 'https://discord.com/api/v10/oauth2/token';
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

const typeSchema = buildSchemaSync({
  resolvers: [...resolvers, ...customResolvers],
});

const schema = applyMiddleware(typeSchema, permissions);

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN.split(','),
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);
app.use(
  Session({
    name: 'govrn',
    secret: process.env['PROTOCOL_COOKIE_SECRET'],
    secure: false,
    sameSite: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
);
app.use('/graphql', async function (req, res) {
  const mid = graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      prisma,
      req,
    },
  });
  return mid(req, res);
});
app.post('/verify', async function (req, res) {
  try {
    if (!req.body.message) {
      res
        .status(422)
        .json({ message: 'Expected prepareMessage object as body.' });
      return;
    }
    const message = new SiweMessage(req.body.message);
    const fields = await message.validate(req.body.signature);
    if (fields.data.nonce !== req.session.nonce) {
      res.status(422).json({ message: 'Invalid nonce' });
      return;
    }
    req.session.siwe = fields;
    res.status(200).end();
  } catch (e) {
    req.session.siwe = null;
    req.session.nonce = null;
    console.error(e);
    switch (e) {
      case SiweErrorType.EXPIRED_MESSAGE: {
        res.status(440).json({ message: e.message });
        break;
      }
      case SiweErrorType.INVALID_SIGNATURE: {
        res.status(422).json({ message: e.message });
        break;
      }
      default: {
        res.status(500).json({ message: e.message });
        break;
      }
    }
  }
});

app.get('/siwe/active', async function (req, res) {
  const fields = req.session.siwe;
  if (!fields?.data) {
    res.status(422).json({ message: 'No existing session cookie' });
  } else if (fields?.data?.nonce !== req.session.nonce) {
    res.status(422).json({ message: 'Invalid nonce' });
  } else if (new Date(fields?.data?.expirationTime) <= new Date()) {
    res.status(440).json({ message: 'Token has expired' });
  } else if (req.query.address !== req.session.siwe.data.address) {
    res
      .status(422)
      .json({ message: 'Signature is associated with another address' });
  }

  res.end();
});

app.post('/logout', async function (req, res) {
  req.session = null;
  res.status(200).end();
});

app.get('/nonce', async function (req, res) {
  const nonce = generateNonce();
  req.session.nonce = nonce;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(req.session.nonce);
});

app.get('/linear_nonce', async function (req, res) {
  const nonce = generateNonce();
  req.session.linearNonce = nonce;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(req.session.nonce);
});

// TODO: normalize all addresses to lowercase
app.get('/linear/oauth', async function (req, res) {
  try {
    const query = req.query;
    const code = query.code;
    const state = query.state.toString();
    const params = new URLSearchParams();
    params.append('code', code.toString());
    params.append('redirect_uri', LINEAR_REDIRECT_URI);
    params.append('client_id', LINEAR_CLIENT_ID);
    params.append('client_secret', LINEAR_CLIENT_SECRET);
    params.append('state', state);
    params.append('grant_type', 'authorization_code');
    const resp = await fetch(LINEAR_TOKEN_URL, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const respJSON = await resp.json();
    const client = new LinearClient({ accessToken: respJSON.access_token });
    const me = await client.viewer;
    const [, address] = state.split('/');

    await prisma.linearUser.upsert({
      create: {
        active: me.active,
        displayName: me.displayName,
        email: me.email,
        linear_id: me.id,
        name: me.name,
        url: me.url,
        access_token: respJSON.access_token,
        active_token: true,
        user: { connect: { address: address } },
      },
      where: { linear_id: me.id },
      update: {
        access_token: respJSON.access_token,
        active_token: true,
        user: { connect: { address: address } },
      },
    });

    res.status(200).redirect(PROTOCOL_FRONTEND + '/#/profile');
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

app.get('/discord_nonce', async function (req, res) {
  const nonce = generateNonce();
  req.session.discordNonce = generateNonce();
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(req.session.nonce);
});

app.get('/discord/oauth', async function (req, res) {
  try {
    const query = req.query;
    const code = query.code;
    const state = query.state.toString();
    const params = new URLSearchParams();
    params.append('code', code.toString());
    params.append('redirect_uri', DISCORD_REDIRECT_URI);
    params.append('client_id', DISCORD_CLIENT_ID);
    params.append('client_secret', DISCORD_CLIENT_SECRET);
    params.append('state', state);
    params.append('grant_type', 'authorization_code');
    const resp = await fetch(DISCORD_TOKEN_URL, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const respJSON = await resp.json();
    const accessToken = String(respJSON.access_token);

    if (!accessToken) {
      res.status(500).send('Failed to connect to Discord.');
      return;
    }

    const userResp = await fetch('https://discord.com/api/users/@me', {
      headers: { authorization: `Bearer ${accessToken}` },
    });
    const me = await userResp.json();
    const [, address, redirectDestination] = state.split('/');

    await prisma.discordUser.upsert({
      create: {
        access_token: accessToken,
        active_token: true,
        discord_id: me.id,
        display_name: me.display_name,
        user: { connect: { address: address } },
      },
      where: { discord_id: me.id },
      update: {
        access_token: accessToken,
        active_token: true,
        user: { connect: { address: address } },
      },
    });
    // specifically only allowing these 2 options instead of being fully dynamic,
    if (redirectDestination === 'profile') {
      res.status(200).redirect(PROTOCOL_FRONTEND + '/#/profile');
    }
    if (redirectDestination === 'signature') {
      res.status(200).redirect(PROTOCOL_FRONTEND + '/#/signature');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

console.log('listening');
app.listen(4000);
