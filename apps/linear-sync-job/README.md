# Linear Sync Job

## Summary
This Job retrieves all [Linear](https://linear.app) issues and updated all Linear-related Tables. The Job is using Linear [SDK](https://developers.linear.app/docs/sdk/getting-started)

### Related Jobs: 
- [Contract Sync Job](../contract-sync-job/README.md).
- [Twitter Contriubtion Job](../twitter-contribution-job/README.md).


## Nx Plugin
This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json) 

## `.env` Variables
- `API_KEY`: Linear API Key.
- `PROTOCOL_URL`: link to gql [endpoint](../protocol-api/README.md#express): `http://localhost:4000/graphql`
- `DATABASE_URL`: url to [postgres](../../README.md#postgres) database.
