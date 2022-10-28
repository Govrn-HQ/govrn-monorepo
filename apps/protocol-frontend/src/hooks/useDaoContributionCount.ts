import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useDaoContributionCountInRange = (args: {
  startDate: Date;
  endDate: Date;
  guildId: number;
}) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoContributionGetCount', args],
    async () => {
      return await govrn.custom.getDaoContributionCount({
        startDate: args.startDate,
        endDate: args.endDate,
        guildId: args.guildId
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useDaoContributionCountInRange;
