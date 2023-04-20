import { useUser } from '../contexts/UserContext';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { ListGuildUsersQueryVariables } from '@govrn/protocol-client';
import { UIGuildUsers } from '@govrn/ui-types';

export const useDaoUsersList = ({ ...args }) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['daoUsersList', args],
    async () => {
      const data = await govrn.guild.user.list({ ...args });
      return data.result;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};

export const useDaoUsersInfiniteList = (
  args?: ListGuildUsersQueryVariables,
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
    ['daoUsersInfiniteList', args],
    async ({ pageParam }): Promise<UIGuildUsers[]> => {
      const data = await govrn.guild?.user.list(
        { ...args, first: pageSize, skip: pageParam } || {},
      );
      const results = [];
      for (const daoUser of data.result) {
        results.push(daoUser);
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
    hasNextPage: hasNextPage,
  };
};
