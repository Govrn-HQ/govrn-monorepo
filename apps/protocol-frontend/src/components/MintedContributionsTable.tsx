import { useMemo, useState } from 'react';
import {
  Box,
  chakra,
  Flex,
  HStack,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
  Row,
} from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import GlobalFilter from './GlobalFilter';
import { UIContribution } from '@govrn/ui-types';
import DeleteContributionDialog from './DeleteContributionDialog';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mergePages } from '../utils/arrays';
import { formatDate } from '../utils/date';
import { FiTrash2 } from 'react-icons/fi';
import { statusEmojiSelect } from '../utils/statusEmojiSelect';

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

  const handleDeleteContribution = (contributionId: number) => {
    setDialog({
      ...dialog,
      isOpen: true, //this opens AlertDialog
      title:
        "Are you sure you want to delete this contribution? You can't undo this action.",
      contributionId: contributionId,
    });
  };

  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnsDefs: ColumnDef<UIContribution>[] = useMemo<
    ColumnDef<UIContribution>[]
  >(() => {
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
                <Text whiteSpace="normal">{getValue()}</Text>
              </Link>
            </Flex>
          );
        },
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({
          getValue,
        }: {
          getValue: Getter<UIContribution['status']>;
        }) => {
          return (
            <Text textTransform="capitalize">
              {getValue().name}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {statusEmojiSelect(getValue().name)}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        header: 'Engagement Date',
        accessorFn: contribution => formatDate(contribution.date_of_engagement),
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
      },
      {
        id: 'actions',
        header: 'Actions',
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
  }, []);

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
          <Table maxWidth="100vw" overflowX="auto">
            <Thead backgroundColor="gray.50">
              {table.getHeaderGroups().map(headerGroup => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Th key={header.id} borderColor="gray.100">
                      {header.isPlaceholder ? null : (
                        <Box
                          {...{
                            onClick: header.column.getToggleSortingHandler(),
                            cursor: 'pointer',
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}

                          <chakra.span paddingLeft="4">
                            {{
                              asc: <IoArrowUp aria-label="sorted-ascending" />,
                              desc: (
                                <IoArrowDown aria-label="sorted-descending" />
                              ),
                            }[header.column.getIsSorted() as string] ?? null}
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
              {table.getRowModel().rows.length > 0 &&
                table.getRowModel().rows.map(row => {
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
        <DeleteContributionDialog dialog={dialog} setDialog={setDialog} />
      </Box>
    </Stack>
  );
};

export default MintedContributionsTable;
