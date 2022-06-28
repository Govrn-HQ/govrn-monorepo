# Contract Sync Job

## Summary
The main purpose of this script is to sync the database with the Contract's events. The Contract's events and mappings are the main source of truth; hence, all events overwrite the existing records in database


### Related Jobs: 
- [Linear Sync Job](../linear-sync-job/README.md).
- [Twitter Contribution Job](../twitter-contribution-job/README.md).

## Nx Plugin
This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json) 

## `.env` Variables
- `CONTRACT_ADDRESS`: Govrn Contract address.
- `CHAIN_URL`: chain that Govrn Contract is deployed.
- `PROTOCOL_URL`: link to gql [endpoint](../protocol-api/README.md#express): `http://localhost:4000/graphql`
- `DATABASE_URL`: url to [postgres](../../README.md#postgres) database.
- `SUBGRAPH_URL`: Link to [subgraph](https://thegraph.com/docs/en/developer/quick-start/) that is used to fetch Contract's events 
