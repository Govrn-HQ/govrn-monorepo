import { useCallback, useEffect, useMemo, useState } from 'react';
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
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
} from '@tanstack/react-table';
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
import { RowSelectionState } from '@tanstack/table-core';

const columnsDefs: ColumnDef<AttestationTableType>[] = [
  {
    id: 'selection',
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
          testid: 'toggle-row-selected',
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },

  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ getValue }: { getValue: Getter<string> }) => {
      return (
        <Flex direction="column" wrap="wrap">
          <Text whiteSpace="normal">{getValue()}</Text>
        </Flex>
      );
    },
  },
  {
    header: 'Status',
    accessorKey: 'attestations',
    cell: ({
      getValue,
    }: {
      getValue: Getter<AttestationTableType['attestations']>;
    }) => {
      let status = 'Unattested';
      const attestations = getValue();
      if (attestations && attestations.length > 0) {
        status = attestations[0].attestation_status?.name || 'Unattested';
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
    header: 'Engagement Date',
    accessorKey: 'date_of_engagement',
  },
  {
    header: 'Contributor',
    accessorKey: 'contributor',
  },
  {
    header: 'DAO',
    accessorKey: 'guilds',
    cell: ({
      getValue,
    }: {
      getValue: Getter<AttestationTableType['guilds']>;
    }) => {
      let guildName;
      const guilds = getValue();
      if (guilds && guilds.length > 0) {
        guildName = guilds[0].guild.name ?? '---';
      }
      return <Text>{guildName}</Text>;
    },
  },
];

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

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [selectedRows, setSelectedRows] = useState<AttestationTableType[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const deselectAll = () => {
    setRowSelection({});
  };

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

  const table = useReactTable({
    data,
    columns: columnsDefs,
    state: {
      sorting,
      rowSelection: rowSelection,
      globalFilter,
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugAll: true,
  });

  useEffect(() => {
    const selectedContributions: AttestationTableType[] = [];
    for (const key in rowSelection) {
      if (rowSelection[key]) {
        selectedContributions.push(table.getRow(key).original);
      }
    }
    setSelectedRows(selectedContributions);
  }, [rowSelection, table]);

  const attestationsModalHandler = useCallback(() => {
    if (selectedRows.length > 1) {
      setModals({ bulkAttestationModal: true });
    } else {
      setModals({ attestationModal: true });
    }
  }, [selectedRows, setModals]);

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
              disabled={selectedRows?.length === 0}
              onClick={attestationsModalHandler}
              data-testId="attest-testId"
            >
              {selectedRows.length > 1 ? 'Bulk ' : ''}Attest
            </Button>
          </Stack>
        </Box>

        <Stack>
          <Flex alignItems="center">
            <GlobalFilter
              preGlobalFilteredRows={table.getPreFilteredRowModel().rows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </Flex>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <InfiniteScroll
              dataLength={table.getRowModel().rows.length}
              next={nextPage}
              scrollThreshold={0.8}
              hasMore={hasMoreItems}
              loader={<GovrnSpinner />}
            >
              <Table maxWidth="100vw" overflowX="auto">
                <Thead backgroundColor="gray.50">
                  {table.getHeaderGroups().map(headerGroup => (
                    <Tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <Th borderColor="gray.100">
                          {header.isPlaceholder ? null : (
                            <Box
                              {...{
                                onClick:
                                  header.column.getToggleSortingHandler(),
                                cursor: 'pointer',
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}

                              <chakra.span paddingLeft="4">
                                {{
                                  asc: (
                                    <IoArrowUp aria-label="sorted-ascending" />
                                  ),
                                  desc: (
                                    <IoArrowDown aria-label="sorted-descending" />
                                  ),
                                }[header.column.getIsSorted() as string] ??
                                  null}
                              </chakra.span>
                            </Box>
                          )}
                        </Th>
                      ))}
                      <Th borderColor="gray.100" />
                    </Tr>
                  ))}
                </Thead>
                <Tbody>
                  {table.getRowModel().rows.map(row => {
                    return (
                      <Tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                          return (
                            <Td borderColor="gray.100" key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </Td>
                          );
                        })}
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
            contributions={selectedRows}
            onFinish={deselectAll}
          />
        }
      />
      {selectedRows.length > 0 && (
        <ModalWrapper
          name="attestationModal"
          title="Attest to DAO Contributions"
          localOverlay={localOverlay}
          size="3xl"
          content={
            <AttestationModal
              contribution={selectedRows[0]}
              onFinish={deselectAll}
            />
          }
        />
      )}
    </>
  );
};

export default AttestationsTable;
