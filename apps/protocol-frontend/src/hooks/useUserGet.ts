import { GovrnProtocol } from '@govrn/protocol-client';
import { useQuery } from '@tanstack/react-query';
import { PROTOCOL_URL } from '../utils/constants';

export const useUserGet = ({
  userId,
  refetchOnWindowFocus,
}: {
  userId?: number;
  refetchOnWindowFocus?: boolean;
}) => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['userGet', userId],
    queryFn: async () => {
      if (!userId) {
        return null;
      }
      const resp = await govrn.user.get(userId);
      const userDaos = new Map();
      if (resp?.guild_users) {
        resp?.guild_users.forEach(guildUser => {
          userDaos.set(guildUser.guild_id, guildUser);
        });
      }
      return { ...resp, userDaos };
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};

export default useUserGet;
