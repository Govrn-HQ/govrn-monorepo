
import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIActivityType } from '@govrn/ui-types';

export const useUserActivityTypesList = () => {
  const { govrnProtocol: govrn } = useUser()
  const { isLoading, isFetching, isError, error, data } = useQuery(['activityTypes'], async (): Promise<UIActivityType[]> => {
    const data = await govrn.custom.listActivityTypesByUser({})
    return data
  })
  return { isLoading, isError, isFetching, error, data };
}

