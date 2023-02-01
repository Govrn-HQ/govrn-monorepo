import { useMemo, useState, useEffect } from 'react';
import {
  Badge,
  Button,
  Box,
  chakra,
  Flex,
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
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
} from '@tanstack/react-table';
import { useUser } from '../contexts/UserContext';
import { useDaoUserUpdate } from '../hooks/useDaoUserUpdate';
import EmptyImports from './EmptyImports';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mergeMemberPages } from '../utils/arrays';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import { UIGuildUsers } from '@govrn/ui-types';
import { useDaoUsersInfiniteList } from '../hooks/useDaoUsersList';
import { RowSelectionState } from '@tanstack/table-core';
import { SortOrder } from '@govrn/protocol-client';

interface DaoSettingsMembersTableProps {
  daoId: number;
}
const DaoSettingsMembersTable = ({ daoId }: DaoSettingsMembersTableProps) => {
  const { userData } = useUser();
  const [selectedMemberAddresses, setSelectedMemberAddreses] = useState<
    UIGuildUsers[]
  >([]);

  const {
    data: daoUsersData,
    hasNextPage,
    fetchNextPage,
  } = useDaoUsersInfiniteList({
    where: { guild_id: { equals: daoId } },
    orderBy: [{ membershipStatus: { name: SortOrder.Asc } }],
  });

  const { mutateAsync: updateDaoMemberStatus } = useDaoUserUpdate();

  const data = useMemo<UIGuildUsers[]>(() => {
    return mergeMemberPages(
      daoUsersData && daoUsersData.pages.length > 0 ? daoUsersData.pages : [],
    );
  }, [daoUsersData]);

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [selectedRows, setSelectedRows] = useState<UIGuildUsers[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [addingMembers, setAddingMembers] = useState(false);

  const handleSetAdmins = async () => {
    setAddingMembers(true);
    if (
      userData?.id === undefined ||
      selectedMemberAddresses === undefined ||
      selectedMemberAddresses.length === 0
    )
      return;
    if (selectedMemberAddresses !== undefined) {
      const parsedDaoMemberAddresses = selectedMemberAddresses.filter(
        memberAddress => memberAddress.user.address !== userData?.address,
      );
      const uniqueParsedDaoMemberAddresses = [
        ...new Set(parsedDaoMemberAddresses),
      ];
      uniqueParsedDaoMemberAddresses.map(address => {
        updateDaoMemberStatus({
          userId: userData.id,
          guildId: daoId,
          memberId: address.user_id,
          membershipStatusId: 1,
        });
        return true;
      });
      setAddingMembers(false);
    }
  };

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
          return getValue().address === userData?.address ? (
            <Text
              whiteSpace="normal"
              fontWeight="bold"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              {getValue().address}
            </Text>
          ) : (
            <Text whiteSpace="normal">{getValue().address}</Text>
          );
        },
      },
      {
        header: 'Role',
        accessorKey: 'membershipStatus',
        cell: ({
          getValue,
        }: {
          getValue: Getter<UIGuildUsers['membershipStatus']>;
        }) => {
          if (getValue() === undefined || getValue() === null) return;
          return (
            <Badge
              minWidth="5rem"
              textAlign="center"
              bgColor={
                getValue()?.name === 'Admin'
                  ? 'brand.purple'
                  : getValue()?.name === 'Member'
                  ? 'brand.magenta'
                  : 'gray.200'
              }
              color={
                getValue()?.name === 'Admin'
                  ? 'white'
                  : getValue()?.name === 'Member'
                  ? 'white'
                  : 'gray.600'
              }
              fontWeight="bold"
              paddingX={2}
              paddingY={1}
              borderRadius="md"
              size="sm"
              textTransform="uppercase"
            >
              {getValue()?.name}
            </Badge>
          );
        },
      },
    ];
  }, [userData?.address]);

  const table = useReactTable({
    data,
    columns: columnsDefs,
    state: {
      sorting,
      rowSelection: rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugAll: false,
  });

  useEffect(() => {
    setSelectedMemberAddreses(selectedRows);
  }, [selectedRows, selectedMemberAddresses]);

  useEffect(() => {
    const selectedMemberAddresses: UIGuildUsers[] = [];
    for (const key in rowSelection) {
      if (rowSelection[key]) {
        selectedMemberAddresses.push(table.getRow(key).original);
      }
    }
    setSelectedRows(selectedMemberAddresses);
  }, [rowSelection, table]);

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
            <Box
              width="100%"
              maxWidth="100vw"
              overflowX="auto"
              height="15rem"
              overflowY="scroll"
            >
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
      <Button
        variant="secondary"
        width="fit-content"
        onClick={handleSetAdmins}
        disabled={addingMembers}
      >
        Set Admins
      </Button>
    </Flex>
  );
};

export default DaoSettingsMembersTable;
