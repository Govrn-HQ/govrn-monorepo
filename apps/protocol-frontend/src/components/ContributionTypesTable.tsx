import { useMemo } from 'react';
import { format } from 'date-fns';
import { Table, Tbody, Td, Th, Thead, Tr, chakra } from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useTable, useSortBy } from 'react-table';

const ContributionTypesTable = ({ contributionTypesData }: any) => {
  const uniqueKey = 'name';

  const uniqueContributions = [
    ...new Map(
      contributionTypesData.map((contributionType: any) => [
        contributionType.activity_type[uniqueKey],
        contributionType,
      ])
    ).values(),
  ];

  // const totalsByType = contributionTypesData.map();

  console.log('types data', contributionTypesData);
  console.log('unique contributions', uniqueContributions);

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
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Last Occurrence',
        accessor: 'engagementDate',
      },
      { Header: 'DAOs', accessor: 'guilds' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
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
