import { useMemo, useState } from 'react';
import { Box, Flex, Heading, Stack, Text, Tooltip } from '@chakra-ui/react';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  Getter,
  Row,
} from '@tanstack/react-table';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { UIContribution } from '@govrn/ui-types';
import { formatDate, toDate } from '../utils/date';
import { mergePages } from '../utils/arrays';
import { displayAddress } from '../utils/web3';
import GovrnTable from './GovrnTable';

const columnsDef: ColumnDef<UIContribution>[] = [
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
              paddingRight={8}
              flex="1 0 0"
              maxW="15rem"
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
          </Link>
        </Flex>
      );
    },
  },
  {
    header: 'Type',
    accessorFn: contribution => contribution.activity_type.name,
    cell: ({ getValue }: { getValue: Getter<string> }) => {
      return (
        <Flex direction="column" wrap="wrap">
          <Text whiteSpace="normal" flex="1 0 0">
            {getValue()}
          </Text>
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
    header: 'Contributor',
    accessorKey: 'user',

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
];

const RecentContributionsTable = ({
  contributionsData,
  hasMoreItems,
  nextPage,
}: {
  contributionsData: UIContribution[][];
  hasMoreItems: boolean;
  nextPage: () => void;
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const data = useMemo<UIContribution[]>(() => {
    return mergePages(contributionsData);
  }, [contributionsData]);

  const table = useReactTable({
    data,
    columns: columnsDef,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Stack>
      <Box width="100%" maxWidth="100vw" overflowX="auto">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Heading
            as="h3"
            fontSize="lg"
            color="gray.800"
            fontWeight="normal"
            paddingBottom={4}
          >
            Recent Contributions
          </Heading>
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
                borderWidth="1px"
                borderColor="gray.100"
                borderRadius={{ base: 'none', md: 'md' }}
              />
            </InfiniteScroll>
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
};

export default RecentContributionsTable;
