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
import { HiOutlineLink } from 'react-icons/hi';
import {
  Column,
  Row,
  HeaderGroup,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  UseTableRowProps,
  UseTableHooks,
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
  setSelectedContributions: (rows: Row<RecentContributionTableType>[]) => void;
  hasMoreItems: boolean;
  nextPage: () => void;
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
  console.log('contributions data', contributionsData);
  console.log('table data', data);

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
        <Table {...getTableProps()} maxWidth="100vw" overflowX="auto">
          <Thead backgroundColor="gray.50">
            {headerGroups.map(
              (headerGroup: HeaderGroup<ContributionTableType>) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(
                    (column: HeaderGroup<ContributionTableType>) => (
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
    </Stack>
  );
};

export default RecentContributionsTable;
