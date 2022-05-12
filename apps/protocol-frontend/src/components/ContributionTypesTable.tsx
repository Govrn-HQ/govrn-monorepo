import { useMemo } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, chakra } from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useTable, useSortBy } from 'react-table';

const ContributionTypesTable = ({ contributionTypesData }: any) => {
  const uniqueKey = 'name';

  const uniqueContributions = [
    ...new Map(
      contributionTypesData.map((contributionType: any) => [
        contributionType[uniqueKey],
        contributionType,
      ])
    ).values(),
  ];

  const data = useMemo(
    () =>
      uniqueContributions.map((contributionType: any) => ({
        name: contributionType.name,
        lastOccurrence: contributionType.lastOccurrence,
        guilds: contributionType.guild,
      })),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Last Occurrence',
        accessor: 'lastOccurrence',
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
