import { useQuery } from '@tanstack/react-query';
import { useUser } from '../contexts/UserContext';
import { displayAddress } from '../utils/web3';

const useDaoContributionCountByUserInRange = (
  args: {
    startDate: Date;
    endDate: Date;
    guildId: number;
  },
  refetchOnWindowFocus?: boolean,
) => {
  const { govrnProtocol: govrn } = useUser();

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['daoContributionGetCountByUser', args],
    queryFn: async () => {
      const resp = await govrn.custom.getDaoContributionCountByUser({
        startDate: args.startDate,
        endDate: args.endDate,
        guildId: args.guildId,
      });
      return resp.map(row => {
        return {
          ...row,
          display_name: row?.display_name || `${displayAddress(row.address)}`,
        };
      });
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};

export default useDaoContributionCountByUserInRange;
