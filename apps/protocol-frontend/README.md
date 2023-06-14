# Protocol Frontend

The `protocol-frontend` package is the main frontend app for the Govrn Protocol.

## Summary

This is a [React](https://reactjs.org/) app using [Vite](https://vitejs.dev) as the build tool. If you haven't used Vite before you should check out the docs for an introduction: [Vite: Getting Started](https://vitejs.dev/guide/).

We use a customized [Chakra UI](https://chakra-ui.com/) as our core component library. We customize the theme and components via our growing [Protocol UI Component Library](../../libs/protocol-ui). The frontend app pulls in from `protocol-ui` as well as the core Chakra components.

We use TypeScript across our stack, and our data fetching and contract interaction is done via our [Protocol Client](../../libs/protocol-client).

### Nx Plugin

This app was generated using [`@nxext/vite`](https://nxext.dev/docs/vite/overview.html). Check all targets at [`project.json`](./project.json)

### Commands

You can check the available commands in the `project.json` file in the frontend package.

- `nx run protocol-frontend:serve` -- serves the frontend locally on `localhost:3000`
- `nx run protocol-frontend:lint` -- runs the linter. Useful to check for errors before opening a PR
- `nx run protocol-frontend:build` -- builds the frontend. Useful to check for errors before opening a PR

## Structure

`main.tsx` is the entry point into the frontend app.

The frontend file structure should be familiar to React devs. The core folders are:

- `assets`: Images, favicon, etc.
- `components`: Core React components for the app
- `contexts`: Contexts used throughout the app
  - `OverlayContext`: Context that handles our modals used throughout the app
  - `UserContext`: Context that handles our interactions with the SDK and other user data related items
- `libs`: Wrappers and support for external libraries such as IPFS
- `pages`: Page-level views
- `utils`: Commonly used utilities

## Local Development Setup

There are a few steps to get up and running locally. You'll need to set up and run a local Postgres database as well as run the [Protocol API](../protocol-api) locally. When developing locally for the first time you'll need to follow the [Protocol API Guide](https://github.com/Govrn-HQ/govrn-monorepo/tree/staging/apps/protocol-api) to get up and running.

Once the API is set up, be sure that you're connected to your Postgres database. Using a tool like [Postico](https://eggerapps.at/postico/) can help with interacting with a Postgres database.

If you haven't seeded the database you'll have to go through the onboarding process when first starting the app and create a user for yourself. From there, you can adjust your user settings.

### `.env` Variables

Create a `.env` file in the root directory of the package. Be sure to not put this in the `src` folder.

The following environment variables are required:

- `VITE_PROTOCOL_URL`: e.g. http://localhost:4000/graphql for local development
- `VITE_PROTOCOL_BASE_URL`: e.g. http://localhost:4000/ for local development
- `VITE_INFURA_SUBDOMAIN`: The subdomain of the dedicated Infura gateway
- `VITE_LINEAR_REDIRECT_URI`: e.g. http://localhost:4000/linear/oauth for local development
- `VITE_LINEAR_CLIENT_ID`: The client ID of our Linear app
- `VITE_DISCORD_REDIRECT_URI`: e.g. http://localhost:4000/discord/oauth for local development
- `VITE_DISCORD_CLIENT_ID`: The client ID of Discord app ([Docs](https://discord.com/developers/docs/topics/oauth2))

The Linear and Discord specific environment variables are also used in the `protocol-api` `.env` file, but the frontend ones need to be prefixed with `VITE_`. If you're having issues either integration, check that these variables are set properly.

These assume that you're running the `protocol-api` locally on port 4000. If you are not, you'll not be able to fully interact with the frontend for local development.

### Running the Apps

Once everything is set up, you'll be able to run the following two commands to get started:

- `nx run protocol-api:serve`
  - This runs the Protocol API locally. Once this is running you'll be able to access the GraphQL API at `http://localhost:4000/graphql` -- If you're able to interact with the GraphQL Explorer you'll know that the local API is configured and running properly
- `nx run protocol-frontend:serve`
  - This runs the frontend app at `localhost:3000`
