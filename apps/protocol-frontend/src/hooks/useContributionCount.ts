import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useContributionCountInRange = (
  args: {
    id?: number | null;
    startDate: Date;
    endDate: Date;
    guildIds?: number[] | null;
    excludeUnassigned?: boolean;
  },
  refetchOnWindowFocus?: boolean,
) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['contributionGetCount', args],
    queryFn: async () => {
      return await govrn.custom.getContributionCountByDateForUserInRange(args);
    },
    refetchOnWindowFocus,
  });

  return { isLoading, isError, isFetching, error, data };
};

export default useContributionCountInRange;
