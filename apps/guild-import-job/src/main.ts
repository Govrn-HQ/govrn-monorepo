import { GetGuildByIdResponse, guild, role } from '@guildxyz/sdk';
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

const CHUNK_SIZE = 500;
const GUILD_ID = process.env.GUILD_ID;

const main = async () => {
  console.log(`:: Fetching guild: ${GUILD_ID}`);
  const getGuildResponse = await guild.get(GUILD_ID);

  const discordPlatforms = getGuildResponse.guildPlatforms.filter(g => {
    return g.invite.startsWith('https://discord.gg');
  });

  if (discordPlatforms.length == 0) {
    return;
  }
  const discordId = discordPlatforms[0].platformGuildId;

  console.log(`:: Fetching roles of guild: ${GUILD_ID}.`);
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
    console.error(e);
    await updateImportStatus({
      importId: importId,
      status: 'Failed',
    });
    throw e;
  }
};

main()
  .then(() => console.log(`:: Done.`))
  .catch(e => console.error(e));
