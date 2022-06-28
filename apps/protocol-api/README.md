# Protocol API

## Summary
This is the nexus of the project where the state of the app is stored. This contains two important components: 

### Prisma
[Prisma](https://www.prisma.io/docs/) is open-source ORM. In this project. It's uses [`postgres`](../../README.md#postgres) as data source; Prisma manage and create the `govrn` Database cluster for you. In addtion, Prisma has a performant query engine that is implemented in Rust.

You can find all configuration under the [`schema.prisma`](./src/prisma/schema.prisma) file. [<sub>Schema Docs</sub>](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate#create-migrations)

Prisma makes it easier for 2 main jobs: 
- [generate](#generate): provides a [TypeGraphQL](https://typegraphql.com/) integration with Prisma. Currently, it uses [`typegraphql-prisma`](https://github.com/MichalLytek/typegraphql-prisma) 
- [migrating](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate#create-migrations) Database after changes are made to the prisma schema.

#### Database
This Diagram shows the general relationships among all tables in postgres DB. 
![tables-diagram]

### Express

Express creates a GraphQL server with many useful middlewares that manage session & permissions. Most other applications in Govrn monorepo is dependent on it. In many application, you are going to need `PROTOCOL_URL` for GraphQL: 
`PROTOCOL_URL="http://localhost:4000/graphql"`

You can find more about the configurations and middleware under [`main.ts`](./src/main.ts) file.

## Nx Plugin
This App is generated using [`@nrwl/node:application`](https://nx.dev/packages/node/generators/application). Check all targets at [`project.json`](./project.json)

### Generate
`yarn nx run protocol-api:generate`

A Prisma command that updates your database using migrations  and creates the database if it does not exist.

### Serve 
`yarn nx run protocol-api:serve`

Starts up the express GraphQL sever. This is necessary to run beforehand. `PROTOCOL_URL` is required in order to develop in many apps under Govrn Monorepo.

## `.env`

- `PROTOCOL_COOKIE_SECRET`: [secret](https://github.com/expressjs/cookie-session#secret) A string which will be used as single key. You can use any string, ex: `PROTOCOL_COOKIE_SECRET="truculent Falafel"`
- `KEVIN_MALONE_TOKEN`


[tables-diagram]: https://uc23339e6c54300c902cea3be2f9.previews.dropboxusercontent.com/p/thumb/ABkXnXgTK9SVrC4jkheewuGlytV3Am4VVFNfHXzNpqSF5C9vMfA0qKa9Ifn913XUW3xa9DI-3oFRF1wSbkYc-jrCko1PdijKW_YNCvVU8qBIPOJk1uu2IJ8fU-SZ5PeR-TFp0WQd-dDaHXPMDi39Ta7qNXccG9tCXG4ELKh2EQqI8oOzxyxUoLsGANnqiYAlc1x97j0NVnKuvKPXsviWqB-0T1w29bD2iNkCbKU0-maHnPcCNUnBtM5Z1QqeTahG9EVkW-ppBLn1EjnG-rUGlmjOSU7W1neA974wgtEZSBwCTCPIz4_9CUdvdpnSuU04Q5npkhQdFCuJimF7ynIdwmEwChwpe0FjlBuZDBJxFcYHE7m4cBW8shIw-Ce8NoUabAWWETke-efYi2t16vLYkpZMJzSy25YrkTso5LSg4i9Fkg/p.png
