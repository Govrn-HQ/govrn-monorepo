import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';

const useDaoContributionCountByUserInRange = (args: {
  startDate: Date;
  endDate: Date;
  guildId: number;
}) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoContributionGetCountByUser', args],
    async () => {
      return await govrn.custom.getDaoContributionCountByUser({
        startDate: args.startDate,
        endDate: args.endDate,
        guildId: args.guildId,
      });
    },
  );

  return { isLoading, isError, isFetching, error, data };
};

export default useDaoContributionCountByUserInRange;


