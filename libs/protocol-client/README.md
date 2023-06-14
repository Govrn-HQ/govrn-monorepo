# Protocol Client

## Summary

This library contains All GraphQL queries & mutation in addition to clients. Clients are wrappers around the sdk that contains a very specific operations for each table. You can think of clients as a [**_Facade pattern_**](https://en.wikipedia.org/wiki/Facade_pattern) for each table.

## Nx Plugin

This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json)

### Commands

- `yarn nx run protocol-client:generate-gql`: runs `graphql-codegen`, generating code based on both the GraphQL schema ([`queries.graphql`](./src/lib/graphql/queries.graphql)) and on the [custom resolvers]()../../apps/protocol-api/src/prisma/resolvers).[^1]

### Add new GraphQL Query

- first add new query to [`queries.graphql`](./src/lib/graphql/queries.graphql) file.
- run `yarn nx run protocol-api:serve`, to be able to load GraphQl Schema.
- run `yarn nx run protocol-client:generate-gql`, [`protocol-types.ts`](./src/lib/protocol-types.ts) will be updated with new modifications

## `.env` Variables

- `PROTOCOL_URL`: link to gql [endpoint](../../apps/protocol-api/README.md#express): `http://localhost:4000/graphql`.[^1]

[^1]: Requires GraphQL server to be running, go to [`protocol-api:serve`](../../apps/protocol-api/README.md#commands)
