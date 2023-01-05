import { guild, role } from '@guildxyz/sdk';
import { govrn } from './db';

// const GUILD_ID = 'caribbean-blockchain-alliance';
const GUILD_ID = 'our-guild';
const INTEGRATION_TYPE = 'Guild';

const main = async () => {
  try {
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

    console.log(`:: Inserting guild to database.`);
    const existingGuild = await govrn.guild.get({
      discord_id: discordId,
    });

    if (existingGuild) {
      console.error(':: This Guild already exists in database.');
      return;
    }

    const createdGuild = await govrn.guild.create({
      data: {
        discord_id: discordId,
        name: getGuildResponse.name,
        logo: getGuildResponse.imageUrl,
      },
    });

    const guildId = createdGuild.id;

    // Add guild import record.
    await govrn.guild.import.create({
      data: {
        guild: {
          connect: { id: guildId },
        },
        integration_type: {
          connectOrCreate: {
            where: { name: INTEGRATION_TYPE },
            create: { name: INTEGRATION_TYPE },
          },
        },
        authentication_token: 'What&how',
      },
    });

    await Promise.all(
      roles.map(async role => {
        console.log(
          `:: Inserting ${role.members.length} members of role ${role.name}.`,
        );
        const { count: usersCount } = await govrn.user.createMany({
          data: role.members.map(add => ({
            address: add,
            chain_type_id: 1, // TODO.
          })),
          skipDuplicates: true,
        });
        console.log(
          `:: Successfully inserted ${usersCount} members of role ${role.name}.`,
        );

        const dbUsers = await govrn.user.list({
          where: {
            address: { in: role.members },
          },
        });

        console.log(
          `:: adding ${dbUsers.length} users to ${createdGuild.name}.`,
        );
        const { count: addedToGuildCount } = await govrn.guild.user.createMany({
          data: dbUsers.map(u => ({
            guild_id: guildId,
            user_id: u.id,
          })),
          skipDuplicates: true,
        });

        console.log(
          `:: ${addedToGuildCount} users added to ${createdGuild.name}.`,
        );

        console.log(`:: Done.`);
      }),
    );
  } catch (e) {
    console.error(e);
  }
};

main().then();
