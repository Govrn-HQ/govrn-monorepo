import { useQuery } from '@tanstack/react-query';
import {
  fetchGuild,
  fetchGuildMemberships,
  Guild,
  GuildMembership,
} from '../utils/guild-xyz';
import { useUser } from '../contexts/UserContext';

/**
 * Fetch guilds the user has joined.
 *
 * Note: This hook is only using guild.xyz's API endpoint not `@guild/sdk`.
 *       The reason is that `@guild/sdk` doesn't support fetching guilds joined
 *       by a user.
 */
export const useGuildXYZListGuilds = () => {
  const { userData } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['guildXYZListGuilds'],
    queryFn: async () => {
      if (userData?.address === undefined) {
        throw new Error('User not found');
      }
      // fetch user joined guilds' ids.
      let guildMembership: GuildMembership[] = [];
      try {
        guildMembership = await fetchGuildMemberships(userData?.address);
      } catch (error) {
        throw new Error('Failed to get user joined guilds');
      }

      // fetch & map guilds' ids to guilds' basic info.
      let guilds: Guild[] = [];
      try {
        guilds = await Promise.all(
          guildMembership
            // TODO: which guilds to show? all or only admin/owner?
            .filter(guild => true /*guild.isAdmin  || guild.isOwner*/)
            .map(async guild => await fetchGuild(guild.guildId)),
        );
      } catch (error) {
        throw new Error('Failed to get guilds info');
      }

      return guilds;
    },
  });

  return { isLoading, isError, isFetching, error, data };
};
