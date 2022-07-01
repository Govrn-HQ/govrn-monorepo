import { useState, useEffect, useMemo } from 'react';
import * as _ from 'lodash';
import { format } from 'date-fns';
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
  Text,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { FiCheckSquare } from 'react-icons/fi';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useRowSelect,
} from 'react-table';
import { ModalWrapper } from '@govrn/protocol-ui';
import { useUser } from '../contexts/UserContext';
import { useOverlay } from '../contexts/OverlayContext';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import AddAttestationForm from './AddAttestationForm';

const AttestationsTable = ({
  contributionsData,
  setSelectedContributions,
}: any) => {
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const { userData } = useUser();
  const [selectedContribution, setSelectedContribution] = useState<any>();

  const handleAddAttestationFormModal = (id: number) => {
    setSelectedContribution(id);
    setModals({ addAttestationFormModal: true });
  };

  const unattestedContributions = _.filter(contributionsData, function (a) {
    return a.attestations.every((b: any) => b.user_id !== userData.id);
  });

  const data = useMemo(
    () =>
      unattestedContributions.map((contribution: any) => ({
        id: contribution.id,
        submissionDate: format(new Date(contribution.date_of_submission), 'P'),
        engagementDate: format(new Date(contribution.date_of_engagement), 'P'),
        attestations: contribution.attestations || null,
        // attestations:
        //   contribution.attestations !== null
        //     ? Object.keys(contribution.attestations).length
        //     : 0,
        guilds: contribution.attestations || null,
        status: contribution.status.name,
        action: '',
        name: contribution.name,
        attestationDate: null,
        onChainId: contribution.on_chain_id,
        // format(new Date(contribution.attestationDate), 'P') || null,
        contributor: contribution.user.name,
      })),
    [contributionsData]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
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
        Header: 'Contributor',
        accessor: 'contributor',
      },
      { Header: 'DAO', accessor: 'guild' },
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
            // disabled={row.original.attestations?.user_id === userData.id}
          />
        ),
      },
      ...columns,
      // {
      //   id: 'actions',
      //   Header: 'Actions',
      //   Cell: ({ row }) => (
      //     <HStack spacing="1">
      //       <IconButton
      //         icon={<FiCheckSquare fontSize="1rem" />}
      //         variant="ghost"
      //         color="gray.800"
      //         aria-label="Add Attestation"
      //         onClick={() => handleAddAttestationFormModal(row.original.id)}
      //       />
      //     </HStack>
      //   ),
      // },
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
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
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
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <ModalWrapper
        name="addAttestationFormModal"
        title="Add Attestation"
        localOverlay={localOverlay}
        content={
          <AddAttestationForm
            contribution={contributionsData.find(
              (localContribution) =>
                localContribution.id === selectedContribution
            )}
          />
        }
      />
    </>
  );
};

export default AttestationsTable;
