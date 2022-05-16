import { useMemo, forwardRef, useRef, useEffect } from 'react';
import {
  Checkbox,
  Table,
  Stack,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  chakra,
  useDisclosure,
} from '@chakra-ui/react';
import { ModalWrapper } from '@govrn/protocol-ui';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import EditContributionForm from './EditContributionForm';

const ContributionsTable = ({ contributionsData }: any) => {
  const editContributionFormModal = useDisclosure();
  const data = useMemo(
    () =>
      contributionsData.map((contribution: any) => ({
        name: (
          <Stack direction="row">
            <Checkbox size="lg" />
            <Text>{contribution.name}</Text>
          </Stack>
        ),
        submissionDate: contribution.submissionDate,
        engagementDate: contribution.engagementDate,
        attestations: Object.keys(contribution.attestations).length,
        verificationLevel: contribution.verificationLevel,
        guilds: Object.keys(contribution.guilds).length,
        status: contribution.status,
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
        Header: 'Submission Date',
        accessor: 'submissionDate',
      },
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
      { Header: 'DAOs', accessor: 'guilds' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

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
                <Td {...cell.getCellProps()} borderColor="gray.100">
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ContributionsTable;

{
  /* <Td borderColor="gray.100">
                <ModalWrapper
                  title="Update Contribution"
                  isOpen={editContributionFormModal.isOpen}
                  onClose={editContributionFormModal.onClose}
                  body={
                    <EditContributionForm
                      contribution=""
                      // id={raid.id}
                      // onClose={editContributionFormModal.onClose}
                      // raid={raid}
                    />
                  }
                  bgColor="white"
                  color="gray.800"
                />
                <HStack spacing="1" paddingRight={6}>
                  <IconButton
                    icon={<FiEdit2 fontSize="1rem" />}
                    variant="ghost"
                    color="gray.800"
                    aria-label="Edit Contribution"
                    onClick={editContributionFormModal.onOpen}
                  />
                  <IconButton
                    icon={<FiTrash2 fontSize="1rem" />}
                    variant="ghost"
                    color="gray.800"
                    aria-label="Delete Contribution"
                  />
                </HStack>
              </Td> */
}
