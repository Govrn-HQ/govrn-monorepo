import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';

export const useContributionActivityType = (
  args?: {
    startDate: Date;
    endDate: Date;
    guildId: number;

  }) => {
  const { govrnProtocol: govrn } = useUser()
  const { isLoading, isFetching, isError, error, data } = useQuery(['contributionActivityTypes', args], async () => {
    const data = await govrn.custom.getContributionCountByActivityType(args ? args : {})
    return data
  })
  return { isLoading, isError, isFetching, error, data };
}
