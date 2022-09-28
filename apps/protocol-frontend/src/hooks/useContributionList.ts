import { useUser } from '../contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import { UIContribution } from '@govrn/ui-types';
import { ListContributionsQueryVariables } from '@govrn/protocol-client';

export const useContributionList = (args?: ListContributionsQueryVariables) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['contributionList', args],
    async (): Promise<UIContribution[]> => {
      const data = await govrn.contribution.list(args || {});
      return data.result;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};
