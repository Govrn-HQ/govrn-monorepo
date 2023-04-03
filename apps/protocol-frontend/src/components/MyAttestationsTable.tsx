import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Stack, Button, Text } from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';
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
import GlobalFilter from './GlobalFilter';
import { formatDate, toDate } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UIContribution } from '@govrn/ui-types';
import { GovrnCta, GovrnSpinner } from '@govrn/protocol-ui';
import { useUser } from '../contexts/UserContext';
import { statusEmojiSelect } from '../utils/statusEmojiSelect';
import GovrnTable from './GovrnTable';
import MemberDisplayName from './MemberDisplayName';
import AttestationFilter from './AttestationFilter';

const MyAttestationsTable = ({
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

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnsDef = useMemo<ColumnDef<UIContribution>[]>(() => {
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
            <Flex direction="column" wrap="wrap">
              <RouterLink to={`/contributions/${row.original.id}`}>
                <Text
                  whiteSpace="normal"
                  bgGradient="linear-gradient(100deg, #1a202c 0%, #1a202c 100%)"
                  bgClip="text"
                  transition="all 100ms ease-in-out"
                  _hover={{
                    fontWeight: 'bolder',
                    bgGradient: 'linear(to-l, #7928CA, #FF0080)',
                  }}
                >
                  {getValue()}
                </Text>
              </RouterLink>
            </Flex>
          );
        },
      },
      {
        header: 'Status',
        accessorFn: contr => contr.status.name,
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          return (
            <Text textTransform="capitalize">
              {getValue()}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {statusEmojiSelect(getValue())}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        header: 'Attestation Date',
        accessorFn: contribution =>
          toDate(
            contribution.attestations.find(a => a.user_id === userData?.id)
              ?.createdAt ?? '---',
          ),
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
    ];
  }, [userData?.id]);

  const table = useReactTable({
    data,
    columns: columnsDef,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

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
        href="https://govrn.gitbook.io/govrn-docs/attestations/attestations"
        isExternal
        textDecoration="none"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          variant="secondary"
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
      heading={`You haven't attested yet`}
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
                My Contributions
              </Text>
              <Text fontSize="md" fontWeight="normal">
                These are contributions that you have already attested to.
              </Text>
            </Stack>
          </Stack>
        </Box>

        <Stack marginTop="5">
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
              />
            </InfiniteScroll>
          </Box>
        </Stack>
      </>
    );
  }
  return component;
};

export default MyAttestationsTable;
