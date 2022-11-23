import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIActivityType } from '@govrn/ui-types';

export const useUserActivityTypesList = (args?: {
  id?: number;
  name?: string;
  active?: boolean;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['activityTypes', args],
    async (): Promise<UIActivityType[]> => {
      const data = await govrn.custom.listActivityTypesByUser(args ? args : {});
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
