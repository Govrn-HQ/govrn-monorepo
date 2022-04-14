import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import { PrismaClient } from '@prisma/client';

import { resolvers } from './prisma/generated/type-graphql';

import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

const schema = buildSchemaSync({
  resolvers,
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { prisma },
  })
);
app.listen(4000);
