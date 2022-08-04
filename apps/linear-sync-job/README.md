# Linear Sync Job

## Summary

This Job retrieves all [Linear](https://linear.app) issues and updated all Linear-related Tables. The Job is using Linear [SDK](https://developers.linear.app/docs/sdk/getting-started)

## Nx Plugin

This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json)

### Commands

- `yarn nx run linear-sync-job:serve`:To run the script, requires `protocol-api:serve` to be running.
- `yarn nx run linear-sync-job:build`: to build the whole app.
- `yarn nx run linear-sync-job:lint`

## `.env` Variables

- `DATABASE_URL`: URL references that Database cluster, `govrn`.[^1]
- `API_KEY`: Linear API Key.
- `PROTOCOL_URL`: link to gql [endpoint](../protocol-api/README.md#express): `http://localhost:4000/graphql`
- `PROTOCOL_API_TOKEN`: A token that corresponds to a token used in protocol_api

[^1]: How to prepare `postgres` and get `DATABASE_URL` go to [`protocol-api`](../protocol-api/README.md#postgres).
