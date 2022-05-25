import { useState, useMemo } from 'react';
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
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTable, useSortBy } from 'react-table';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { ModalWrapper } from '@govrn/protocol-ui';
import { useOverlay } from '../contexts/OverlayContext';
import EditContributionForm from './EditContributionForm';

// import EditContributionForm from './EditContributionForm';

const ContributionsTable = ({ contributionsData }: any) => {
  console.log('data', contributionsData);
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
        name: (
          <Stack direction="row">
            <Checkbox size="lg" />
            <Text>{contribution.name}</Text>
          </Stack>
        ),
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
        // guilds:
        //   contribution.guilds?.length > 1 || contribution.guilds?.length === 0
        //     ? contribution.guilds?.length
        //     : Object.values(contribution.guilds[0]['name']),
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
              icon={<FiEdit2 fontSize="1rem" />}
              variant="ghost"
              color="gray.800"
              aria-label="Edit Contribution"
              onClick={() => handleEditContributionFormModal(row.original.id)}
            />
            <IconButton
              icon={<FiTrash2 fontSize="1rem" />}
              variant="ghost"
              color="gray.800"
              aria-label="Delete Contribution"
            />
          </HStack>
        ),
      },
    ]);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, tableHooks);
  console.log('contributions in table', contributionsData);

  return (
    <>
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
        content={
          <EditContributionForm
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

export default ContributionsTable;
