import { useMemo } from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {
  Column,
  HeaderGroup,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { UIContribution } from '@govrn/ui-types';
import { RecentContributionTableType } from '../types/table';
import { formatDate } from '../utils/date';

const RecentContributionsTable = ({
  contributionsData,
}: {
  contributionsData: Pick<
    UIContribution,
    'id' | 'name' | 'date_of_engagement' | 'user' | 'activity_type'
  >[];
}) => {
  const data = useMemo<RecentContributionTableType[]>(
    () =>
      contributionsData.map(contribution => ({
        id: contribution.id,
        name: contribution.name,
        engagementDate: formatDate(contribution.date_of_engagement),
        user: contribution.user,
        activity_type: contribution.activity_type,
      })),
    [contributionsData],
  );

  const columns = useMemo<Column<RecentContributionTableType>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ value }: { value: string }) => {
          return <Text>{value}</Text>;
        },
      },
      {
        Header: 'Type',
        accessor: 'activity_type',
        Cell: ({ value }: { value: { name: string } }) => {
          return <Text>{value.name} </Text>;
        },
      },
      {
        Header: 'Engagement Date',
        accessor: 'engagementDate',
      },
      {
        Header: 'Contributor',
        accessor: 'user',
        Cell: ({ value }: { value: { name?: string | null } }) => {
          return <Text>{value.name ?? ''} </Text>;
        },
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data },
      useFilters,
      useGlobalFilter,
      useSortBy,
      useRowSelect,
    );

  return (
    <Stack>
      <Box width="100%" maxWidth="100vw" overflowX="auto">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Heading
            as="h3"
            fontSize="lg"
            color="gray.800"
            fontWeight="normal"
            paddingBottom={4}
          >
            Recent Contributions
          </Heading>
          <Box width="100%" maxWidth="100vw" overflowX="auto">
            <Table
              {...getTableProps()}
              maxWidth="100vw"
              overflowX="auto"
              borderWidth="1px"
              borderColor="gray.100"
              borderRadius={{ base: 'none', md: 'md' }}
            >
              <Thead backgroundColor="gray.50">
                {headerGroups.map(
                  (headerGroup: HeaderGroup<RecentContributionTableType>) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(
                        (column: HeaderGroup<RecentContributionTableType>) => (
                          <Th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps(),
                            )}
                            borderColor="gray.100"
                          >
                            {column.render('Header')}
                          </Th>
                        ),
                      )}
                      <Th borderColor="gray.100" />
                    </Tr>
                  ),
                )}
              </Thead>

              <Tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <Tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <Td {...cell.getCellProps()} borderColor="gray.100">
                          <>{cell.render('Cell')}</>
                        </Td>
                      ))}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
};

export default RecentContributionsTable;
