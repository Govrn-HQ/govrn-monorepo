import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import Session from 'express-session';
import { ethers } from 'ethers';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import { SiweErrorType, SiweMessage, generateNonce } from 'siwe';
import cors = require('cors');

import { resolvers } from './prisma/generated/type-graphql';
import { customResolvers } from './prisma/resolvers';
import { shield, deny, allow, rule } from 'graphql-shield';
import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

const typeSchema = buildSchemaSync({
  resolvers: [...resolvers, ...customResolvers],
});

// Rules WIP
//
const OwnsData = rule()(async (parent, args, ctx, info) => {
  //console.log(parent);
  //console.log(args);
  //console.log(ctx);
  //console.log(ctx.req.session);
  //console.log(Object.keys(info));
  //console.log('JER');
  //console.log(ctx.req.session.siwe);
  // console.log(info);
  return true;
});
//
// const isAuthenticated = rule()(async (parent, args, ctx, info) => {
//   if (!ctx.req.session.siwe) {
//     return false;
//   }
//   return true;
// });

const permissions = shield(
  {
    Query: {
      '*': allow,
      contributions: allow,
      attestations: allow,
      listUserByAddress: OwnsData,
    },
    Mutation: {
      '*': allow,
      createUserCustom: OwnsData,
      createUserAttestation: OwnsData,
      createUserContribution: OwnsData,
      updateUserContribution: OwnsData,
      updateUserCustom: OwnsData,
    },
  },
  {
    fallbackRule: allow,
    debug: true,
  }
);

const schema = applyMiddleware(typeSchema, permissions);

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(
  Session({
    name: 'siwe-quickstart',
    secret: 'siwe-quickstart-secret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: false },
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
// cawait getUser(req.headers.authorization, req.headers.timestamp),
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
    req.session.cookie.expires = new Date(fields.data.expirationTime);
    req.session.save(() => res.status(200).end());
  } catch (e) {
    req.session.siwe = null;
    req.session.nonce = null;
    console.error(e);
    switch (e) {
      case SiweErrorType.EXPIRED_MESSAGE: {
        req.session.save(() => res.status(440).json({ message: e.message }));
        break;
      }
      case SiweErrorType.INVALID_SIGNATURE: {
        req.session.save(() => res.status(422).json({ message: e.message }));
        break;
      }
      default: {
        req.session.save(() => res.status(500).json({ message: e.message }));
        break;
      }
    }
  }
});

app.get('/nonce', async function (req, res) {
  const nonce = generateNonce();
  req.session.nonce = nonce;
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(nonce);
});

app.listen(4000);
