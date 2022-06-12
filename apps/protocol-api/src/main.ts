import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { applyMiddleware } from 'graphql-middleware';
import cors = require('cors');

import { resolvers } from './prisma/generated/type-graphql';
import { shield, deny, allow } from 'graphql-shield';
import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

const typeSchema = buildSchemaSync({
  resolvers,
});

const permissions = shield(
  {
    Query: {
      '*': allow,
    },
    Attestation: {
      '*': allow,
    },
    Contribution: {
      '*': allow,
    },
    User: {
      '*': allow,
    },
  },
  {
    fallbackRule: deny,
    debug: true,
  }
);

const schema = applyMiddleware(typeSchema, permissions);

const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { prisma },
  })
);
app.listen(4000);
