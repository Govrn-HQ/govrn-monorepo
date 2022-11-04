import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useContributionCountInRange = (args: {
  id?: number | null;
  startDate: Date;
  endDate: Date;
  guildIds?: number[] | null;
  excludeUnassigned?: boolean;
}) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['contributionGetCount', args],
    async () => {
      return await govrn.custom.getContributionCountByDateForUserInRange(args);
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useContributionCountInRange;
