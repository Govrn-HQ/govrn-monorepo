import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Flex, Link, Stack, Button, Text } from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';
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
import { GovrnCta, GovrnSpinner, Pill } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useOverlay } from '../contexts/OverlayContext';
import {
  VerifiedCelebrationModal,
  BulkVerifiedCelebrationModal,
} from './VerifiedCelebrationModal';
import ModalWrapper from './ModalWrapper';
import { BulkAttestationModal, AttestationModal } from './BulkAttestationModal';
import { useUser } from '../contexts/UserContext';
import { RowSelectionState } from '@tanstack/table-core';
import { formatDate, toDate } from '../utils/date';
import GovrnTable from './GovrnTable';
import MemberDisplayName from './MemberDisplayName';
import VerificationHover from './VerificationHover';
import AttestationFilter from './AttestationFilter';

const AttestationsTable = ({
  data,
  hasMoreItems,
  nextPage,
  attestationFilter,
}: {
  data: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
  attestationFilter: (filterValue: string) => void;
}) => {
  const { userData } = useUser();
  const { setModals } = useOverlay();
  const localOverlay = useOverlay();
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [selectedRows, setSelectedRows] = useState<UIContribution[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [verifiedContribution, setVerifiedContribution] =
    useState<UIContribution | null>(null);
  const [verifiedContributions, setVerifiedContributions] = useState<
    UIContribution[]
  >([]);

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
              <RouterLink to={`/contributions/${row.original.id}`}>
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
              </RouterLink>
            </Flex>
          );
        },
      },
      {
        header: 'Verification',
        accessorFn: contribution =>
          contribution.guilds[0]?.verificationStatus?.name === 'Verified'
            ? 'Verified'
            : 'Unverified',
        cell: ({
          getValue,
          row,
        }: {
          getValue: Getter<string>;
          row: Row<UIContribution>;
        }) => {
          const status = getValue();

          const guildHasVerificationFramework =
            row.original.guilds[0].guild?.verification_setting_id !== null;
          const attestationThreshold =
            row.original.guilds[0].attestation_threshold;
          const frameworkSettingThreshold =
            row.original.guilds[0].guild.verification_setting
              ?.num_of_attestations;
          let pillUnverifiedLabel!: string;
          if (attestationThreshold && frameworkSettingThreshold) {
            pillUnverifiedLabel = `${
              frameworkSettingThreshold - attestationThreshold
            }/${frameworkSettingThreshold}`;
          }
          const daoName = row.original.guilds[0].guild?.name;

          let statusMapHover!: 'Verified' | 'Unverified' | 'noFramework';
          if (status === null) {
            statusMapHover = 'noFramework';
          }

          if (status === 'Verified' || frameworkSettingThreshold === 0) {
            statusMapHover = 'Verified';
          }
          if (status === 'Unverified') {
            statusMapHover = 'Unverified';
          }

          let pillStatusMap!: 'checkmark' | 'secondaryInfo' | 'primaryInfo';
          if (status === 'Verified' || frameworkSettingThreshold === 0) {
            pillStatusMap = 'checkmark';
          }
          if (status === 'Unverified' && attestationThreshold === 1) {
            pillStatusMap = 'secondaryInfo';
          }
          if (
            status === 'Unverified' &&
            !!attestationThreshold &&
            attestationThreshold > 1
          ) {
            pillStatusMap = 'primaryInfo';
          }
          if (status === 'Unverified' && attestationThreshold === null) {
            pillStatusMap = 'primaryInfo';
          }

          return guildHasVerificationFramework ? (
            <VerificationHover
              daoName={daoName}
              status={statusMapHover}
              currentThreshold={attestationThreshold}
            >
              <Pill
                status={
                  status === 'Verified' || frameworkSettingThreshold === 0
                    ? 'gradient'
                    : 'tertiary'
                }
                icon={pillStatusMap}
                label={
                  status === 'Verified' || frameworkSettingThreshold === 0
                    ? 'Verified'
                    : pillUnverifiedLabel
                }
              />
            </VerificationHover>
          ) : (
            <VerificationHover
              daoName={daoName}
              currentThreshold={null}
              status="noFramework"
            >
              <Pill
                status={status === 'Verified' ? 'gradient' : 'tertiary'}
                label="Unset"
              />
            </VerificationHover>
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

        cell: ({ getValue }: { getValue: Getter<UIContribution['user']> }) => {
          const value = getValue();
          return <MemberDisplayName memberValue={value} />;
        },
      },
      {
        header: 'DAO',
        accessorFn: contribution =>
          contribution.guilds[0]?.guild?.name ?? '---',
        cell: ({
          getValue,
          row,
        }: {
          getValue: Getter<string>;
          row: Row<UIContribution>;
        }) => {
          const daoName = getValue();
          const contributionVerifiedForDao =
            (row.original.guilds[0].guild?.verification_setting_id !== null &&
              row.original.guilds[0]?.verificationStatus?.name ===
                'Verified') ||
            row.original.guilds[0].guild.verification_setting
              ?.num_of_attestations === 0;
          return (
            <Flex direction="column" wrap="wrap" paddingRight={1}>
              <Pill
                label={daoName}
                icon={contributionVerifiedForDao === true ? 'checkmark' : null}
                status={contributionVerifiedForDao ? 'primary' : 'tertiary'}
              />
            </Flex>
          );
        },
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

  const CopyChildren = () => (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Text>
        You'll need other collaborators to be part of a DAO! There are no
        contributions for you to attest to yet.
      </Text>
      <Text>
        Make sure you're part of a DAO and attest to other people's minted
        contributions.
      </Text>
    </Flex>
  );

  const ButtonChildren = () => (
    <>
      <Link
        as={RouterLink}
        to="/profile"
        state={{ targetId: 'myDaos' }}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          variant="primary"
          size="md"
          width={{ base: '100%', lg: 'auto' }}
        >
          Join a DAO From Your Profile
        </Button>
      </Link>
      <Link
        as={RouterLink}
        to="/contributions"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          variant="secondary"
          size="md"
          width={{ base: '100%', lg: 'auto' }}
        >
          Mint Your Contributions
        </Button>
      </Link>
      <Link
        href="https://govrn.gitbook.io/govrn-docs/attestations/attestations"
        isExternal
        textDecoration="none"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          variant="tertiary"
          size="md"
          leftIcon={<HiOutlineExternalLink />}
        >
          Learn More About Attestations
        </Button>
      </Link>
    </>
  );

  let component = (
    <GovrnCta
      heading={`You aren't in any DAOs yet`}
      emoji="🙏"
      copy={<CopyChildren />}
      children={<ButtonChildren />}
    />
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
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <GlobalFilter
              preGlobalFilteredRows={table.getPreFilteredRowModel().rows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            <AttestationFilter attestationFilter={attestationFilter} />
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
            setVerifiedContributions={setVerifiedContributions}
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
              setVerifiedContribution={setVerifiedContribution}
              onFinish={deselectAll}
            />
          }
        />
      )}
      {verifiedContribution !== null && (
        <ModalWrapper
          name="verifiedCelebrationModal"
          title=""
          localOverlay={localOverlay}
          size="3xl"
          bgColor="brand.gradientBackgroundModal"
          closeButtonColor="white"
          content={
            <VerifiedCelebrationModal
              verifiedContribution={verifiedContribution}
            />
          }
        />
      )}
      <ModalWrapper
        name="bulkVerifiedCelebrationModal"
        title=""
        localOverlay={localOverlay}
        size="3xl"
        bgColor="brand.gradientBackgroundModal"
        closeButtonColor="white"
        content={
          <BulkVerifiedCelebrationModal
            verifiedContributions={
              verifiedContributions.length !== 0
                ? verifiedContributions
                : selectedRows
            }
          />
        }
      />
    </>
  );
};

export default AttestationsTable;
