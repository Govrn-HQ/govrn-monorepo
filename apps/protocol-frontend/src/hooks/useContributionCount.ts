import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useContributionCountInRange = (args: {
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

      return await govrn.custom.getContributionCountByDateForUserInRange({
        id: userData?.id,
        ...args,
        startDate: args.startDate,
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useContributionCountInRange;
