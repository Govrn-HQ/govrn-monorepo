import { useMemo } from 'react';
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
  Column,
  HeaderGroup,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  UseTableHooks,
} from 'react-table';
import GlobalFilter from './GlobalFilter';
import { formatDate } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UIContribution } from '@govrn/ui-types';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { Link } from 'react-router-dom';

type MyAttestationsTableType = {
  id: number;
  date_of_submission: Date | string;
  date_of_engagement: Date | string;
  status: string;
  name: string;
  attestationDate: Date | string;
  contributor?: string | null;
};

const MyAttestationsTable = ({
  contributionsData,
  hasMoreItems,
  nextPage,
}: {
  contributionsData: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const data = useMemo<MyAttestationsTableType[]>(
    () =>
      contributionsData.map(contribution => ({
        id: contribution.id,
        date_of_submission: contribution.date_of_submission,
        date_of_engagement: contribution.date_of_engagement,
        status: contribution.status.name,
        name: contribution.name,
        attestationDate: formatDate(
          contribution.attestations[0]?.date_of_attestation,
        ),
        contributor: contribution.user.name,
      })),
    [contributionsData],
  );

  const columns = useMemo<Column<MyAttestationsTableType>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: props => {
          return (
            <Link to={`/contributions/${props.row.original.id}`}>
              <Text whiteSpace="normal">{props.value}</Text>
            </Link>
          );
        },
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
        Header: 'Attestation Date',
        accessor: 'attestationDate',
      },
      {
        Header: 'Contributor',
        accessor: 'contributor',
      },
      // { Header: 'DAO', accessor: 'guild' },
    ],
    [],
  );

  const tableHooks = (hooks: UseTableHooks<MyAttestationsTableType>) => {
    hooks.visibleColumns.push(columns => [...columns]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state: { globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    tableHooks,
  );

  return (
    <Stack>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
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
              {headerGroups.map(
                (headerGroup: HeaderGroup<MyAttestationsTableType>) => (
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(
                      (column: HeaderGroup<MyAttestationsTableType>) => (
                        <Th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps(),
                          )}
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
                      ),
                    )}
                  </Tr>
                ),
              )}
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
  );
};

export default MyAttestationsTable;
