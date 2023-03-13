import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useDaosList = ({ ...args }, refetchOnWindowFocus?: boolean) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['userDaos', args],
    queryFn: async () => {
      const data = await govrn.guild.list({ ...args });
      return data;
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};
