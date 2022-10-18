import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';
import { subWeeks } from 'date-fns';

type ContributionCountArgs = {
  startDate: Date;
  endDate: Date;
  guildIds?: number[] | null;
  excludeUnassigned?: boolean;
};

const useContributionCountInRange = (args: ContributionCountArgs) => {
  const { userData, govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['ContributionGetCount', args],
    async () => {
      if (!userData?.id) {
        console.error('getUserContributionsCount has no userData.id');
        return [];
      }

      return await govrn.custom.getContributionCountByDateForUserInRange({
        id: userData?.id,
        ...args,
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export const useContributionCountInYear = (
  args: Omit<ContributionCountArgs, 'startDate'>,
) => {
  const { userData, govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['ContributionGetCountYear', args],
    async () => {
      if (!userData?.id) {
        console.error('getUserContributionsCount has no userData.id');
        return [];
      }

      return await govrn.custom.getContributionCountByDateForUserInRange({
        id: userData?.id,
        startDate: subWeeks(args.endDate, 52),
        ...args,
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useContributionCountInRange;
