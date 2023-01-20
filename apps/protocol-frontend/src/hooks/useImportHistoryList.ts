import { useUser } from '../contexts/UserContext';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { ListGuildImportsQueryVariables } from '@govrn/protocol-client';
import { UIGuildImportHistory } from '@govrn/ui-types';

export const useImportHistoryList = (
  args?: ListGuildImportsQueryVariables,
  refetchOnWindowFocus?: boolean,
) => {
  const { govrnProtocol: govrn } = useUser();
  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['daoImportHistoryList', args],
    queryFn: async (): Promise<UIGuildImportHistory[]> => {
      const data = await govrn.guild.import.list({ ...args });
      return data;
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};

// export const useImportHistoryInfiniteList = (
//   args?: ListGuildImportsQueryVariables,
//   pageSize = 20,
// ) => {
//   const { govrnProtocol: govrn } = useUser();
//   const {
//     status,
//     data,
//     isFetching,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//   } = useInfiniteQuery(
//     ['daoImportHistoryInfiniteList', args],
//     async ({ pageParam }): Promise<UIGuildImportHistory[]> => {
//       const data = await govrn.guild.import.list(
//         { ...args, first: pageSize, skip: pageParam } || {},
//       );
//       const results = [];
//       for (const importHistory of data.result) {
//         results.push(importHistory);
//       }
//       return results;
//     },
//     {
//       getNextPageParam: (lastPage, pages) => {
//         let skip = 0;
//         if (lastPage.length < pageSize) {
//           return;
//         }
//         for (const page of pages) {
//           skip += page.length;
//         }
//         return skip;
//       },
//     },
//   );
//   return {
//     status,
//     data,
//     isFetching,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage: hasNextPage || false,
//   };
// };
