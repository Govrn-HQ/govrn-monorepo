import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useDaosList = ({ ...args }) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['userDaos', args],
    async () => {
      const data = await govrn.guild.list({ ...args });
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
