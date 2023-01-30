import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useDaoGet = ({ ...args }) => {
  console.log('args', args);
  console.log('args.id', args.id);
  console.log('boolean', Boolean(args.id));
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoGet', args],
    async () => {
      const data = await govrn.guild.get({ ...args });
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
