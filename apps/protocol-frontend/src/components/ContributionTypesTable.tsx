import { useMemo, useState } from 'react';
import { isAfter } from 'date-fns';
import {
  Box,
  chakra,
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
import { UIContribution } from '@govrn/ui-types';
import { formatDate, toDate } from '../utils/date';

const ContributionTypesTable = ({
  contributionTypesData,
}: {
  contributionTypesData: UIContribution[];
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const sortedContributions: UIContribution[] = useMemo(() => {
    return contributionTypesData.sort((firstContribution, nextContribution) =>
      isAfter(
        new Date(firstContribution.date_of_engagement),
        new Date(nextContribution.date_of_engagement),
      )
        ? 1
        : -1,
    );
  }, [contributionTypesData]);

  const uniqueContributions: UIContribution[] = useMemo(
    () => [
      ...new Map(
        sortedContributions.map(contributionType => [
          contributionType.activity_type['name'],
          contributionType,
        ]),
      ).values(),
    ],
    [sortedContributions],
  );

  const columnsDefs = useMemo<ColumnDef<UIContribution>[]>(
    () => [
      {
        header: 'Activity Type',
        accessorFn: contribution => contribution.activity_type.name,
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          return (
            <Box
              bgColor="blue.50"
              width="fit-content"
              padding={2}
              borderRadius="md"
            >
              {getValue()}
            </Box>
          );
        },
      },
      {
        header: 'Total',
        accessorFn: contribution =>
          sortedContributions.filter(
            c => c.activity_type.name === contribution.activity_type.name,
          ).length,
        cell: ({ getValue }: { getValue: Getter<number> }) => {
          return (
            <Box
              bgColor="blue.50"
              width="fit-content"
              padding={2}
              borderRadius="md"
            >
              {getValue()}
            </Box>
          );
        },
      },
      {
        header: 'Last Occurrence',
        accessorFn: contribution => toDate(contribution.date_of_engagement),
        cell: ({ getValue }: { getValue: Getter<Date> }) => {
          return <Text>{formatDate(getValue())}</Text>;
        },
        sortingFn: 'datetime',
        invertSorting: true,
      },
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'DAOs',
        accessorFn: contribution =>
          contribution.guilds.map(g => g.guild.name).join(','),
      },
    ],
    [sortedContributions],
  );

  const table = useReactTable({
    data: uniqueContributions,
    columns: columnsDefs,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <Table maxWidth="100vw" overflowX="auto">
      <Thead backgroundColor="gray.50">
        {table.getHeaderGroups().map(headerGroup => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Th borderColor="gray.100">
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
                        desc: <IoArrowDown aria-label="sorted-descending" />,
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
            <Tr key={row.original.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <Td borderColor="gray.100" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ContributionTypesTable;
