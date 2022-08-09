import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  chakra,
  Link as ChakraLink,
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

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useUser } from '../contexts/UserContext';

import {
  Row,
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
import { UIContribution } from '@govrn/ui-types';

import DeleteContributionDialog  from './DeleteContributionDialog';

import { BLOCK_EXPLORER_URLS } from '../utils/constants';


type ContributionTableType = Omit<UIContribution, 'name' | 'txHash'> & {
  name: { name: string; txHash: string | undefined };
};
const ContributionsTable = ({
  contributionsData,
  setSelectedContributions,
}: {
  contributionsData: UIContribution[];
  setSelectedContributions: (rows: Row<any>[]) => void;
}) => {
  const { userData } = useUser();
 
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContribution, setSelectedContribution] = useState<any>();

  const handleEditContributionFormModal = (id: number) => {
    setSelectedContribution(id);
    setModals({ editContributionFormModal: true });
  };

  type DialogProps = {
    isOpen: boolean;
    title : string;
    onConfirm: boolean;
    contribution_id: string;
  }

  const [dialog, setDialog] = useState<DialogProps>({ isOpen: false, title: '' ,onConfirm: false, contribution_id:''});
 
  useEffect(() => {
            setDialog(dialog)
               }, [dialog])

  
  const handleDeleteContribution = (contribution_id: string) =>{
    setDialog({
      ...dialog,
      isOpen: true,  //this opens AlertDialog
      title: "Are you sure you want to delete this contribution? You can't undo this action afterwards",
      contribution_id: contribution_id
    })

  }

  
  const data = useMemo(
    () =>
      contributionsData.map((contribution) => ({
        name: contribution.name,
        txHash: contribution.tx_hash,
        id: contribution.id,
        details: contribution.details,
        proof: contribution.proof,
        date_of_submission: contribution.date_of_submission,
        engagementDate: contribution.date_of_engagement,
        attestations: contribution.attestations || null,
        user: contribution.user,
        activityTypeId: contribution.activity_type.id,
        status: contribution.status,
        action: '',
        guildName:
          contribution.guilds.map((guildObj: any) => guildObj.guild.name)[0] ??
          '---',
      })),
    [contributionsData]
  );
  
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value, row }) => {
          return (
            <>
              {row.original.txHash !== null ? (
                <ChakraLink
                  href={`${BLOCK_EXPLORER_URLS['gnosisChain']}/${row.original.txHash}`}
                  isExternal
                >
                  {value}
                  <ExternalLinkIcon marginX="2px" />
                </ChakraLink>
              ) : (
                <Text>{value}</Text>
              )}
            </>
          );
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          return (
            <Text textTransform="capitalize">
              {value.name}{' '}
              <span
                role="img"
                aria-labelledby="Emoji indicating Contribution status: Sun emoji for minted and Eyes emoji for staging."
              >
                {value.name === 'minted' ? '🌞' : '👀'}
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

      {
        Header: 'DAO',
        accessor: 'guildName',
        Cell: ({ value }) => {
          return <Text>{value}</Text>;
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
            disabled={row.original.status.name === 'minted'}
          />
        ),
      },
      ...columns,
      {
        id: 'actions',
        Header: 'Actions',
        Cell: ({ row }) =>
          row.original.status.name === 'minted' ? (
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
                    row.original.user!== userData?.id ||
                    row.original.status !== 'minted'
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
                    row.original.user !== userData?.id ||
                    row.original.status.name !== 'minted'
                  }
                  aria-label="Delete Contribution"
                  onClick = {() => handleDeleteContribution(row.original.id)}
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
                  row.original.user !== userData?.id ||
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
                  row.original.user !== userData?.id ||
                  row.original.status.name === 'minted'
                }
                aria-label="Delete Contribution"
                onClick = {() => handleDeleteContribution(row.original.id)}
                
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
      <Box width="100%" maxWidth="100vw" overflowX="auto">
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
              contribution={
                contributionsData.find(
                  (localContribution) =>
                    localContribution.id === selectedContribution
                )!
              }
            />
          }
        />
        <DeleteContributionDialog dialog={dialog}  setDialog={setDialog}/>
      </Box>
    </Stack>
  );

};

export default ContributionsTable;
