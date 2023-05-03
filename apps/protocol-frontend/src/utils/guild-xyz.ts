import axios from 'axios';

export type GuildMembership = {
  guildId: number;
  roleIds: number[];
  isAdmin: boolean;
  isOwner: boolean;
};

export type Guild = {
  id: number;
  name: string;
  urlName: string;
  description: string;
  imageUrl: string;
};

/**
 * Fetches the guilds the user has joined. The response is an array of guild IDs,
 * along with information on whether the user is an admin or owner of the guild.
 *
 * @param address The user's address associated with their guild.xyz account.
 * @see {@link https://docs.guild.xyz/guild/guides/guild-api-alpha#get-guilds-joined-by-a-user Guild.xyz API docs}
 */
export const fetchGuildMemberships = async (
  address: string,
): Promise<GuildMembership[]> => {
  const response = await axios.get(
    `https://api.guild.xyz/v1/user/membership/${address}`,
  );

  if (response.status !== 200) {
    throw new Error(`Failed to get user joined guilds.`);
  }
  return response.data as GuildMembership[];
};

/**
 * Fetches basic information about a guild.
 *
 * @param guildId The guild's ID.
 * @see {@link https://docs.guild.xyz/guild/guides/guild-api-alpha#get-a-guild-by-id Guild.xyz API docs}
 */
export const fetchGuild = async (guildId: number): Promise<Guild> => {
  const response = await axios.get(`https://api.guild.xyz/v1/guild/${guildId}`);

  if (response.status !== 200) {
    throw new Error(`Failed to get guild.`);
  }
  return response.data as Guild;
};
