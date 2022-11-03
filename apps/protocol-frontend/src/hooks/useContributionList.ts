import { useUser } from '../contexts/UserContext';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { UIContribution } from '@govrn/ui-types';
import { ListContributionsQueryVariables } from '@govrn/protocol-client';
import { formatDate } from '../utils/date';

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

export const useContributionInfiniteList = (
  args?: ListContributionsQueryVariables,
  pageSize = 20,
) => {
  const { govrnProtocol: govrn } = useUser();
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['contributionInfiniteList', args],
    async ({ pageParam }): Promise<UIContribution[]> => {
      const data = await govrn.contribution.list(
        { ...args, first: pageSize, skip: pageParam } || {},
      );
      const results = [];
      for (const contribution of data.result) {
        results.push({
          ...contribution,
          date_of_engagement: formatDate(contribution.date_of_engagement),
          date_of_submission: formatDate(contribution.date_of_submission),
        });
      }
      return results;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        let skip = 0;
        if (lastPage.length < pageSize) {
          return;
        }
        for (const page of pages) {
          skip += page.length;
        }
        return skip;
      },
    },
  );
  return {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage: hasNextPage || false,
  };
};
