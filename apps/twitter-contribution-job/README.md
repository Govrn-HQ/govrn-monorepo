# Linear Sync Job

## Summary

Fetch all tweets from DAO's Twitter account and store all tweets and related users in the Database. The frontend will
figure out who owns the tweet after the fact.

### Related Jobs:

- [Contract Sync Job](../contract-sync-job/README.md)
- [Linear Sync Job](../linear-sync-job/README.md)

## Nx Plugin

This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all
targets at [`project.json`](./project.json)

## `.env` Variables

- `DATABASE_URL`: URL references that Database cluster, `govrn`.[^1]
- `BEARER_TOKEN`: Twitter's API bearer Token.
- `PROTOCOL_URL`: link to gql [endpoint](../protocol-api/README.md#express): `http://localhost:4000/graphql`

[^1]: How to prepare `postgres` and get `DATABASE_URL` go to [`protocol-api`](../protocol-api/README.md#postgres)
