import { buildSchemaSync } from 'type-graphql';
import express from 'express';
import { resolvers } from './prisma/generated/type-graphql';

import { graphqlHTTP } from 'express-graphql';

const schema = buildSchemaSync({
  resolvers,
});

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  })
);
app.listen(4000);
