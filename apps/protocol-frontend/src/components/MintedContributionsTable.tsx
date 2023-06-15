import { useCallback, useMemo, useState } from 'react';
import { Box, Flex, HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
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
import { Link } from 'react-router-dom';
import GlobalFilter from './GlobalFilter';
import { UIContribution } from '@govrn/ui-types';
import DeleteContributionDialog from './DeleteContributionDialog';
import { GovrnCta, GovrnSpinner, Pill } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { formatDate, toDate } from '../utils/date';
import { FiTrash2 } from 'react-icons/fi';
import GovrnTable from './GovrnTable';
import VerificationHover from './VerificationHover';

export type DialogProps = {
  isOpen: boolean;
  title: string;
  onConfirm: boolean;
  contributionId: number;
};

const MintedContributionsTable = ({
  data,
  hasMoreItems,
  nextPage,
}: {
  data: UIContribution[];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const { userData } = useUser();

  const [dialog, setDialog] = useState<DialogProps>({
    isOpen: false,
    title: '',
    onConfirm: false,
    contributionId: 0,
  });

  const handleDeleteContribution = useCallback(
    (contributionId: number) => {
      setDialog({
        ...dialog,
        isOpen: true, //this opens AlertDialog
        title:
          "Are you sure you want to delete this contribution? You can't undo this action.",
        contributionId: contributionId,
      });
    },
    [dialog],
  );
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnsDefs = useMemo<ColumnDef<UIContribution>[]>(() => {
    return [
      {
        header: 'Name',
        accessorKey: 'name',
        cell: ({
          row,
          getValue,
        }: {
          row: Row<UIContribution>;
          getValue: Getter<string>;
        }) => {
          return (
            <Flex direction="column" wrap="wrap" paddingRight={1}>
              <Link to={`/contributions/${row.original.id}`}>
                <Text
                  whiteSpace="normal"
                  bgGradient="linear-gradient(100deg, #1a202c 0%, #1a202c 100%)"
                  bgClip="text"
                  maxW="300px"
                  flex="1 0 0"
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
          const currentAttestations = row.original.attestations?.length;
          const attestationThreshold =
            row.original.guilds[0].attestation_threshold;
          const frameworkSettingThreshold =
            row.original.guilds[0].guild.verification_setting
              ?.num_of_attestations;
          let pillUnverifiedLabel!: string;
          if (attestationThreshold && frameworkSettingThreshold) {
            pillUnverifiedLabel = `${currentAttestations}/${frameworkSettingThreshold}`;
          }

          if (status === 'Unverified' && attestationThreshold === null) {
            pillUnverifiedLabel = 'Initializing';
          }

          const daoName = row.original.guilds[0].guild?.name;

          let statusMapHover!: 'Verified' | 'Unverified' | 'No Framework';
          if (status === null) {
            statusMapHover = 'No Framework';
          }

          if (status === 'Verified' || frameworkSettingThreshold === 0) {
            statusMapHover = 'Verified';
          }

          if (
            attestationThreshold === null &&
            frameworkSettingThreshold === 0
          ) {
            statusMapHover = 'Verified';
          }

          if (status === 'Unverified') {
            statusMapHover = 'Unverified';
          }

          let pillStatusMap!: 'checkmark' | 'secondaryInfo' | 'primaryInfo';

          if (status === 'Verified' || frameworkSettingThreshold === 0) {
            pillStatusMap = 'checkmark';
          }

          if (
            attestationThreshold === null &&
            frameworkSettingThreshold === 0
          ) {
            pillStatusMap = 'checkmark';
          }

          if (status === 'Unverified' && attestationThreshold === 1) {
            pillStatusMap = 'secondaryInfo';
          }

          if (
            status === 'Unverified' &&
            attestationThreshold === null &&
            frameworkSettingThreshold !== 0
          ) {
            pillStatusMap = 'primaryInfo';
          }

          if (
            status === 'Unverified' &&
            !!attestationThreshold &&
            attestationThreshold > 1
          ) {
            pillStatusMap = 'primaryInfo';
          }

          return guildHasVerificationFramework ? (
            <VerificationHover
              daoName={daoName}
              status={statusMapHover}
              currentThreshold={attestationThreshold}
              frameworkThreshold={frameworkSettingThreshold}
            >
              <Pill
                status={
                  status === 'Verified' ||
                  frameworkSettingThreshold === 0 ||
                  (attestationThreshold === null &&
                    frameworkSettingThreshold === 0)
                    ? 'gradient'
                    : 'tertiary'
                }
                icon={pillStatusMap}
                label={
                  status === 'Verified' ||
                  frameworkSettingThreshold === 0 ||
                  (attestationThreshold === null &&
                    frameworkSettingThreshold === 0)
                    ? 'Verified'
                    : pillUnverifiedLabel
                }
              />
            </VerificationHover>
          ) : (
            <VerificationHover
              daoName={daoName}
              currentThreshold={null}
              frameworkThreshold={frameworkSettingThreshold}
              status="No Framework"
            >
              <Pill
                status={status === 'Verified' ? 'gradient' : 'tertiary'}
                label="Not Set"
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
        header: 'Attestations',
        accessorFn: contribution => String(contribution.attestations.length),
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          return <Text textTransform="capitalize">{getValue()} </Text>;
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
                icon={contributionVerifiedForDao ? 'checkmark' : null}
                status={contributionVerifiedForDao ? 'primary' : 'tertiary'}
              />
            </Flex>
          );
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        enableSorting: false,
        cell: ({ row }) => (
          <HStack spacing="1">
            <IconButton
              icon={<FiTrash2 fontSize="1rem" />}
              variant="ghost"
              color="gray.800"
              disabled={row.original.user.id !== userData?.id}
              aria-label="Delete Contribution"
              data-testid="deleteContribution-test"
              onClick={() => handleDeleteContribution(row.original.id)}
            />
          </HStack>
        ),
      },
    ];
  }, [handleDeleteContribution, userData?.id]);

  const table = useReactTable({
    data,
    columns: columnsDefs,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugAll: false,
  });

  const CopyChildren = () => (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Text as="span">
        Record a contribution and then attribute it to a DAO or minting it on
        the Staged tab
      </Text>
      <span role="img" aria-labelledby="winking emoji">
        😉
      </span>
    </Flex>
  );

  let component = (
    <GovrnCta
      heading={`It's minting time!`}
      emoji="🔭"
      copy={<CopyChildren />}
    />
  );

  if (data.length) {
    component = (
      <Stack>
        <GlobalFilter
          preGlobalFilteredRows={table
            .getPreFilteredRowModel()
            .rows.map(r => r.original)}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Box width="100%" maxWidth="100vw" overflowX="auto">
          <InfiniteScroll
            dataLength={table.getRowModel().rows.length}
            next={nextPage}
            scrollThreshold={0.8}
            hasMore={hasMoreItems}
            loader={<GovrnSpinner />}
          >
            <GovrnTable controller={table} maxWidth="100vw" overflowX="auto" />{' '}
          </InfiniteScroll>
        </Box>
      </Stack>
    );
  }

  return (
    <>
      {component}
      <DeleteContributionDialog dialog={dialog} setDialog={setDialog} />
    </>
  );
};

export default MintedContributionsTable;
