import { useMemo } from 'react';
import { isAfter } from 'date-fns';
import { Box, chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useSortBy, useTable, Column } from 'react-table';
import { UIContribution } from '@govrn/ui-types';

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

const ContributionTypesTable = ({
  contributionTypesData,
}: {
  contributionTypesData: UIContribution[];
}) => {
  const uniqueKey = 'name';

  // FIXME: This will be re-calculated for each render.
  const uniqueContributions: UIContribution[] = [
    ...new Map(
      contributionTypesData
        .sort((firstContribution, nextContribution) =>
          isAfter(
            new Date(firstContribution.date_of_engagement),
            new Date(nextContribution.date_of_engagement),
          )
            ? 1
            : -1,
        )
        .map(contributionType => [
          contributionType.activity_type[uniqueKey],
          contributionType,
        ]),
    ).values(),
  ];

  const data = useMemo<ContributionTypesTableType[]>(
    () =>
      uniqueContributions.map(contributionType => ({
        id: contributionType.id,
        name: contributionType.name,
        total: contributionTypesData.filter(
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
    [],
  );

  const columns = useMemo<Column<ContributionTypesTableType>[]>(
    () => [
      {
        Header: 'Activity Type',
        accessor: 'activityType',
        Cell: ({ value }: { value: string }) => {
          return (
            <Box
              bgColor="blue.50"
              width="fit-content"
              padding={2}
              borderRadius="md"
            >
              {value}
            </Box>
          );
        },
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: ({ value }: { value: number }) => {
          return (
            <Box
              bgColor="blue.50"
              width="fit-content"
              padding={2}
              borderRadius="md"
            >
              {value}
            </Box>
          );
        },
      },
      {
        Header: 'Last Occurrence',
        accessor: 'date_of_engagement',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },

      { Header: 'DAOs', accessor: 'guilds' },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()} maxWidth="100vw" overflowX="auto">
      <Thead backgroundColor="gray.50">
        {headerGroups.map((headerGroup: any) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
                borderColor="gray.100"
              >
                {column.render('Header')}
                <chakra.span paddingLeft="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <IoArrowDown aria-label="sorted-descending" />
                    ) : (
                      <IoArrowUp aria-label="sorted-ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()} borderColor="gray.100">
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ContributionTypesTable;
