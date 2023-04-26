import { GovrnProtocol } from '@govrn/protocol-client';
import { GetGuildByIdResponse } from '@guildxyz/sdk';

const PROTOCOL_URL = process.env.PROTOCOL_URL;
const GUILD_IMPORT_TOKEN = process.env.GUILD_IMPORT_TOKEN;
const CHAIN_TYPE_ID = Number(process.env.CHAIN_TYPE_ID);

const INTEGRATION_TYPE = 'Guild';

export const govrn = new GovrnProtocol(PROTOCOL_URL, null, {
  Authorization: GUILD_IMPORT_TOKEN,
});

export const getMembershipStatusId = async (name: 'Member') => {
  const membershipStatus = await govrn.user.guildMembershipStatus.get({
    where: { name },
  });
  return membershipStatus.id;
};

export const updateImportStatus = async ({
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
        connectOrCreate: { where: { name: status }, create: { name: status } },
      },
    },
  });
};

export const getOrCreateGuild = async (
  discordId: string,
  getGuildResponse: GetGuildByIdResponse | null,
) => {
  if (!getGuildResponse) {
    throw new Error("Get guild response can't be null");
  }

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
  return dbGuild;
};

export const createGuildImport = async (guildId: number) =>
  await govrn.guild.import.create({
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

export const listMatchingUsers = async (addresses: string[]) => {
  const users = await govrn.user.list({
    where: {
      address: { in: addresses },
    },
  });

  return users;
};

export const createManyUsers = (members: string[]) =>
  govrn.user.createMany({
    data: members.map(add => ({
      address: add,
      chain_type_id: CHAIN_TYPE_ID,
    })),
    skipDuplicates: true,
  });

export const connectManyGuildUsers = (
  members: {
    guild_id: number;
    user_id: number;
    membership_status_id: number;
  }[],
) =>
  govrn.guild.user.bulkCreate({
    data: members,
    skipDuplicates: true,
  });
