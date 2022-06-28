# Protocol Client

## Summary
This library contains All GraphQL queries & mutation in addition to clients. Clients are wrappers around the sdk that contains a very specific operations for each table. You can think of clients as a [***Facade pattern***](https://en.wikipedia.org/wiki/Facade_pattern) for each table. 

## Nx Plugin
This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json) 

### Add new GraphQL Query
- first add new query to [`queries.graphql`](./src/lib/graphql/queries.graphql) file. 
- run `yarn nx run protocol-api:serve`, to be able to load GraphQl Schema. 
- run `yarn nx run protocol-client:generate-gql`, [`protocol-types.ts`](./src/lib/protocol-types.ts) will be updated with new modifications. 

## `.env` Variables
- `PROTOCOL_URL`: link to gql [endpoint](../../apps/protocol-api/README.md#express): `http://localhost:4000/graphql`
