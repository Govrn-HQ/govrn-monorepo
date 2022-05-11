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
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useTable, useSortBy } from 'react-table';

const AttestationsTable = ({ attestationsData }: any) => {
  const data = useMemo(
    () =>
      attestationsData.map((attestation: any) => ({
        name: attestation.name,
        attestationDate: attestation.attestationDate,
        contributor: attestation.contributor,
        guild: attestation.guild,
      })),
    [attestationsData]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Date',
        accessor: 'attestationDate',
      },
      {
        Header: 'Contributor',
        accessor: 'contributor',
      },
      { Header: 'DAO', accessor: 'guild' },
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

export default AttestationsTable;
