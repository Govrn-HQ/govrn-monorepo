// @ts-nocheck
// TODO, remove this ^ after migrating v7 to v8
import { useEffect, useMemo, useState } from 'react';
import * as _ from 'lodash';
import {
  Box,
  chakra,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import {
  Row,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { ModalWrapper } from '@govrn/protocol-ui';
import { useUser } from '../contexts/UserContext';
import { useOverlay } from '../contexts/OverlayContext';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import GlobalFilter from './GlobalFilter';
import AddAttestationForm from './AddAttestationForm';
import { ContributionItem } from '@govrn/protocol-client';

const AttestationsTable = ({
  contributionsData,
  setSelectedContributions,
}: {
  contributionsData: ContributionItem[];
  setSelectedContributions: (contrs: any[]) => void;
}) => {
  const localOverlay = useOverlay();
  const { userData } = useUser();
  const [selectedContribution] = useState<any>();

  const nonUserContributions = _.filter(contributionsData, function (a) {
    return a.user.id !== userData.id;
  });

  const unattestedContributions = _.filter(nonUserContributions, function (a) {
    return a.attestations?.every((b) => b.user_id !== userData.id) ?? false;
  });

  const data = useMemo(
    () =>
      unattestedContributions.map((contribution) => ({
        id: contribution.id,
        date_of_submission: contribution.date_of_submission,
        date_of_engagement: contribution.date_of_submission,
        attestations: contribution.attestations || null,
        guilds: contribution.attestations || null,
        status: contribution.status.name,
        action: '',
        name: contribution.name,
        attestationDate: null,
        onChainId: contribution.on_chain_id,
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
        // @ts-ignore
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
      // { Header: 'DAO', accessor: 'guild' },
    ],
    []
  );

  const tableHooks = (hooks: {
    visibleColumns: ((columns: any) => any[])[];
  }) => {
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
    setSelectedContributions(selectedFlatRows.map((r) => r.original));
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
      </Box>
    </Stack>
  );
};

export default AttestationsTable;
