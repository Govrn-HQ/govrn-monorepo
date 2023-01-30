import { useMemo, useState } from 'react';
import {
  Badge,
  Box,
  chakra,
  Flex,
  Heading,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { HiOutlineCog } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
  Row,
} from '@tanstack/react-table';
import { useImportHistoryInfiniteList } from '../hooks/useImportHistoryList';
import { useUser } from '../contexts/UserContext';
import { UIGuildImportHistory } from '@govrn/ui-types';
import EmptyImports from './EmptyImports';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mergeHistoryPages } from '../utils/arrays';
import { formatDate } from '../utils/date';
import { UIGuildUsers } from '@govrn/ui-types';
import { useDaoUsersInfiniteList } from '../hooks/useDaoUsersList';

interface DaoSettingsMembersTableProps {
  daoId: number;
}
const DaoSettingsMembersTable = ({ daoId }: DaoSettingsMembersTableProps) => {
  const { userData, userDaos } = useUser();

  const [sorting, setSorting] = useState<SortingState>([]);

  const {
    data: daoUsersData,
    hasNextPage,
    fetchNextPage,
  } = useDaoUsersInfiniteList({
    where: { guild_id: { equals: daoId } },
  });

  const data = useMemo<UIGuildUsers[]>(() => {
    return mergeHistoryPages(
      daoUsersData && daoUsersData.pages.length > 0 ? daoUsersData.pages : [],
    );
  }, [daoUsersData]);

  console.log('data', data);

  const columnsDefs = useMemo<ColumnDef<UIGuildUsers>[]>(() => {
    return [];
  }, [daoUsersData]);

  const table = useReactTable({
    data,
    columns: columnsDefs,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugAll: false,
  });

  return (
    <Box
      paddingY={{ base: '4' }}
      paddingX={{ base: '0', md: '4' }}
      color="gray.700"
      width="100%"
      maxWidth="100vw"
      overflowX="auto"
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'md' }}
      marginBottom={10}
    >
      {daoUsersData && daoUsersData.pages.length > 0 ? (
        <Stack spacing="5">
          <Heading as="h3" fontWeight="600" fontSize="md" marginY={4}>
            Import History
          </Heading>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <InfiniteScroll
              dataLength={table.getRowModel().rows.length}
              next={fetchNextPage}
              scrollThreshold={0.8}
              hasMore={hasNextPage || false}
              loader={<GovrnSpinner />}
            >
              <Table maxWidth="100vw" overflowX="auto">
                <Thead backgroundColor="gray.50">
                  {table.getHeaderGroups().map(headerGroup => (
                    <Tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <Th key={header.id} borderColor="gray.100">
                          {header.isPlaceholder ? null : (
                            <Box
                              {...{
                                onClick:
                                  header.column.getToggleSortingHandler(),
                                cursor: 'pointer',
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}

                              <chakra.span paddingLeft="4">
                                {{
                                  asc: (
                                    <IoArrowUp aria-label="sorted-ascending" />
                                  ),
                                  desc: (
                                    <IoArrowDown aria-label="sorted-descending" />
                                  ),
                                }[header.column.getIsSorted() as string] ??
                                  null}
                              </chakra.span>
                            </Box>
                          )}
                        </Th>
                      ))}
                      <Th borderColor="gray.100" />
                    </Tr>
                  ))}
                </Thead>
                <Tbody>
                  {table.getRowModel().rows.map(row => {
                    return (
                      <Tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                          return (
                            <Td borderColor="gray.100" key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </Td>
                          );
                        })}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </InfiniteScroll>
          </Box>
        </Stack>
      ) : (
        <EmptyImports />
      )}
    </Box>
  );
};

export default DaoSettingsMembersTable;
