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
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { formatDate, toDate } from '../utils/date';
import { FiTrash2 } from 'react-icons/fi';
import GovrnTable from './GovrnTable';

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
            <Flex direction="column" wrap="wrap">
              <Link to={`/contributions/${row.original.id}`}>
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
                  {' '}
                  {getValue()}
                </Text>
              </Link>
            </Flex>
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
          contribution.guilds.map(guildObj => guildObj.guild.name)[0] ?? '---',
        cell: ({ getValue }: { getValue: Getter<string> }) => {
          return <Text>{getValue()}</Text>;
        },
        invertSorting: true,
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

  return (
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
        <DeleteContributionDialog dialog={dialog} setDialog={setDialog} />
      </Box>
    </Stack>
  );
};

export default MintedContributionsTable;
