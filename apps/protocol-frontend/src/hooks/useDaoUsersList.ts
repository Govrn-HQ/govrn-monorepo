import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useDaoUsersList = ({ ...args }) => {
  console.log('in hook', args);
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoUsersList', args],
    async () => {
      const data = await govrn.guild.user.list({ ...args });
      return data.result;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
