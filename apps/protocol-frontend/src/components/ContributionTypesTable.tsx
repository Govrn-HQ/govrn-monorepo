import { useMemo } from 'react';
import { isAfter } from 'date-fns';
import { Box, chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useSortBy, useTable } from 'react-table';
import { ContributionItem } from '@govrn/protocol-client';

const ContributionTypesTable = ({
  contributionTypesData,
}: {
  contributionTypesData: ContributionItem[];
}) => {
  const uniqueKey = 'name';

  console.dir(contributionTypesData);

  // FIXME: This will be re-calculated for each render.
  const uniqueContributions: ContributionItem[] = [
    ...new Map(
      contributionTypesData
        .sort((firstContribution, nextContribution) =>
          isAfter(
            new Date(firstContribution.date_of_engagement),
            new Date(nextContribution.date_of_engagement)
          )
            ? 1
            : -1
        )
        .map((contributionType) => [
          contributionType.activity_type[uniqueKey],
          contributionType,
        ])
    ).values(),
  ];

  // FIXME: divide these into different states.
  const data = useMemo(
    () =>
      uniqueContributions.map((contributionType) => ({
        id: contributionType.id,
        name: contributionType.name,
        total: contributionTypesData.filter(
          (contribution) =>
            contribution.activity_type.name ===
            contributionType.activity_type.name
        ).length,
        lastOccurrence: contributionType.date_of_engagement,
        activityType: contributionType.activity_type.name,
        guilds: contributionType.guilds.map((g) => g.guild.name).join(','),
        date_of_submission: contributionType.date_of_submission,
        date_of_engagement: contributionType.date_of_engagement,
      })),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Activity Type',
        accessor: 'activityType',
        Cell: ({ value }) => {
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
        Cell: ({ value }) => {
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
        accessor: 'engagementDate',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },

      { Header: 'DAOs', accessor: 'guilds' },
    ],
    []
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
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
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
