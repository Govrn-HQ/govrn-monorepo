import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Flex, Stack, Button, Text, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  Getter,
  Row,
} from '@tanstack/react-table';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import { UIContribution } from '@govrn/ui-types';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useOverlay } from '../contexts/OverlayContext';
import ModalWrapper from './ModalWrapper';
import { BulkAttestationModal, AttestationModal } from './BulkAttestationModal';
import { useUser } from '../contexts/UserContext';
import { displayAddress } from '../utils/web3';
import { RowSelectionState } from '@tanstack/table-core';
import { statusEmojiSelect } from '../utils/statusEmojiSelect';
import { formatDate, toDate } from '../utils/date';
import GovrnTable from './GovrnTable';

const AttestationsTable = ({
  data,
  hasMoreItems,
  nextPage,
}: {
  data: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const { userData } = useUser();
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [selectedRows, setSelectedRows] = useState<UIContribution[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const deselectAll = () => {
    setRowSelection({});
  };

  const columnsDefs = useMemo<ColumnDef<UIContribution>[]>(() => {
    return [
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
        cell: ({
          getValue,
          row,
        }: {
          getValue: Getter<string>;
          row: Row<UIContribution>;
        }) => {
          return (
            <Flex direction="column" wrap="wrap" paddingRight={1}>
              <Link to={`/contributions/${row.original.id}`}>
                <Text
                  whiteSpace="normal"
                  flex="1 0 0"
                  maxW="300px"
                  bgGradient="linear-gradient(100deg, #1a202c 0%, #1a202c 100%)"
                  bgClip="text"
                  transition="all 100ms ease-in-out"
                  _hover={{
                    fontWeight: 'bolder',
                    bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                  }}
                >
                  {' '}
                  {getValue()}
                </Text>
              </Link>
            </Flex>
          );
        },
      },
      {
        header: 'Status',
        accessorFn: contribution =>
          contribution.attestations.filter(attestation => {
            return attestation.user.id === userData?.id;
          })[0]?.attestation_status?.name || 'Unattested',
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          const status = getValue();
          return (
            <Text textTransform="capitalize">
              {status}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {statusEmojiSelect(status)}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        header: 'Engagement Date',
        accessorFn: contribution => toDate(contribution.date_of_engagement),
        cell: ({ getValue }: { getValue: Getter<Date> }) => {
          return <Text>{formatDate(getValue())}</Text>;
        },
        sortingFn: 'datetime',
        invertSorting: true,
      },
      {
        header: 'Contributor',
        accessorKey: 'user',
        // accessorFn: contribution =>
        //   contribution.user.name || displayAddress(contribution.user.address),
        cell: ({ getValue }: { getValue: Getter<UIContribution['user']> }) => {
          const value = getValue();

          const hasMemberName = value.name || value.display_name;
          const displayMemberName =
            value.name || value.display_name || displayAddress(value.address);
          return hasMemberName ? (
            <Tooltip
              variant="primary"
              label={value.address}
              fontSize="sm"
              placement="right"
            >
              <Text whiteSpace="normal">{displayMemberName}</Text>
            </Tooltip>
          ) : (
            <Text whiteSpace="normal">{displayMemberName}</Text>
          );
        },
      },
      {
        header: 'DAO',
        accessorFn: contribution =>
          contribution.guilds[0]?.guild?.name ?? '---',
      },
    ];
  }, [userData?.id]);

  const table = useReactTable<UIContribution>({
    data: data,
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
  });
  console.log('table data', data);

  useEffect(() => {
    const selectedContributions: UIContribution[] = [];
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
  if (data.length) {
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
              <GovrnTable
                controller={table}
                maxWidth="100vw"
                overflowX="auto"
              />{' '}
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
