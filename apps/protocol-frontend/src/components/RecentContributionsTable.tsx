import { useMemo, useState } from 'react';
import {
  Box,
  chakra,
  Flex,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
} from '@tanstack/react-table';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { UIContribution } from '@govrn/ui-types';
import { formatDate } from '../utils/date';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { mergePages } from '../utils/arrays';

const columnsDef: ColumnDef<UIContribution>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ getValue }: { getValue: Getter<string> }) => {
      return (
        <Flex direction="column" wrap="wrap">
          <Text whiteSpace="normal">{getValue()}</Text>
        </Flex>
      );
    },
  },
  {
    header: 'Type',
    accessorKey: 'activity_type',
    cell: ({
      getValue,
    }: {
      getValue: Getter<UIContribution['activity_type']>;
    }) => {
      return <Text>{getValue().name} </Text>;
    },
  },
  {
    header: 'Engagement Date',
    accessorFn: contribution => formatDate(contribution.date_of_engagement),
  },
  {
    header: 'Contributor',
    accessorKey: 'user',
    cell: ({ getValue }: { getValue: Getter<UIContribution['user']> }) => {
      return <Text>{getValue().name ?? ''} </Text>;
    },
  },
];

const RecentContributionsTable = ({
  contributionsData,
  hasMoreItems,
  nextPage,
}: {
  contributionsData: UIContribution[][];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const data = useMemo<UIContribution[]>(() => {
    return mergePages(contributionsData);
  }, [contributionsData]);

  const table = useReactTable({
    data,
    columns: columnsDef,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugAll: false,
  });

  return (
    <Stack>
      <Box width="100%" maxWidth="100vw" overflowX="auto">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Heading
            as="h3"
            fontSize="lg"
            color="gray.800"
            fontWeight="normal"
            paddingBottom={4}
          >
            Recent Contributions
          </Heading>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <InfiniteScroll
              dataLength={table.getRowModel().rows.length}
              next={nextPage}
              scrollThreshold={0.8}
              hasMore={hasMoreItems}
              loader={<GovrnSpinner />}
            >
              <Table
                maxWidth="100vw"
                overflowX="auto"
                borderWidth="1px"
                borderColor="gray.100"
                borderRadius={{ base: 'none', md: 'md' }}
              >
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
        </Flex>
      </Box>
    </Stack>
  );
};

export default RecentContributionsTable;
