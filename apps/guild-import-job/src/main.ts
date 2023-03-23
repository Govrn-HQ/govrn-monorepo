import { guild, role } from '@guildxyz/sdk';
import { chunk } from 'lodash';
import pluralize = require('pluralize');
import { GovrnProtocol } from '@govrn/protocol-client';

const INTEGRATION_TYPE = 'Guild';
const CHUNK_SIZE = 500;

const GUILD_ID = process.env.GUILD_ID;
const CHAIN_TYPE_ID = Number(process.env.CHAIN_TYPE_ID);
const PROTOCOL_URL = process.env.PROTOCOL_URL;
const GUILD_IMPORT_TOKEN = process.env.GUILD_IMPORT_TOKEN;

export const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
  Authorization: GUILD_IMPORT_TOKEN,
});

const updateImportStatus = async ({
  importId: id,
  status,
}: {
  importId: number;
  status: 'Pending' | 'Complete' | 'Failed';
}) => {
  return await govrn.guild.import.update({
    where: { id },
    data: {
      import_status: {
        connectOrCreate: {
          where: { name: status },
          create: { name: status },
        },
      },
    },
  });
};

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
  let dbGuild = await govrn.guild.get({
    discord_id: discordId,
  });

  if (!dbGuild) {
    dbGuild = await govrn.guild.create({
      data: {
        discord_id: discordId,
        name: getGuildResponse.name,
        logo: getGuildResponse.imageUrl,
      },
    });
  }
  const guildId = dbGuild.id;

  const importedGuild = await govrn.guild.import.create({
    data: {
      guild: {
        connect: { id: guildId },
      },
      import_status: {
        connectOrCreate: {
          where: { name: 'Pending' },
          create: { name: 'Pending' },
        },
      },
      integration_type: {
        connectOrCreate: {
          where: { name: INTEGRATION_TYPE },
          create: { name: INTEGRATION_TYPE },
        },
      },
      authentication_token: '',
    },
  });
  // This will be used to update the import status later.
  const importId = importedGuild.id;

  try {
    const membershipStatus = await govrn.guildMembershipStatus.get({
      where: { name: 'Member' },
    });
    const membershipStatusId = membershipStatus.id;

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
              await govrn.user.createMany({
                data: members.map(add => ({
                  address: add,
                  chain_type_id: CHAIN_TYPE_ID,
                })),
                skipDuplicates: true,
              });

              const dbUsers = await govrn.user.list({
                where: {
                  address: { in: members },
                },
              });

              await govrn.guild.user.createMany({
                data: dbUsers.map(u => ({
                  guild_id: guildId,
                  user_id: u.id,
                  membership_status_id: membershipStatusId,
                })),
                skipDuplicates: true,
              });
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
