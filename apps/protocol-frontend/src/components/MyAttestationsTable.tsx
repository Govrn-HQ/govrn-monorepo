import { useMemo, useState } from 'react';
import {
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
  getFilteredRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
  Row,
} from '@tanstack/react-table';
import GlobalFilter from './GlobalFilter';
import { formatDate } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UIContribution } from '@govrn/ui-types';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const MyAttestationsTable = ({
  data,
  hasMoreItems,
  nextPage,
}: {
  data: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const { userData } = useUser();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnsDef = useMemo<ColumnDef<UIContribution>[]>(() => {
    return [
      {
        header: 'Name',
        accessorKey: 'name',
        cell: ({
          row,
          getValue,
        }: {
          row: Row<UIContribution>;
          getValue: Getter<string>;
        }) => {
          return (
            <Flex direction="column" wrap="wrap">
              <Link to={`/contributions/${row.original.id}`}>
                <Text whiteSpace="normal">{getValue()}</Text>
              </Link>
            </Flex>
          );
        },
      },
      {
        header: 'Status',
        accessorFn: contr => contr.status.name,
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          return (
            <Text textTransform="capitalize">
              {getValue()}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {getValue() === 'minted' ? '🌞' : '👀'}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        header: 'Attestation Date',
        accessorFn: contribution =>
          formatDate(
            contribution.attestations.find(a => a.user_id === userData?.id)
              ?.date_of_attestation ?? '---',
          ),
      },
      {
        header: 'Contributor',
        accessorFn: contribution => contribution.user.name,
      },
    ];
  }, [userData?.id]);

  const table = useReactTable({
    data: data,
    columns: columnsDef,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugAll: false,
  });

  return (
    <Stack>
      <GlobalFilter
        preGlobalFilteredRows={table.getPreFilteredRowModel().rows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Box width="100%" maxWidth="100vw" overflowX="auto">
        <InfiniteScroll
          dataLength={table.getRowModel().rows.length}
          next={nextPage}
          scrollThreshold={0.8}
          hasMore={hasMoreItems}
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
                              asc: <IoArrowUp aria-label="sorted-ascending" />,
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
        </InfiniteScroll>
      </Box>
    </Stack>
  );
};

export default MyAttestationsTable;
