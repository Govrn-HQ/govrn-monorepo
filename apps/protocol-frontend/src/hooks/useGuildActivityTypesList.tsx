import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { ListGuildActivityTypesQueryVariables } from '@govrn/protocol-client';

export const useGuildActivityTypesList = ({
  args,
  refetchOnWindowFocus,
}: {
  args?: ListGuildActivityTypesQueryVariables;
  refetchOnWindowFocus?: boolean;
}) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['guildActivityTypesList', args],
    queryFn: async () => {
      const data = await govrn.guild.activity_type.list(args ? args : {});
      return data;
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};
