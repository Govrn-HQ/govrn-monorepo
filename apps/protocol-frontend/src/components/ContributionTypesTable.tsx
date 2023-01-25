import { useMemo, useState } from 'react';
import { isAfter } from 'date-fns';
import { Box, chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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
import { mergePages } from '../utils/arrays';

type ContributionTypesTableType = {
  id: number;
  name: string;
  total: number;
  lastOccurrence: Date | string;
  activityType: string;
  guilds: string;
  date_of_engagement: Date | string;
  date_of_submission: Date | string;
};

const columnsDefs: ColumnDef<ContributionTypesTableType>[] = [
  {
    header: 'Activity Type',
    accessorKey: 'activityType',
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
    accessorKey: 'total',
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
    accessorKey: 'date_of_engagement',
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'DAOs',
    accessorKey: 'guilds',
  },
];

const ContributionTypesTable = ({
  contributionTypesData,
}: {
  contributionTypesData: UIContribution[][];
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const uniqueContributions: UIContribution[] = useMemo(
    () => [
      ...new Map(
        mergePages(contributionTypesData)
          .sort((firstContribution, nextContribution) =>
            isAfter(
              new Date(firstContribution.date_of_engagement),
              new Date(nextContribution.date_of_engagement),
            )
              ? 1
              : -1,
          )
          .map(contributionType => [
            contributionType.activity_type['name'],
            contributionType,
          ]),
      ).values(),
    ],
    [contributionTypesData],
  );

  const data = useMemo<ContributionTypesTableType[]>(
    () =>
      uniqueContributions.map(contributionType => ({
        id: contributionType.id,
        name: contributionType.name,
        total: mergePages(contributionTypesData).filter(
          contribution =>
            contribution.activity_type.name ===
            contributionType.activity_type.name,
        ).length,
        lastOccurrence: contributionType.date_of_engagement,
        activityType: contributionType.activity_type.name,
        guilds: contributionType.guilds.map(g => g.guild.name).join(','),
        date_of_submission: contributionType.date_of_submission,
        date_of_engagement: contributionType.date_of_engagement,
      })),
    // eslint-disable-next-line -- It's already chained, removing `contributionTypesData`
    [uniqueContributions],
  );

  const table = useReactTable({
    data,
    columns: columnsDefs,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugAll: true,
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
            <Tr key={row.id}>
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
