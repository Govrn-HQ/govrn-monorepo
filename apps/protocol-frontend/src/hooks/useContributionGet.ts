import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIContribution } from '@govrn/ui-types';
import { formatDate } from '../utils/date';

export const useContributionGet = (id: number) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['contributionGet', id],
    async (): Promise<UIContribution | null> => {
      const data = await govrn.contribution.get(id);
      if (data) {
        const formattedResponse = {
          ...data,
          date_of_engagement: formatDate(data.date_of_engagement),
          date_of_submission: formatDate(data.date_of_submission),
        };
        return formattedResponse;
      }
      return null;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
