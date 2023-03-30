# Contribution Verification Job

## Summary

This job periodically applies each DAO's verification criteria to the list of unverified guild contributions.

This primarily will help:

1. Catch contributions to guilds which have the correct number of attestations but were not marked as verified via the webapp
2. Process guild contributions that were attested to via the deployed contracts but not via the webapp
3. Process existing guild contributions that we submitted before the guild in question adopted verification criteria

## Nx Plugin

This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json)

### Commands

- `yarn nx run jobs-contribution-verification:serve`:To run the script, requires `protocol-api:serve` to be running.
- `yarn nx run jobs-contribution-verification:build`: to build the whole app.
- `yarn nx run jobs-contribution-verification:lint`

## `.env` Variables

- `PROTOCOL_URL`: link to gql [endpoint](../../protocol-api/README.md#express): `http://localhost:4000/graphql`
- `CONTRIBUTION_VERIFICATION_TOKEN`: Authorization token for GraphQL requests.[^1]

[^1]: For Development, it should match with `KEVIN_MALONE_TOKEN` at [protocol-api](../../protocol-api)
