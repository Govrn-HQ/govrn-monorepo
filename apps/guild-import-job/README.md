## Guild Import Job

## Summary

This is a job that imports guilds by retrieving them from the NATS server stream. The job is responsible for fetching guild IDs from the stream and importing them into the database using [@guild.xyz/sdk](https://www.npmjs.com/package/@guildxyz/sdk).

## Testing & Debugging

To fetch a guild named `our-guild` from the NATS server stream named `guild-import-job`, follow these steps:

1. Install `nats-server` locally [via a Package Manager](https://docs.nats.io/running-a-nats-service/introduction/installation#installing-via-a-package-manager).
2. Install [NATS Command Line Interface](https://github.com/nats-io/natscli). _This step is optional but highly recommended for a smoother debugging experience_.
3. Add env variables mentioned in the previous section.
4. Run protocol API: `yarn nx run protocol-api:serve`.
5. run nats server: `nats-server --jetstream`
6. Publish messages to nats server with a stream name: `guild-import-job`. You can acheive that using one of two ways:
   - nats CLI: `nats -s nats://localhost:4222 publish "guild-import-job.row" "our-guild"`. _It is recommended to complete step 7 at least once before running this command_.
   - Alternatively, call the `writeMessages()` utility function from `/helpers/nats.ts` after you successfully establish a connection.
7. To check if a message is successfully published: `nats stream report`. To view messages: `nats stream view`
8. Run guild import job: `yarn nx run guild-import-job:serve`.

Unfortunately, `nats-server` doesn't include a built-in logging or debugging mode. However, nats CLI provide a convenient ways to interact with the server's state using `nats stream help`, accessing various functionalities and insights about nats server.

Here's a Loom screencast to prepare `nats-server` for testing:
https://www.loom.com/share/18fad924307f4c14a87fdd0b0ef1458c
