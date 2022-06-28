


<p align="center"><img src="https://beta.govrn.app/assets/govrn-logo.344f0de2.png" width="350"></p>

# GovrnMonorepo
 Our monorepo uses [Nx](https://nx.dev/getting-started/intro) as a build system and for scaffolding.

### Postgres
Install `postgresql@13` on your OS. It's required by [Prisma](./apps/protocol-api/) to operate.
Here's a [gist](https://gist.github.com/amrro/e996f84610f074bc2d734f52356be01f) for macOS.

- Install `postgresql@13` binaries.
- Define a new PostgreSQL user account using `createuser`:

  ```createuser --interactive --pwprompt```
- To use `postgresql` into the project, you need the `DATABASE_URL` to the **Database Cluster** on your OS. 
  `DATABASE_URL=postgresql://<username>:<password>@localhost:5432/govrn`
- Finally, run `yarn nx run protocol-api:migrate`. This will create PostgreSQL database cluster called `govrn`
  Your database is now in sync with your [schema](./apps/protocol-api) @ `apps/protocol-api/prisma/schema.prisma`.
- You can acess the `govrn` database cluster using `psql govrn` or using [pgcli](https://github.com/dbcli/pgcli) for auto-completion.

## Quick Start.
- `yarn install`
- `yarn nx run protocol-api:serve` to start GraphQL server.
- If you want to run for example [Linear Sync Job](./apps/linear-sync-job/README.md): `yarn nx run linear-sync-job:serve` 
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
Chat with us on [Discord](https://discord.gg/AY84umTe).
