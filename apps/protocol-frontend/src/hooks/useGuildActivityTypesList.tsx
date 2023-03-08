import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { ListGuildActivityTypesQueryVariables } from '@govrn/protocol-client';

export const useGuildActivityTypesList = (
  args: ListGuildActivityTypesQueryVariables,
) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['guildActivityTypesList', args],
    async () => {
      const data = await govrn.guild.activity_type.list(args);
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
