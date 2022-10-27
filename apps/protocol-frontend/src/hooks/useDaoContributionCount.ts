import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useDaoContributionCount = (args: {
  startDate: Date;
  endDate: Date;
  guildIds?: number[] | null;
  excludeUnassigned?: boolean;
}) => {
  const { userData, govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['contributionGetCount', args],
    async () => {
      if (!userData?.id) {
        console.error('getUserContributionsCount has no userData.id');
        return [];
      }

      return await govrn.custom.getContributionCount({
        userId: userData?.id,
        ...args,
        startDate:  args.startDate,
        endDate:    args.endDate
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useDaoContributionCount;
