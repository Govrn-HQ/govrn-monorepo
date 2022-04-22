import { createClient } from '@urql/core';

export const getGraphqlClient = () => {
  const client = createClient({
    url: 'http://localhost:3000/graphql',
  });
  return client;
};
