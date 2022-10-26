
import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIActivityType } from '@govrn/ui-types';

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

// startDate: "6/1/2022", endDate: "10/1/2022", guildId: 2
