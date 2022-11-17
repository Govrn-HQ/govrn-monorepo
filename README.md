<p align="center"><img src="./apps/protocol-frontend/src/assets/govrn-logo.png" width="350"></p>

# Govrn Monorepo

Our monorepo uses [Nx](https://nx.dev/getting-started/intro) as a build system and for scaffolding.

- [Quick Start.](#quick-start)
- [Monorepo Structure](#monorepo-structure)
  - [Apps](#apps)
  - [Libraries](#libraries)
- [Understand Project Structure](#understand-project-structure)
- [Furthermore](#furthermore)

## Quick Start.

- `yarn install`
- `yarn nx run protocol-api:serve` to start GraphQL server, if required.
- Check each project's README for more commands.

## Monorepo Structure

Each app or lib has its own readme that explains the scoped purpose & required `.env` variables to operates. You have to create a `.env` file in each module root and provide the required variables mentioned in its README.

### Apps

- [Contract Sync Job](./apps/contract-sync-job)
- [Govrn Contract](./apps/govrn-contract)
- [Govrn Contract Subgraph](./apps/govrn-contract-subgraph)
- [Linear Sync Job](./apps/linear-sync-job)
- [Protocol API](./apps/protocol-api)
- [Protocol Frontend](./apps/protocol-frontend)
- [Twitter Contribution Job](./apps/twitter-contribution-job)

### Libraries

- [Govrn Contract Client](./libs/govrn-contract-client)
- [Govrn Subgraph Client](./libs/govrn-subgraph-client)
- [Protocol Client](./libs/protocol-client)
- [Protocol UI](./libs/protocol-ui)

## Understand Project Structure

Run `yarn nx graph` to see a [diagram](https://nx.dev/cli/dep-graph) of the dependencies of the project.

## Furthermore

Chat with us on [Discord](https://discord.gg/3e36ZHU5aG). Follow on [Twitter](https://twitter.com/govrnHQ)
