import { useEffect, useMemo, useState } from 'react';
import * as _ from 'lodash';
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
  Row,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  UseTableRowProps,
} from 'react-table';
import { useUser } from '../contexts/UserContext';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import { UIContribution } from '@govrn/ui-types';

const AttestationsTable = ({
  contributionsData,
  setSelectedContributions,
}: {
  contributionsData: UIContribution[];
  setSelectedContributions: (contrs: any[]) => void;
}) => {
  const { userData } = useUser();

  const nonUserContributions = _.filter(contributionsData, function (a) {
    return a.user.id !== userData.id;
  });

  const unattestedContributions = _.filter(nonUserContributions, function (a) {
    return a.attestations?.every((b) => b.user_id !== userData.id) ?? false;
  });

  const data = useMemo(
    () =>
      unattestedContributions.map((contribution) => ({
        id: contribution.id,
        date_of_submission: contribution.date_of_submission,
        date_of_engagement: contribution.date_of_submission,
        attestations: contribution.attestations || null,
        guilds: contribution.attestations || null,
        status: contribution.status.name,
        action: '',
        name: contribution.name,
        attestationDate: null,
        onChainId: contribution.on_chain_id,
        contributor: contribution.user.name,
      })),
    [contributionsData]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => {
          return (
            <Text textTransform="capitalize">
              {value}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {value === 'minted' ? '🌞' : '👀'}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        Header: 'Engagement Date',
        accessor: 'engagementDate',
      },
      {
        Header: 'Contributor',
        accessor: 'contributor',
      },
    ],
    []
  );

  const tableHooks = (hooks: { visibleColumns }) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }) => (
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        ),
      },
      ...columns,
    ]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state: { globalFilter, selectedRowIds },
    preGlobalFilteredRows,
    setGlobalFilter,
    selectedFlatRows,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    tableHooks
  );

  useEffect(() => {
    setSelectedContributions(selectedFlatRows.map((r) => r.original));
  }, [selectedFlatRows, selectedRowIds]);

  return (
    <Stack>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Box width="100%" maxWidth="100vw" overflowX="auto">
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
      </Box>
    </Stack>
  );
};

export default AttestationsTable;
