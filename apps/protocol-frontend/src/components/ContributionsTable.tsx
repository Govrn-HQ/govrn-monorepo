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
  useSortBy,
  useTable,
} from 'react-table';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { ModalWrapper } from '@govrn/protocol-ui';
import { useOverlay } from '../contexts/OverlayContext';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import EditContributionForm from './EditContributionForm';

// import EditContributionForm from './EditContributionForm';

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
      contributionsData.map((contribution: any) => ({
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

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }) => {
          return (
            // <Stack direction="row">
            //   <Checkbox size="lg" />
            <Text>{value}</Text>
            // </Stack>
          );
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          return (
            <Text textTransform="capitalize">
              {value}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {value === 'minted' ? '🌞' : '👀'}
              </span>{' '}
            </Text>
          );
        },
      },
      {
        Header: 'Engagement Date',
        accessor: 'engagementDate',
      },
      {
        Header: 'Attestations',
        accessor: 'attestations',
        Cell: ({ value }) => {
          return <Text textTransform="capitalize">{value.length} </Text>;
        },
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state: { globalFilter, selectedRowIds },
    preGlobalFilteredRows,
    setGlobalFilter,
    selectedFlatRows,
    prepareRow,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    tableHooks
  );

  useEffect(() => {
    setSelectedContributions(selectedFlatRows);
  }, [selectedFlatRows, selectedRowIds]);

  return (
    <Stack>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Box
        width="100%"
        maxWidth="100vw"
        overflowX="auto"
        css={{
          // Firefox
          'scrollbar-width': 'none',
          // Blink- and WebKit-based browsers
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Table {...getTableProps()} maxWidth="100vw" overflowX="auto">
          <Thead backgroundColor="gray.50">
            {headerGroups.map((headerGroup: any) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
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
                ))}
                <Th borderColor="gray.100" />
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()} borderColor="gray.100">
                      <>{cell.render('Cell')}</>
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
