import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useImportHistory = ({ ...args }) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoImportHistory', args],
    async () => {
      const data = await govrn.guild.import.list({ ...args });
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
