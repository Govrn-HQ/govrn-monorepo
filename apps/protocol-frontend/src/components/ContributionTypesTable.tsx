import { useMemo } from 'react';
import { format } from 'date-fns';
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useTable, useSortBy } from 'react-table';
import { isAfter } from 'date-fns';

const ContributionTypesTable = ({ contributionTypesData }: any) => {
  const uniqueKey = 'name';

  const uniqueContributions = [
    ...new Map(
      contributionTypesData
        .sort((firstContribution: any, nextContribution: any) =>
          isAfter(
            new Date(firstContribution.engagementDate),
            new Date(nextContribution.engagementDate)
          )
            ? 1
            : -1
        )
        .map((contributionType: any) => [
          contributionType.activity_type[uniqueKey],
          contributionType,
        ])
    ).values(),
  ];

  const data = useMemo(
    () =>
      uniqueContributions.map((contributionType: any) => ({
        id: contributionType.id,
        name: contributionType.name,
        total: contributionTypesData.filter(
          (contribution: any) =>
            contribution.activity_type.name ===
            contributionType.activity_type.name
        ).length,
        lastOccurrence: contributionType.engagementDate,
        activityType: contributionType.activity_type.name,
        guilds: contributionType.guild,
        submissionDate: format(
          new Date(contributionType.date_of_submission),
          'P'
        ),
        engagementDate: format(
          new Date(contributionType.date_of_engagement),
          'P'
        ),
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
