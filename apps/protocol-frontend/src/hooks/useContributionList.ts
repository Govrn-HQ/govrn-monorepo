import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
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
    ['contributionList', args],
    async ({ pageParam }): Promise<UIContribution[]> => {
      const data = await govrn.contribution.list(
        { ...args, first: pageSize, skip: pageParam } || {},
      );
      return data.result;
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
    hasNextPage,
  };
};
