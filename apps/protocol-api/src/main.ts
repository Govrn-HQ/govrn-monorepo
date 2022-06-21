import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import Session from 'cookie-session';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import { SiweErrorType, SiweMessage, generateNonce } from 'siwe';
import cors = require('cors');

import { resolvers } from './prisma/generated/type-graphql';
import { customResolvers } from './prisma/resolvers';
import { shield, deny, allow, rule, and } from 'graphql-shield';
import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

const typeSchema = buildSchemaSync({
  resolvers: [...resolvers, ...customResolvers],
});

// TODO: Figure out is there is a way to genralize this
//
const OwnsData = rule()(async (parent, args, ctx, info) => {
  return true;
});
//
const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  if (!ctx.req.session.siwe) {
    return false;
  }
  return true;
});

const permissions = shield(
  {
    Query: {
      '*': deny,
      contributions: isAuthenticated,
      activityTypes: isAuthenticated,
      attestations: isAuthenticated,
      getUser: isAuthenticated,
      listUserByAddress: OwnsData,
    },
    Mutation: {
      '*': deny,
      createUserCustom: and(OwnsData, isAuthenticated),
      createUserAttestation: and(OwnsData, isAuthenticated),
      createUserContribution: and(OwnsData, isAuthenticated),
      updateUserContribution: and(OwnsData, isAuthenticated),
      updateUserCustom: and(OwnsData, isAuthenticated),
    },
    ActivityType: {
      id: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      name: isAuthenticated,
      active: isAuthenticated,
      default: isAuthenticated,
      users: isAuthenticated,
      contributions: isAuthenticated,
      categoryActivity: isAuthenticated,
      guilds: isAuthenticated,
    },
    Attestation: {
      id: isAuthenticated,
      confidence: isAuthenticated,
      contribution: isAuthenticated,
      user: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      date_of_attestation: isAuthenticated,
    },
    AttestationConfidence: {
      name: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      id: isAuthenticated,
    },
    ChainType: {
      id: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      name: isAuthenticated,
      users: isAuthenticated,
    },
    Contribution: {
      id: isAuthenticated,
      updatedAt: isAuthenticated,
      name: isAuthenticated,
      status_id: isAuthenticated,
      status: isAuthenticated,
      activity_type_id: isAuthenticated,
      activity_type: isAuthenticated,
      user_id: isAuthenticated,
      user: isAuthenticated,
      date_of_submission: isAuthenticated,
      date_of_engagement: isAuthenticated,
      details: isAuthenticated,
      proof: isAuthenticated,
      attestations: isAuthenticated,
      partners: isAuthenticated,
      guilds: isAuthenticated,
      linear_issue: isAuthenticated,
      tweet: isAuthenticated,
      on_chain_id: isAuthenticated,
    },
    ContributionStatus: {
      id: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      name: isAuthenticated,
      contributions: isAuthenticated,
    },
    User: {
      id: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      name: isAuthenticated,
      display_name: isAuthenticated,
      address: isAuthenticated,
      chain_type: isAuthenticated,
      full_name: isAuthenticated,
    },
  },
  {
    fallbackRule: deny,
    debug: true,
  }
);

const schema = applyMiddleware(typeSchema, permissions);

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://beta.govrn.app'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(
  Session({
    name: 'govrn',
    secret: process.env['PROTOCOL_COOKIE_SECRET'],
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: true },
  })
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
    console.log(req.body);
    if (!req.body.message) {
      res
        .status(422)
        .json({ message: 'Expected prepareMessage object as body.' });
      return;
    }
    const message = new SiweMessage(req.body.message);
    const fields = await message.validate(req.body.signature);
    console.log(fields.data);
    console.log(req.session);
    if (fields.data.nonce !== req.session.nonce) {
      res.status(422).json({ message: 'Invalid nonce' });
      return;
    }
    req.session.siwe = fields;
    console.log(req.session.cookie);
    // req.session.cookie.expires = new Date(fields.data.expirationTime);
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

app.get('/nonce', async function (req, res) {
  const nonce = generateNonce();
  req.session.nonce = nonce;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(req.session.nonce);
});

app.listen(4000);
