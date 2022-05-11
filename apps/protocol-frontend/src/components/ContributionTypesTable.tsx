import { useMemo } from 'react';
import {
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useTable, useSortBy } from 'react-table';

const ContributionTypesTable = ({ contributionTypesData }: any) => {
  const uniqueContributions = new Set(
    contributionTypesData.map((contribution: any) => contribution)
  );

  // const data = useMemo(
  //   () =>
  //     [...uniqueContributions].map((contributionType: any) => ({
  //       name: contributionType.name,
  //       lastOccurrence: contributionType.lastOccurrence,
  //       guilds: contributionType.DAOs,
  //     })),
  //   [uniqueContributions]
  // );

  const data = useMemo(
    () =>
      contributionTypesData.map((contribution: any) => ({
        name: contribution.name,
        lastOccurrence: contribution.lastOccurrence,
        guild: contribution.guild,
      })),
    [contributionTypesData]
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
      { Header: 'DAOs', accessor: 'guild' },
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
