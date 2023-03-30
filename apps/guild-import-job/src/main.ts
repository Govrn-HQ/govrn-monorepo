import { guild, role } from '@guildxyz/sdk';
import { chunk } from 'lodash';
import pluralize = require('pluralize');
import {
  createManyUsers,
  createGuildImport,
  getMembershipStatusId,
  getOrCreateGuild,
  updateImportStatus,
  connectManyGuildUsers,
  listMatchingUsers,
} from './helper/db';
import { pullMessages, setupNats } from './nats';
import { NatsConnection, StringCodec } from 'nats';

const CHUNK_SIZE = 500;

const importGuild = async (name: string) => {
  console.log(`:: Fetching guild: ${name}`);
  const getGuildResponse = await guild.get(name);

  const discordPlatforms = getGuildResponse.guildPlatforms.filter(g => {
    return g.invite.startsWith('https://discord.gg');
  });

  if (discordPlatforms.length == 0) {
    return;
  }
  const discordId = discordPlatforms[0].platformGuildId;

  console.log(`:: Fetching roles of guild: ${name}.`);
  const roles = await Promise.all(
    getGuildResponse.roles.map(async r => {
      return await role.get(r.id);
    }),
  );
  console.log(`:: ${roles.length} roles fetched.`);

  console.log(`:: Inserting guild into database.`);
  const dbGuild = await getOrCreateGuild(discordId, getGuildResponse);
  const guildId = dbGuild.id;

  const importedGuild = await createGuildImport(guildId);
  // This will be used to update the import status later.
  const importId = importedGuild.id;

  try {
    const membershipStatusId = await getMembershipStatusId('Member');

    await Promise.all(
      roles
        .filter(r => r !== null)
        .map(async role => {
          console.log(
            `:: Role '${role.name}' has ${role.members.length} ${pluralize(
              'member',
              role.members.length,
            )}.`,
          );

          await Promise.all(
            chunk(role.members, CHUNK_SIZE).map(async members => {
              await createManyUsers(members);
              const dbUsers = await listMatchingUsers(members);

              await connectManyGuildUsers(
                dbUsers.map(u => ({
                  guild_id: guildId,
                  user_id: u.id,
                  membership_status_id: membershipStatusId,
                })),
              );
            }),
          );
        }),
    );

    await updateImportStatus({
      importId: importId,
      status: 'Complete',
    });
  } catch (e) {
    await updateImportStatus({
      importId: importId,
      status: 'Failed',
    });
    throw e;
  }
};

const STREAM_NAME = 'guild-import-job';
const servers = [{ servers: 'localhost' }];

/**
 * This function pulls messages from the stream and process them to import associated guilds.
 *
 * For testing purposes, you can use {@link https://github.com/nats-io/natscli nats CLI tool}
 * to publish messages to the stream.
 */
const handleNatsConnection = async (conn: NatsConnection) => {
  console.log(`:: Connected to NATS server.`, conn.info);

  await pullMessages(
    conn,
    STREAM_NAME,
    `${STREAM_NAME}-durable`,
    async (nc, msg) => {
      console.log(`:: Received message: ${msg}`);
      const sc = StringCodec();
      await importGuild(sc.decode(msg.data));
    },
  );
};

const main = async () => {
  await setupNats(
    servers,
    STREAM_NAME,
    async conn => await handleNatsConnection(conn),
  );
};

main()
  .then(() => console.log(`:: Done.`))
  .catch(e => console.error(e));
