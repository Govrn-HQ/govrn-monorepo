import { useEffect, useMemo, useState, ReactNode } from 'react';
import * as _ from 'lodash';
import {
  Box,
  chakra,
  Flex,
  FormLabel,
  Stack,
  Switch,
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
  Column,
  Row,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  UseTableHooks,
} from 'react-table';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import { UIContribution } from '@govrn/ui-types';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';

type AttestationTableType = {
  id: number;
  status: string;
  contributor?: string | null;
  date_of_submission: string | Date;
  date_of_engagement: string | Date;
  attestations?: {
    id: number;
  }[];
  guilds?: {
    guild: {
      name?: string | null;
      guild_id?: number;
    };
  }[];
  action?: ReactNode;
  name: string;
  onChainId?: number | null;
};

const AttestationsTable = ({
  contributionsData,
  setSelectedContributions,
  hasMoreItems,
  nextPage,
}: {
  contributionsData: UIContribution[];
  setSelectedContributions: (contrs: any[]) => void;
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const data = useMemo<AttestationTableType[]>(
    () =>
      contributionsData.map(contribution => ({
        id: contribution.id,
        date_of_submission: contribution.date_of_submission,
        date_of_engagement: contribution.date_of_submission,
        attestations: contribution.attestations,
        guilds:
          contribution.guilds.map((guildObj: any) => guildObj.guild.name)[0] ??
          '---',
        status: contribution.status.name,
        action: '',
        name: contribution.name,
        onChainId: contribution.on_chain_id,
        contributor: contribution.user.name,
      })),
    [contributionsData],
  );

  const columns = useMemo<Column<AttestationTableType>[]>(
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
        accessor: 'date_of_engagement',
      },
      {
        Header: 'Contributor',
        accessor: 'contributor',
      },
      {
        Header: 'DAOs',
        accessor: 'guilds',
      },
    ],
    [],
  );

  const tableHooks = (hooks: UseTableHooks<AttestationTableType>) => {
    hooks.visibleColumns.push(columns => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }: { row: Row<AttestationTableType> }) => (
          <IndeterminateCheckbox
            {...row.getToggleRowSelectedProps()}
            disabled={row.original.status !== 'minted'}
          />
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
    tableHooks,
  );

  useEffect(() => {
    setSelectedContributions(selectedFlatRows.map(r => r.original));
  }, [selectedFlatRows, selectedRowIds]);

  return (
    <>
      {contributionsData.length > 0 ? (
        <Stack>
          <Flex alignItems="center">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </Flex>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <InfiniteScroll
              dataLength={rows.length}
              next={nextPage}
              scrollThreshold={0.8}
              hasMore={hasMoreItems}
              loader={<GovrnSpinner />}
            >
              <Table {...getTableProps()} maxWidth="100vw" overflowX="auto">
                <Thead backgroundColor="gray.50">
                  {headerGroups.map((headerGroup: any) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: any) => (
                        <Th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps(),
                          )}
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
            </InfiniteScroll>
          </Box>
        </Stack>
      ) : (
        <Box
          paddingX={{ base: '4', md: '6' }}
          paddingBottom={{ base: '4', md: '6' }}
        >
          <Text fontSize="sm" fontWeight="bolder">
            None found!
          </Text>
        </Box>
      )}
    </>
  );
};

export default AttestationsTable;
