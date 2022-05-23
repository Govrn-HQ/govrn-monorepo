import { useMemo } from 'react';
import {
  Checkbox,
  Table,
  Stack,
  HStack,
  IconButton,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  chakra,
  Badge,
  // useDisclosure
} from '@chakra-ui/react';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useTable, useSortBy } from 'react-table';

// import EditContributionForm from './EditContributionForm';

const ContributionsTable = ({ contributionsData }: any) => {
  // const editContributionFormModal = useDisclosure();

  const data = useMemo(
    () =>
      contributionsData.map((contribution: any) => ({
        name: (
          <Stack direction="row">
            <Checkbox size="lg" />
            <Text>{contribution.name}</Text>
          </Stack>
        ),

        id: contribution.id,
        submissionDate: contribution.submissionDate,
        engagementDate: contribution.engagementDate,
        attestations: Object.keys(contribution.attestations).length,
        verificationLevel: contribution.verificationLevel,
        guilds:
          contribution.guilds.length > 1 || contribution.guilds.length === 0
            ? contribution.guilds.length
            : Object.values(contribution.guilds[0]['name']),
        status: contribution.status,
        action: '',
      })),
    [contributionsData]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      { Header: 'Status', accessor: 'status' },
      {
        Header: 'Engagement Date',
        accessor: 'engagementDate',
      },
      {
        Header: 'Attestations',
        accessor: 'attestations',
      },
      {
        Header: 'Verification Level',
        accessor: 'verificationLevel',
      },
      {
        Header: 'DAOs',
        accessor: 'guilds',
        Cell: ({ value }) => {
          return (
            <Badge size="md" colorScheme="blue">
              {value}
            </Badge>
          );
        },
      },
      { Header: 'Actions' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  console.log('contributions in table', contributionsData);

  return (
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
                <>
                  <Td {...cell.getCellProps()} borderColor="gray.100">
                    {cell.render('Cell')}
                  </Td>
                  <Td borderColor="gray.100">
                    <HStack spacing="1" paddingRight={6}>
                      <IconButton
                        icon={<FiEdit2 fontSize="1rem" />}
                        variant="ghost"
                        color="gray.800"
                        aria-label="Edit Contribution"
                        onClick={() => {
                          console.log('click', cell.row.original.id);
                          console.log(
                            'full data',
                            contributionsData.find(
                              (c) => c.id === cell.row.original.id
                            )
                          );
                        }}
                      />
                      <IconButton
                        icon={<FiTrash2 fontSize="1rem" />}
                        variant="ghost"
                        color="gray.800"
                        aria-label="Delete Contribution"
                      />
                    </HStack>
                  </Td>
                </>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ContributionsTable;
