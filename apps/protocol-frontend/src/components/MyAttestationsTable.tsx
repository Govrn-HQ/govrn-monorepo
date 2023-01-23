import { useMemo, useState } from 'react';
import {
  Box,
  chakra,
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
} from '@tanstack/react-table';
import GlobalFilter from './GlobalFilter';
import { formatDate } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UIContribution } from '@govrn/ui-types';
import { GovrnSpinner } from '@govrn/protocol-ui';

type MyAttestationsTableType = {
  id: number;
  date_of_submission: Date | string;
  date_of_engagement: Date | string;
  status: string;
  name: string;
  attestationDate: Date | string;
  contributor?: string | null;
};

const columnsDef: ColumnDef<MyAttestationsTableType>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Status',
    accessorKey: 'status',
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
    accessorKey: 'attestationDate',
  },
  {
    header: 'Contributor',
    accessorKey: 'contributor',
  },
  // { header: 'DAO', accessorKey: 'guild' },
];

const MyAttestationsTable = ({
  contributionsData,
  hasMoreItems,
  nextPage,
}: {
  contributionsData: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const data = useMemo<MyAttestationsTableType[]>(
    () =>
      contributionsData.map(contribution => {
        console.log(contribution);
        return {
          id: contribution.id,
          date_of_submission: contribution.date_of_submission,
          date_of_engagement: contribution.date_of_engagement,
          status: contribution.status.name,
          name: contribution.name,
          attestationDate: formatDate(
            // contribution.attestations[0]?.date_of_attestation,
            '12/21/2021',
          ),
          contributor: contribution.user.name,
        };
      }),
    [contributionsData],
  );

  const table = useReactTable({
    data,
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
