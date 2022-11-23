import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useDaoContributionCountInRange = (
  args: {
    startDate: Date;
    endDate: Date;
    guildId: number;
  },
  refetchOnWindowFocus?: boolean,
) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['daoContributionGetCount', args],
    queryFn: async () => {
      return await govrn.custom.getDaoContributionCount({
        startDate: args.startDate,
        endDate: args.endDate,
        guildId: args.guildId,
      });
    },
    refetchOnWindowFocus,
  });

  return { isLoading, isError, isFetching, error, data };
};

export default useDaoContributionCountInRange;
