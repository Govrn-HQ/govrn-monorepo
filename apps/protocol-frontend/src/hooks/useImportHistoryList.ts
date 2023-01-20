import { useUser } from '../contexts/UserContext';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

export const useImportHistoryList = ({ ...args }) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoImportHistoryList', args],
    async () => {
      const data = await govrn.guild.import.list({ ...args });
      return data;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};

export const useImportHistoryInfiniteList = ({ ...args }, pageSize = 20) => {
  const { govrnProtocol: govrn } = useUser();
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['daoImportHistoryInfiniteList', args],
    async ({ pageParam }) => {
      const data = await govrn.guild.import.list({
        ...args,
        first: pageSize,
        skip: pageParam,
      });
      return data;
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
