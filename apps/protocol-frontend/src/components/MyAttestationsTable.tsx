import { useMemo } from 'react';
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
  Column,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  UseTableHooks,
} from 'react-table';
import { useUser } from '../contexts/UserContext';
import GlobalFilter from './GlobalFilter';
import { formatDate } from '../utils/date';
import { UIContribution } from '@govrn/ui-types';

type MyAttestationsTableType = {
  id: number;
  date_of_submission: Date | string;
  date_of_engagement: Date | string;
  status: string;
  name: string;
  attestationDate: string;
  contributor?: string | null;
};

const MyAttestationsTable = ({
  contributionsData,
}: // setSelectedContributions,
{
  contributionsData: UIContribution[];
}) => {
  const { userData } = useUser();

  const filteredMintedContributions = _.filter(contributionsData, function (a) {
    return a.status.name === 'minted';
  });

  const nonEmptyContributions = _.filter(
    filteredMintedContributions,
    a => a.attestations?.length > 0,
  );

  const attestedContributions = _.filter(nonEmptyContributions, a =>
    a.attestations.every(b => b.user_id === userData?.id),
  );

  const data = useMemo<MyAttestationsTableType[]>(
    () =>
      attestedContributions.map(contribution => ({
        id: contribution.id,
        date_of_submission: contribution.date_of_submission,
        date_of_engagement: contribution.date_of_engagement,
        status: contribution.status.name,
        name: contribution.name,
        attestationDate: formatDate(
          contribution.attestations[0]?.date_of_attestation,
        ),
        contributor: contribution.user.name,
      })),
    [contributionsData],
  );

  const columns = useMemo<Column<MyAttestationsTableType>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => {
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
        Header: 'Attestation Date',
        accessor: 'attestationDate',
      },
      {
        Header: 'Contributor',
        accessor: 'contributor',
      },
      // { Header: 'DAO', accessor: 'guild' },
    ],
    [],
  );

  const tableHooks = (hooks: UseTableHooks<MyAttestationsTableType>) => {
    hooks.visibleColumns.push(columns => [
      // {
      //   id: 'selection',
      //   Header: ({ getToggleAllRowsSelectedProps }) => (
      //     <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      //   ),
      //   Cell: ({ row }) => (
      //     <IndeterminateCheckbox
      //       {...row.getToggleRowSelectedProps()}
      //       // disabled={row.original.attestations?.user_id === userData.id}
      //     />
      //   ),
      // },
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
    tableHooks,
  );

  // useEffect(() => {
  //   setSelectedContributions(selectedFlatRows);
  // }, [selectedFlatRows, selectedRowIds]);

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
            {rows.map(row => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <Td {...cell.getCellProps()} borderColor="gray.100">
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};

export default MyAttestationsTable;
