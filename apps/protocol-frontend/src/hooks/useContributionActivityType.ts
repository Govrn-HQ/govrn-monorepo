import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useContributionActivityType = (
  args?: {
    startDate: Date;
    endDate: Date;
    guildId: number;
  },
  refetchOnWindowFocus?: boolean,
) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['contributionActivityTypes', args],
    queryFn: async () => {
      const data = await govrn.custom.getContributionCountByActivityType(
        args ? args : {},
      );
      return data;
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};
