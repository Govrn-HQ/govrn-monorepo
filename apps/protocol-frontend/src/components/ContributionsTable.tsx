import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  chakra,
  HStack,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import { format } from 'date-fns';
import {
  useFilters,
  useGlobalFilter,
  useRowSelect,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  getFilteredRowModel,
  getCoreRowModel,
  SortingState,
  flexRender,
} from '@tanstack/react-table';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { ModalWrapper } from '@govrn/protocol-ui';
import { useOverlay } from '../contexts/OverlayContext';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import EditContributionForm from './EditContributionForm';
import { ContributionItem } from '@govrn/protocol-client';

// import EditContributionForm from './EditContributionForm';

const renderHeader = (title: string) => {
  return <Text>{title}</Text>;
};

const ContributionsTable = ({
  contributionsData,
  setSelectedContributions,
}: any) => {
  const { userData } = useUser();

  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContribution, setSelectedContribution] = useState<any>();

  const handleEditContributionFormModal = (id: number) => {
    setSelectedContribution(id);
    setModals({ editContributionFormModal: true });
  };

  const data = useMemo(
    () =>
      contributionsData.map((contribution: ContributionItem) => ({
        name: contribution.name,
        id: contribution.id,
        details: contribution.details,
        proof: contribution.proof,
        submissionDate: format(new Date(contribution.date_of_submission), 'P'),
        engagementDate: format(new Date(contribution.date_of_engagement), 'P'),
        attestations: contribution.attestations || null,
        user: contribution.user.id,
        activityTypeId: contribution.activity_type.id,
        status: contribution.status.name,
        action: '',
      })),
    [contributionsData]
  );

  const columns = useMemo<ColumnDef<ContributionItem>[]>(
    () => [
      {
        id: 'name',
        // header: () => renderHeader('Name'),
        accessorKey: 'name',
      },
      {
        id: 'status',
        header: () => renderHeader('Status'),
        accessorKey: 'status',
        cell: (info) => {
          return (
            <Text textTransform="capitalize">
              {info.getValue()}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {info.getValue() === 'minted' ? '🌞' : '👀'}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        id: 'engagement_date',
        header: () => renderHeader('Engagement Date'),
        accessor: 'engagementDate',
        cell: (info) => {
          return <Text>{(info.getValue() as string) ?? 'NaN'}</Text>;
        },
      },
      {
        id: 'attestations',
        header: () => renderHeader('Attestations'),
        accessorKey: 'attestations',
        cell: (info) => (
          <Text textTransform="capitalize">{info.getValue().length}</Text>
        ),
      },
    ],
    []
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
        ),
        Cell: ({ row }) => (
          <IndeterminateCheckbox
            {...row.getToggleRowSelectedProps()}
            disabled={row.original.status === 'minted'}
          />
        ),
      },
      ...columns,
      {
        id: 'actions',
        Header: 'Actions',
        Cell: ({ row }) =>
          row.original.status === 'minted' ? (
            <Tooltip
              label="Minted contribution(s) cannot be edited"
              aria-label="A tooltip"
            >
              <HStack spacing="1">
                <IconButton
                  icon={<FiEdit2 fontSize="1rem" />}
                  variant="ghost"
                  color="gray.800"
                  aria-label="Edit Contribution"
                  disabled={
                    row.original.user.id !== userData?.user ||
                    row.original.status === 'minted'
                  }
                  onClick={() =>
                    handleEditContributionFormModal(row.original.id)
                  }
                />
                <IconButton
                  icon={<FiTrash2 fontSize="1rem" />}
                  variant="ghost"
                  color="gray.800"
                  disabled={
                    row.original.user.id !== userData?.user ||
                    row.original.status === 'minted'
                  }
                  aria-label="Delete Contribution"
                />
              </HStack>
            </Tooltip>
          ) : (
            <HStack spacing="1">
              <IconButton
                icon={<FiEdit2 fontSize="1rem" />}
                variant="ghost"
                color="gray.800"
                aria-label="Edit Contribution"
                disabled={
                  row.original.user.id !== userData?.user ||
                  row.original.status === 'minted'
                }
                onClick={() => handleEditContributionFormModal(row.original.id)}
              />
              <IconButton
                icon={<FiTrash2 fontSize="1rem" />}
                variant="ghost"
                color="gray.800"
                disabled={
                  row.original.user.id !== userData?.user ||
                  row.original.status === 'minted'
                }
                aria-label="Delete Contribution"
              />
            </HStack>
          ),
      },
    ]);
  };
  const [rowSelection, setRowSelection] = useState({});

  const [sorting, setSorting] = useState<SortingState>([]);

  const { getHeaderGroups, getRowModel } = useReactTable<ContributionItem>({
    data,
    columns,
    // initialState: {}, TODO think about empty table/view for initialState.
    state: {
      sorting,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   state: { globalFilter, selectedRowIds },
  //   preGlobalFilteredRows,
  //   setGlobalFilter,
  //   selectedFlatRows,
  //   prepareRow,
  // } = useTable(
  //   { columns, data },
  //   useFilters,
  //   useGlobalFilter,
  //   useSortBy,
  //   useRowSelect,
  //   tableHooks
  // );

  // useEffect(() => {
  //   setSelectedContributions(selectedFlatRows);
  // }, [selectedFlatRows, selectedRowIds]);

  return (
    <Stack>
      {/*<GlobalFilter*/}
      {/*  preGlobalFilteredRows={preGlobalFilteredRows}*/}
      {/*  globalFilter={globalFilter}*/}
      {/*  setGlobalFilter={setGlobalFilter}*/}
      {/*/>*/}
      <Box width="100%" maxWidth="100vw" overflowX="auto">
        <Table /*{...getTableProps()} maxWidth="100vw" overflowX="auto"  */>
          <Thead backgroundColor="gray.50">
            {getHeaderGroups().map((headerGroup: any) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    isNumeric={header.isNumeric}
                    borderColor="gray.100"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {/*{column.render('Header')}*/}
                    {/*<chakra.span paddingLeft="4">*/}
                    {/*  {header.isSorted ? (*/}
                    {/*    header.isSortedDesc ? (*/}
                    {/*      <IoArrowDown aria-label="sorted-descending" />*/}
                    {/*    ) : (*/}
                    {/*      <IoArrowUp aria-label="sorted-ascending" />*/}
                    {/*    )*/}
                    {/*  ) : null}*/}
                    {/*</chakra.span>*/}
                  </Th>
                ))}
                <Th borderColor="gray.100" />
              </Tr>
            ))}
          </Thead>
          <Tbody /* {...getTableBodyProps()} */>
            {getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id} borderColor="gray.100">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <ModalWrapper
          name="editContributionFormModal"
          title="Update Contribution Activity"
          localOverlay={localOverlay}
          size="3xl"
          content={
            <EditContributionForm
              contribution={contributionsData.find(
                (localContribution) =>
                  localContribution.id === selectedContribution
              )}
            />
          }
        />
      </Box>
    </Stack>
  );
};

export default ContributionsTable;
