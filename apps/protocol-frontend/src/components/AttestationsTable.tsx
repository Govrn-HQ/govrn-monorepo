import { useCallback, useMemo } from 'react';
import {
  Box,
  chakra,
  Flex,
  Stack,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
  Column,
  Row,
  HeaderGroup,
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
import { useOverlay } from '../contexts/OverlayContext';
import { AttestationTableType } from '../types/table';
import ModalWrapper from './ModalWrapper';
import { BulkAttestationModal, AttestationModal } from './BulkAttestationModal';
import { useUser } from '../contexts/UserContext';
import { displayAddress } from '../utils/web3';

const AttestationsTable = ({
  contributionsData,
  hasMoreItems,
  nextPage,
}: {
  contributionsData: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const { userData } = useUser();
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();

  const data = useMemo<AttestationTableType[]>(
    () =>
      contributionsData.map(contribution => ({
        id: contribution.id,
        date_of_submission: contribution.date_of_submission,
        date_of_engagement: contribution.date_of_submission,
        guilds: contribution.guilds,
        status: contribution.status.name,
        action: '',
        name: contribution.name,
        onChainId: contribution.on_chain_id,
        contributor:
          contribution.user.name || displayAddress(contribution.user.address),
        attestations: contribution.attestations.filter(attestation => {
          return attestation.user.id === userData?.id;
        }),
      })),
    [contributionsData, userData?.id],
  );

  const columns = useMemo<Column<AttestationTableType>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: props => {
          return (
            <Flex direction="column" wrap="wrap">
              <Link to={`/contributions/${props.row.original.id}`}>
                <Text whiteSpace="normal">{props.value}</Text>
              </Link>
            </Flex>
          );
        },
      },
      {
        Header: 'Status',
        accessor: 'attestations',
        Cell: ({ value }) => {
          let status = 'Unattested';
          if (value && value.length > 0) {
            status = value[0].attestation_status?.name || 'Unattested';
          }
          return (
            <Text textTransform="capitalize">
              {status}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {status === 'pending' ? '🕒' : '👀'}
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
        Header: 'DAO',
        accessor: 'guilds',
        Cell: ({ value }) => {
          let guildName;
          if (value && value.length > 0) {
            guildName = value[0].guild.name ?? '---';
          }
          return <Text>{guildName}</Text>;
        },
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
    state: { globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
    selectedFlatRows,
    prepareRow,
    toggleAllRowsSelected,
  } = useTable(
    { columns, data, autoResetSelectedRows: false },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    tableHooks,
  );

  const toggleSelected = () => {
    toggleAllRowsSelected(false);
  };

  const attestationsModalHandler = useCallback(() => {
    if (selectedFlatRows.length > 1) {
      setModals({ bulkAttestationModal: true });
    } else {
      setModals({ attestationModal: true });
    }
  }, [selectedFlatRows, setModals]);

  let component = (
    <Box
      paddingX={{ base: '4', md: '6' }}
      paddingBottom={{ base: '4', md: '6' }}
    >
      <Text fontSize="sm" fontWeight="bolder">
        None found!
      </Text>
    </Box>
  );
  if (contributionsData.length) {
    component = (
      <>
        <Box paddingX={{ base: '4', md: '6' }} paddingTop="5" paddingBottom="3">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            alignItems="bottom"
          >
            <Stack direction="column" gap="2">
              <Text fontSize="lg" fontWeight="medium">
                DAO Contributions
              </Text>
              <Text fontSize="md" fontWeight="normal">
                These are minted contributions that you haven't already attested
                to.
              </Text>
            </Stack>
            <Button
              variant="primary"
              flexBasis="10%"
              disabled={selectedFlatRows?.length === 0}
              onClick={attestationsModalHandler}
              data-testId="attest-testId"
            >
              {selectedFlatRows.length > 1 ? 'Bulk ' : ''}Attest
            </Button>
          </Stack>
        </Box>

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
                  {headerGroups.map(
                    (headerGroup: HeaderGroup<AttestationTableType>) => (
                      <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(
                          (column: HeaderGroup<AttestationTableType>) => (
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
      </>
    );
  }

  return (
    <>
      {component}
      <ModalWrapper
        name="bulkAttestationModal"
        title="Attest to DAO Contributions"
        localOverlay={localOverlay}
        size="3xl"
        content={
          <BulkAttestationModal
            contributions={selectedFlatRows.map(r => r.original)}
            onFinish={toggleSelected}
          />
        }
      />
      {selectedFlatRows.length > 0 && (
        <ModalWrapper
          name="attestationModal"
          title="Attest to DAO Contributions"
          localOverlay={localOverlay}
          size="3xl"
          content={
            <AttestationModal
              contribution={selectedFlatRows[0].original}
              onFinish={toggleSelected}
            />
          }
        />
      )}
    </>
  );
};

export default AttestationsTable;
