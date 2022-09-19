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
import { useUser } from '../contexts/UserContext';
import GlobalFilter from './GlobalFilter';
import { UIContribution } from '@govrn/ui-types';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useContributions } from '../contexts/ContributionContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import TableEndMessage from './TableEndMessage';

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

const contributionToTableTypeMapper = (
  contributions: UIContribution[],
): AttestationTableType[] =>
  contributions.map(c => ({
    id: c.id,
    date_of_submission: c.date_of_submission,
    date_of_engagement: c.date_of_submission,
    attestations: c.attestations,
    guilds: c.guilds.map((guildObj: any) => guildObj.guild.name)[0] ?? '---',
    status: c.status.name,
    action: '',
    name: c.name,
    onChainId: c.on_chain_id,
    contributor: c.user.name,
  }));

const AttestationsTable = ({
  contributionsData,
  setSelectedContributions,
}: {
  contributionsData: UIContribution[];
  setSelectedContributions: (contrs: any[]) => void;
}) => {
  const { userData } = useUser();
  const { daoContributionPagination } = useContributions();
  const [showAllDaos, setShowAllDaos] = useState(false);

  const userDaoIds = userData?.guild_users.map(guild => {
    return guild.guild_id;
  });

  const mintedContributions = _.filter(contributionsData, function (a) {
    return a.status.name === 'minted';
  });

  const nonUserContributions = _.filter(mintedContributions, function (a) {
    return a.user.id !== userData?.id;
  });

  const userDaoContributions = _.filter(nonUserContributions, function (a) {
    return a.guilds.some(guild => userDaoIds?.includes(guild.guild_id));
  });

  const unattestedUserDaoContributions = _.filter(
    userDaoContributions,
    function (a) {
      return a.attestations?.every(b => b.user_id !== userData?.id) ?? false;
    },
  );

  const unattestedContributions = _.filter(nonUserContributions, function (a) {
    return a.attestations?.every(b => b.user_id !== userData?.id) ?? false;
  });

  const [displayedContributions, setDisplayedContributions] =
    useState(userDaoContributions);

  const toggleShowAllDaos = () => {
    setShowAllDaos(!showAllDaos);
  };

  useEffect(() => {
    if (!showAllDaos) {
      setDisplayedContributions(unattestedUserDaoContributions);
    } else {
      setDisplayedContributions(unattestedContributions);
    }
  }, [showAllDaos]);

  function AllDaosSwitch({
    isChecked,
    onChange,
  }: {
    isChecked: boolean;
    onChange: () => void;
  }) {
    return (
      <Flex
        marginX={1}
        alignItems="center"
        justifyContent="center"
        alignSelf="flex-start"
      >
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.800"
          margin={2}
          htmlFor="show-all-daos"
        >
          Show All DAOs
        </FormLabel>
        <Switch
          id="show-all-daos"
          size="sm"
          colorScheme={'brand.primary'}
          isChecked={isChecked}
          onChange={onChange}
        />
      </Flex>
    );
  }

  const data = useMemo<AttestationTableType[]>(
    () => contributionToTableTypeMapper(displayedContributions),
    [displayedContributions],
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
      {displayedContributions.length > 0 ? (
        <Stack>
          <Flex alignItems="center">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            <AllDaosSwitch
              isChecked={showAllDaos}
              onChange={() => toggleShowAllDaos()}
            />
          </Flex>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <InfiniteScroll
              dataLength={rows.length}
              next={() => {
                daoContributionPagination.next();
              }}
              scrollThreshold={0.8}
              hasMore={daoContributionPagination.hasMore}
              loader={
                <tr>
                  <td colSpan={7}>
                    <GovrnSpinner />
                  </td>
                </tr>
              }
              endMessage={<TableEndMessage />}
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
