import { useMemo, useState } from 'react';
import {
  Badge,
  Box,
  chakra,
  Flex,
  Link as ChakraLink,
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
import {
  // useImportHistoryInfiniteList,
  useImportHistoryList,
} from '../hooks/useImportHistoryList';
import { useUser } from '../contexts/UserContext';
import { UIGuildImportHistory } from '@govrn/ui-types';
import EmptyImports from './EmptyImports';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mergePages } from '../utils/arrays';
import { formatDate } from '../utils/date';

const ImportHistoryTable = () => {
  const { userData, userDaos } = useUser();

  const [sorting, setSorting] = useState<SortingState>([]);

  const { data: importHistoryData } = useImportHistoryList({
    where: { users: { some: { user_id: { equals: userData?.id } } } },
  });
  console.log('import history', importHistoryData);

  // const { data: importHistoryInfiniteData } = useImportHistoryInfiniteList({
  //   where: { users: { some: { user_id: { equals: userData?.id } } } },
  // });
  // console.log('import history', importHistoryInfiniteData);

  // const columnDefs: ColumnDef<UIGuildImportHistory>[] = useMemo(() => {
  //   return [
  //     {
  //       header: 'id',
  //       accessor: 'id',
  //       cell: {

  //       }
  //     },
  //   ];
  // }, []);

  const columnsDefs = useMemo<ColumnDef<UIGuildImportHistory>[]>(() => {
    return [
      {
        header: 'Settings',
        accessorKey: 'guild_id',
        cell: ({
          getValue,
        }: {
          getValue: Getter<UIGuildImportHistory['guild_id']>;
        }) => {
          return (
            userDaos.get(getValue())?.membershipStatus.name === 'admin' && (
              <IconButton
                aria-label="Click on the gear icon to open this DAO's settings."
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                icon={<HiOutlineCog color="#4A5568" size={24} />} // gray.600
              />
            )
          );
        },
      },
      {
        header: 'DAO',
        accessorKey: 'guild',
        cell: ({
          row,
          getValue,
        }: {
          row: Row<UIGuildImportHistory>;
          getValue: Getter<UIGuildImportHistory['guild']>;
        }) => {
          return (
            <Flex direction="column" wrap="wrap">
              {row.original.import_status.name === 'Completed' ? (
                <Link to={`/dao/${row.original.id}`}>
                  <Text
                    as="span"
                    fontWeight="bold"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    whiteSpace="normal"
                  >
                    {getValue().name}
                  </Text>
                </Link>
              ) : (
                <Text whiteSpace="normal">{getValue().name}</Text>
              )}
            </Flex>
          );
        },
      },
      {
        header: 'Status',
        accessorKey: 'import_status',
        cell: ({
          getValue,
        }: {
          getValue: Getter<UIGuildImportHistory['import_status']>;
        }) => {
          return (
            <Badge
              bgColor={
                getValue().name === 'Completed'
                  ? 'brand.purple'
                  : getValue().name === 'Failed'
                  ? 'red.500'
                  : 'gray.200'
              }
              color={
                getValue().name === 'Completed'
                  ? 'white'
                  : getValue().name === 'Failed'
                  ? 'white'
                  : 'gray.600'
              }
              fontWeight="bold"
              paddingX={2}
              paddingY={1}
              borderRadius="md"
              size="sm"
              textTransform="capitalize"
            >
              {getValue().name}
            </Badge>
          );
        },
      },
      {
        header: 'Date',
        accessorFn: importHistory => formatDate(importHistory.createdAt),
      },
      {
        header: 'Import Method',
        accessorKey: 'integration_type',
        cell: ({
          getValue,
        }: {
          getValue: Getter<UIGuildImportHistory['integration_type']>;
        }) => {
          return <Text whiteSpace="normal">{getValue().name}</Text>;
        },
      },
      {
        header: 'Members',
        accessorFn: importHistory => String(importHistory.users.length),
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          return <Text>{getValue()} </Text>;
        },
      },
    ];
  }, []);

  const table = useReactTable({
    data: importHistoryData !== undefined ? importHistoryData : [], // TODO: see why this is needed compared to other tables
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
      {importHistoryData && importHistoryData.length > 0 ? (
        <Stack spacing="5">
          <Heading as="h3" fontWeight="600" fontSize="md" marginY={4}>
            Import History
          </Heading>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <Table maxWidth="100vw" overflowX="auto">
              <Thead backgroundColor="gray.50">
                {table.getHeaderGroups().map(headerGroup => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <Th key={header.id} borderColor="gray.100">
                        {header.isPlaceholder ? null : (
                          <Box
                            {...{
                              onClick: header.column.getToggleSortingHandler(),
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
                              }[header.column.getIsSorted() as string] ?? null}
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
          </Box>
        </Stack>
      ) : (
        <EmptyImports />
      )}
    </Box>
  );
};

export default ImportHistoryTable;
