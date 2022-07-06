# Contract Sync Job

## Summary
The main purpose of this script is to sync the database with the Contract's events. The Contract's events and mappings are the main source of truth; hence, all events overwrite the existing records in database

## Nx Plugin
This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json) 

### Commands

- `yarn nx run contract-sync-job:serve`:To run the script, requires `protocol-api:serve` to be running.
- `yarn nx run contract-sync-job:build`: to build the whole app.
- `yarn nx run contract-sync-job:lint`

## `.env` Variables
- `CONTRACT_ADDRESS`: Govrn Contract address.
- `CHAIN_URL`: chain that Govrn Contract is deployed.
- `PROTOCOL_URL`: link to gql [endpoint](../protocol-api/README.md#express): `http://localhost:4000/graphql`
- `DATABASE_URL`: URL references that Database cluster, `govrn`.[^1]
- `SUBGRAPH_URL`: Link to [subgraph](https://thegraph.com/docs/en/developer/quick-start/) that is used to fetch Contract's events.
- `KEVIN_MALONE_TOKEN`: Authorization token for GraphQL requests.[^2]


[^1]: How to prepare `postgres` and get `DATABASE_URL` go to [`protocol-api`](../protocol-api/README.md#postgres).
[^2]: For Developement, it should match with `KEVIN_MALONE_TOKEN` at [protocol-api](../protocol-api)
