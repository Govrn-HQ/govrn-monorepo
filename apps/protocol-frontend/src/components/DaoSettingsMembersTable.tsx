import { useMemo, useState, useEffect } from 'react';
import {
  Badge,
  Button,
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
import { mergeMemberPages } from '../utils/arrays';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { UIGuildUsers } from '@govrn/ui-types';
import { useDaoUsersInfiniteList } from '../hooks/useDaoUsersList';
import { RowSelectionState } from '@tanstack/table-core';

interface DaoSettingsMembersTableProps {
  daoId: number;
}
const DaoSettingsMembersTable = ({ daoId }: DaoSettingsMembersTableProps) => {
  const { userData, userDaos } = useUser();
  const {
    data: daoUsersData,
    hasNextPage,
    fetchNextPage,
  } = useDaoUsersInfiniteList({
    where: { guild_id: { equals: daoId } },
  });

  const data = useMemo<UIGuildUsers[]>(() => {
    return mergeMemberPages(
      daoUsersData && daoUsersData.pages.length > 0 ? daoUsersData.pages : [],
    );
  }, [daoUsersData]);

  console.log('data', data);
  const initialAdminsArray = data.map(
    user => user.membershipStatus?.name === 'Admin',
  );

  console.log('initialAdminsArray', initialAdminsArray);

  // const initialAdmins = initialAdminsArray.reduce(
  //   (o, key, idx) => ({ [key as string]: key }),
  //   {},
  // );

  // console.log('initialAdmins', { ...initialAdminsArray });

  // const test = {
  //   '0': true,
  //   '1': false,
  // };

  // const res = initialAdminsArray.reduce(
  //   (acc, curr) => ((curr] = ''), acc),
  //   {},
  // );
  // console.log('res', res);

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  // const [selectedRows, setSelectedRows] = useState<UIGuildUsers[]>(
  //   data !== undefined
  //     ? data.filter(user => user.membershipStatus?.name === 'Admin')
  //     : [],
  // );
  const [sorting, setSorting] = useState<SortingState>([]);

  const columnsDefs = useMemo<ColumnDef<UIGuildUsers>[]>(() => {
    return [
      {
        id: 'selection',
        header: 'Select Admin',
        cell: ({ row, table }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      {
        header: 'Member Address',
        accessorKey: 'user',
        cell: ({ getValue }: { getValue: Getter<UIGuildUsers['user']> }) => {
          return <Text whiteSpace="normal">{getValue().address}</Text>;
        },
      },
    ];
  }, [daoUsersData]);

  const table = useReactTable({
    data,
    columns: columnsDefs,
    state: {
      sorting,
      rowSelection: rowSelection,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    debugAll: false,
  });

  // useEffect(() => {
  //   const selectedGuildUser: UIGuildUsers[] = data.filter(
  //     user => user.membershipStatus?.name === 'Admin',
  //   );
  //   for (const key in rowSelection) {
  //     if (rowSelection[key]) {
  //       selectedGuildUser.push(table.getRow(key).original);
  //     }
  //   }
  //   setSelectedRows(selectedGuildUser);
  //   console.log('selected', selectedGuildUser);
  // }, [rowSelection, table, data]);

  console.log('table state', table.getState());

  return (
    <Flex direction="column" marginBottom={8}>
      <Box
        color="gray.700"
        width="100%"
        maxWidth="100vw"
        overflowX="auto"
        background="white"
        boxShadow="sm"
        borderWidth="1px"
        borderColor="gray.400"
        borderRadius={{ base: 'none', md: 'md' }}
        marginTop={8}
        marginBottom={4}
      >
        {daoUsersData && daoUsersData.pages.length > 0 ? (
          <Stack spacing="5">
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
      <Button variant="secondary" width="fit-content">
        Set Admins
      </Button>
    </Flex>
  );
};

export default DaoSettingsMembersTable;
