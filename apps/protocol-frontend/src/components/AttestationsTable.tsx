import { useState, useMemo } from 'react';
import { format } from 'date-fns';
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { FiCheckSquare } from 'react-icons/fi';
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import { ModalWrapper } from '@govrn/protocol-ui';
import { useOverlay } from '../contexts/OverlayContext';
import GlobalFilter from './GlobalFilter';
import AddAttestationForm from './AddAttestationForm';

const AttestationsTable = ({ contributionsData }: any) => {
  console.log('contributions data', contributionsData);

  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContribution, setSelectedContribution] = useState<any>();

  const handleAddAttestationFormModal = (id: number) => {
    setSelectedContribution(id);
    setModals({ addAttestationFormModal: true });
  };

  const data = useMemo(
    () =>
      contributionsData.map((contribution: any) => ({
        id: contribution.id,
        submissionDate: format(new Date(contribution.date_of_submission), 'P'),
        engagementDate: format(new Date(contribution.date_of_engagement), 'P'),
        attestations: contribution.attestations || null,
        // attestations:
        //   contribution.attestations !== null
        //     ? Object.keys(contribution.attestations).length
        //     : 0,
        verificationLevel: contribution.verificationLevel,
        guilds: contribution.attestations || null,
        status: contribution.status.name,
        action: '',
        name: contribution.name,
        attestationDate: null,
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
        Header: 'Date',
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
      ...columns,
      {
        id: 'actions',
        Header: 'Actions',
        Cell: ({ row }) => (
          <HStack spacing="1">
            <IconButton
              icon={<FiCheckSquare fontSize="1rem" />}
              variant="ghost"
              color="gray.800"
              aria-label="Add Attestation"
              onClick={() => handleAddAttestationFormModal(row.original.id)}
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
    prepareRow,
    state: { globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table {...getTableProps()}>
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
