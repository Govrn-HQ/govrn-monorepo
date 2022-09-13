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
import { and, deny, or, rule, shield } from 'graphql-shield';
import { graphqlHTTP } from 'express-graphql';
import fetch from 'cross-fetch';

import cors = require('cors');

const prisma = new PrismaClient();
const AIRTABLE_API_TOKEN = process.env.AIRTABlE_API_TOKEN;
const KEVIN_MALONE_TOKEN = process.env.KEVIN_MALONE_TOKEN;
const LINEAR_JOB_TOKEN = process.env.LINEAR_JOB_TOKEN;
const BACKEND_TOKENS = [
  AIRTABLE_API_TOKEN,
  KEVIN_MALONE_TOKEN,
  LINEAR_JOB_TOKEN,
];
const LINEAR_TOKEN_URL = 'https://api.linear.app/oauth/token';
const LINEAR_REDIRECT_URI = process.env.LINEAR_REDIRECT_URI;
const LINEAR_CLIENT_ID = process.env.LINEAR_CLIENT_ID;
const LINEAR_CLIENT_SECRET = process.env.LINEAR_CLIENT_SECRET;
const PROTOCOL_FRONTEND = process.env.PROTOCOL_FRONTEND;

const typeSchema = buildSchemaSync({
  resolvers: [...resolvers, ...customResolvers],
});

// TODO: Figure out is there is a way to genralize this
//
const ownsData = rule()(async (parent, args, ctx, info) => {
  return true;
});

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  if (!ctx.req.session.siwe) {
    return false;
  }
  return true;
});

const hasToken = rule()(async (parent, args, ctx, info) => {
  const auth = ctx.req.headers['authorization'];
  if (auth) {
    const found = BACKEND_TOKENS.find(token => token === auth);
    return !!found;
  }
  return false;
});

const permissions = shield(
  {
    Query: {
      '*': deny,
      contribution: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
      activityTypes: or(isAuthenticated, hasToken),
      attestations: isAuthenticated,
      listActivityTypesByUser: isAuthenticated,
      getUser: isAuthenticated,
      guild: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
      listUserByAddress: isAuthenticated,
      getContributionCountByDateForUserInRange: or(isAuthenticated, hasToken),
      users: hasToken,
      jobRuns: hasToken,
      linearUsers: hasToken,
      linearIssues: hasToken,
      contributionStatuses: hasToken,
    },
    ContributionCountByDate: or(isAuthenticated, hasToken),
    Mutation: {
      '*': deny,
      createActivityType: hasToken,
      getOrCreateActivityType: isAuthenticated,
      createContribution: hasToken,
      createGuild: hasToken,
      createGuildUser: or(isAuthenticated, hasToken),
      createJobRun: hasToken,
      createManyContribution: hasToken,
      createManyLinearIssue: hasToken,
      createOnChainUserContribution: isAuthenticated,
      createUser: or(isAuthenticated, hasToken),
      createUserActivity: hasToken,
      createUserAttestation: and(ownsData, isAuthenticated),
      createUserContribution: and(ownsData, isAuthenticated),
      createUserCustom: or(hasToken, and(ownsData, isAuthenticated)),
      createUserOnChainAttestation: isAuthenticated,
      deleteContribution: or(ownsData, isAuthenticated),
      deleteUserContribution: isAuthenticated,
      updateGuild: hasToken,
      updateUser: hasToken,
      updateUserContribution: and(ownsData, isAuthenticated),
      updateUserCustom: and(ownsData, isAuthenticated),
      updateUserOnChainAttestation: isAuthenticated,
      updateUserOnChainContribution: isAuthenticated,
      upsertLinearCycle: hasToken,
      upsertLinearIssue: hasToken,
      upsertLinearProject: hasToken,
      upsertLinearTeam: hasToken,
      upsertLinearUser: hasToken,
      upsertActivityType: hasToken,
    },
    ActivityType: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      active: or(isAuthenticated, hasToken),
      default: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
      categoryActivity: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
    },
    Attestation: {
      id: isAuthenticated,
      confidence: isAuthenticated,
      contribution: isAuthenticated,
      user: isAuthenticated,
      createdAt: isAuthenticated,
      updatedAt: isAuthenticated,
      date_of_attestation: isAuthenticated,
      user_id: isAuthenticated,
    },
    AttestationConfidence: {
      name: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
    },
    ChainType: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
    },
    Contribution: {
      id: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      status_id: or(isAuthenticated, hasToken),
      status: or(isAuthenticated, hasToken),
      activity_type_id: or(isAuthenticated, hasToken),
      activity_type: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      date_of_submission: or(isAuthenticated, hasToken),
      date_of_engagement: or(isAuthenticated, hasToken),
      details: or(isAuthenticated, hasToken),
      proof: or(isAuthenticated, hasToken),
      attestations: or(isAuthenticated, hasToken),
      partners: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
      linear_issue: or(isAuthenticated, hasToken),
      tweet: or(isAuthenticated, hasToken),
      on_chain_id: or(isAuthenticated, hasToken),
      tx_hash: or(isAuthenticated, hasToken),
    },
    ContributionStatus: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
    },
    DiscordUser: {
      createdAt: or(isAuthenticated, hasToken),
      discord_id: or(isAuthenticated, hasToken),
      display_name: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
    },
    Guild: {
      activity_type: or(isAuthenticated, hasToken),
      congrats_channel: or(isAuthenticated, hasToken),
      contributions: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      discord_id: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
      logo: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      twitter_account: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      users: or(isAuthenticated, hasToken),
      contribution_reporting_channel: or(hasToken, isAuthenticated),
      status: or(hasToken, isAuthenticated),
    },
    GuildContribution: {
      id: or(isAuthenticated, hasToken),
      contribution_id: or(isAuthenticated, hasToken),
      guild_id: or(isAuthenticated, hasToken),
      guild: or(isAuthenticated, hasToken),
    },
    GuildUser: {
      createdAt: or(isAuthenticated, hasToken),
      guild: or(isAuthenticated, hasToken),
      guild_id: or(isAuthenticated, hasToken),
      id: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      user: or(isAuthenticated, hasToken),
      user_id: or(isAuthenticated, hasToken),
    },
    TwitterUser: {
      id: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      username: or(isAuthenticated, hasToken),
    },
    AffectedRowsOutput: {
      count: hasToken,
    },
    JobRun: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      completedDate: hasToken,
      startDate: hasToken,
      name: hasToken,
    },
    User: {
      id: or(isAuthenticated, hasToken),
      createdAt: or(isAuthenticated, hasToken),
      updatedAt: or(isAuthenticated, hasToken),
      name: or(isAuthenticated, hasToken),
      display_name: or(isAuthenticated, hasToken),
      address: or(isAuthenticated, hasToken),
      chain_type: or(isAuthenticated, hasToken),
      full_name: or(isAuthenticated, hasToken),
      discord_users: or(isAuthenticated, hasToken),
      guild_users: or(isAuthenticated, hasToken),
      twitter_user: or(isAuthenticated, hasToken),
      active: or(isAuthenticated, hasToken),
      linear_users: or(isAuthenticated, hasToken),
    },
    UserActivity: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      activity_type: hasToken,
      user: hasToken,
    },
    LinearIssue: {
      id: hasToken,
      archivedAt: hasToken,
      assignee_id: hasToken,
      autoArchivedAt: hasToken,
      autoClosedAt: hasToken,
      boardOrder: hasToken,
      branchName: hasToken,
      canceledAt: hasToken,
      completedAt: hasToken,
      createdAt: hasToken,
      creator_id: hasToken,
      customerTickerCount: hasToken,
      cycle_id: hasToken,
      description: hasToken,
      dueDate: hasToken,
      estimate: hasToken,
      identifier: hasToken,
      linear_id: hasToken,
      priority: hasToken,
      priorityLabel: hasToken,
      project_id: hasToken,
      snoozedUntilAt: hasToken,
      sortOrder: hasToken,
      startedAt: hasToken,
      subIssueSortOrder: hasToken,
      team_id: hasToken,
      title: hasToken,
      trashed: hasToken,
      updatedAt: hasToken,
      url: hasToken,
    },
    LinearTeam: {
      linear_id: hasToken,
      name: hasToken,
      key: hasToken,
      id: hasToken,
    },
    LinearProject: {
      linear_id: hasToken,
      name: hasToken,
      id: hasToken,
    },
    LinearCycle: {
      id: hasToken,
      endsAt: hasToken,
      linear_id: hasToken,
      number: hasToken,
      startsAt: hasToken,
    },
    LinearUser: {
      id: or(isAuthenticated, hasToken),
      active: hasToken,
      displayName: hasToken,
      email: hasToken,
      linear_id: hasToken,
      name: hasToken,
      url: hasToken,
      createdAt: hasToken,
      access_token: hasToken,
      active_token: or(isAuthenticated, hasToken),
    },
  },
  {
    fallbackRule: deny,
    debug: true,
  },
);

const schema = applyMiddleware(typeSchema, permissions);

console.log(process.env.CORS_ORIGIN);
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
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: true },
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
    console.log(req.session);
    if (fields.data.nonce !== req.session.nonce) {
      res.status(422).json({ message: 'Invalid nonce' });
      return;
    }
    req.session.siwe = fields;
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

// TODO: switch so session expiration is managed on the server
app.get('/siwe/active', async function (req, res) {
  const fields = req.session.siwe;
  console.log('session');
  console.log(req.session);
  console.log(!fields?.data);
  // make this a switch
  if (!fields?.data) {
    res.status(422).json({ message: 'No existing session cookie' });
    console.log('Missing data');
  } else if (fields?.data?.nonce !== req.session.nonce) {
    res.status(422).json({ message: 'Invalid nonce' });
  } else if (new Date(fields?.data?.expirationTime) <= new Date()) {
    res.status(440).json({ message: 'Token has expired' });
  }

  // res.status(200).end();
  res.end();
});

app.post('/logout', async function (req, res) {
  req.session = null;
  res.status(200).end();
});

app.get('/nonce', async function (req, res) {
  console.log(req);
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
    const params = new URLSearchParams();
    params.append('code', code.toString());
    params.append('redirect_uri', LINEAR_REDIRECT_URI);
    params.append('client_id', LINEAR_CLIENT_ID);
    params.append('client_secret', LINEAR_CLIENT_SECRET);
    params.append('state', req.session.linearNonce);
    params.append('grant_type', 'authorization_code');
    console.log(params);
    const resp = await fetch(LINEAR_TOKEN_URL, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    const respJSON = await resp.json();
    const client = new LinearClient({ accessToken: respJSON.access_token });
    const me = await client.viewer;

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
        user: { connect: { address: req.session.siwe.data.address } },
      },
      where: { linear_id: me.id },
      update: {
        access_token: respJSON.access_token,
        active_token: true,
        user: { connect: { address: req.session.siwe.data.address } },
      },
    });

    res.status(200).redirect(PROTOCOL_FRONTEND + '/#/profile');
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

app.listen(4000);
