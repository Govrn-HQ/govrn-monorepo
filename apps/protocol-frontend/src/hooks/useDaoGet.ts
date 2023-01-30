import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useDaoGet = ({ ...args }) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['guildGet', args],
    async () => {
      const data = await govrn.guild.get({ ...args });
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
