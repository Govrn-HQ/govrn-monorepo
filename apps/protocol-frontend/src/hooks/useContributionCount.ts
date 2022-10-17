import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useContributionCount = (args: {
  startDate: Date | string;
  endDate: Date | string;
  guildIds?: number[] | null | undefined;
  excludeUnassigned?: boolean;
}) => {
  const { userData, govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['GetContributionCount', args],
    async () => {
      if (!userData?.id) {
        console.error('getUserContributionsCount has no userData.id');
        return [];
      }

      return await govrn.custom.getContributionCountByDateForUserInRange({
        id: userData?.id,
        startDate: args.startDate,
        endDate: args.endDate,
        guildIds: args.guildIds,
        excludeUnassigned: args.excludeUnassigned,
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useContributionCount;
