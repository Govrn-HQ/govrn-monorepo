import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import Session from 'cookie-session';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import { generateNonce, SiweErrorType, SiweMessage } from 'siwe';

import { resolvers } from './prisma/generated/type-graphql';
import { customResolvers } from './prisma/resolvers';
import { and, deny, or, rule, shield } from 'graphql-shield';
import { graphqlHTTP } from 'express-graphql';

import cors = require('cors');

const prisma = new PrismaClient();
const AIRTABLE_API_TOKEN = process.env.AIRTABlE_API_TOKEN;
const KEVIN_MALONE_TOKEN = process.env.KEVIN_MALONE_TOKEN;
const BACKEND_TOKENS = [AIRTABLE_API_TOKEN, KEVIN_MALONE_TOKEN];

const typeSchema = buildSchemaSync({
  resolvers: [...resolvers, ...customResolvers],
});

// TODO: Figure out is there is a way to genralize this
//
const OwnsData = rule()(async (parent, args, ctx, info) => {
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
    const found = BACKEND_TOKENS.find((token) => token === auth);
    return !!found;
  }
  return false;
});

const permissions = shield(
  {
    Query: {
      '*': deny,
      contributions: or(isAuthenticated, hasToken),
      activityTypes: or(isAuthenticated, hasToken),
      attestations: isAuthenticated,
      getUser: isAuthenticated,
      guild: or(isAuthenticated, hasToken),
      guilds: or(isAuthenticated, hasToken),
      listUserByAddress: isAuthenticated,
      users: hasToken,
      jobRuns: hasToken,
    },
    Mutation: {
      '*': deny,
      createActivityType: hasToken,
      createContribution: hasToken,
      createGuild: hasToken,
      createGuildUser: or(isAuthenticated, hasToken),
      createJobRun: hasToken,
      createManyContribution: hasToken,
      createOnChainUserContribution: isAuthenticated,
      createUser: or(isAuthenticated, hasToken),
      createUserActivity: hasToken,
      createUserAttestation: and(OwnsData, isAuthenticated),
      createUserContribution: and(OwnsData, isAuthenticated),
      createUserCustom: or(hasToken, and(OwnsData, isAuthenticated)),
      createUserOnChainAttestation: isAuthenticated,
      updateGuild: hasToken,
      updateUser: hasToken,
      updateUserContribution: and(OwnsData, isAuthenticated),
      updateUserCustom: and(OwnsData, isAuthenticated),
      updateUserOnChainAttestation: isAuthenticated,
      updateUserOnChainContribution: isAuthenticated,
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
    },
    UserActivity: {
      id: hasToken,
      createdAt: hasToken,
      updatedAt: hasToken,
      activity_type: hasToken,
      user: hasToken,
    },
  },
  {
    fallbackRule: deny,
    debug: true,
  }
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
