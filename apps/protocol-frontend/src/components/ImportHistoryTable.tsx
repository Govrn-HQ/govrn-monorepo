import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  chakra,
  Flex,
  Link as ChakraLink,
  HStack,
  Heading,
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
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  flexRender,
  SortingState,
  getSortedRowModel,
  Getter,
  Row,
} from '@tanstack/react-table';
import {
  useImportHistoryInfiniteList,
  useImportHistoryList,
} from '../hooks/useImportHistoryList';
import { useUser } from '../contexts/UserContext';
import { UIGuildImportHistory } from '@govrn/ui-types';
import IndeterminateCheckbox from './IndeterminateCheckbox';
import EmptyImports from './EmptyImports';
import { GovrnSpinner } from '@govrn/protocol-ui';
import InfiniteScroll from 'react-infinite-scroll-component';
import { mergePages } from '../utils/arrays';
import { formatDate } from '../utils/date';
import { RowSelectionState } from '@tanstack/table-core';

const ImportHistoryTable = () => {
  const { userData } = useUser();

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [selectedRows, setSelectedRows] = useState<UIGuildImportHistory[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const { data: importHistoryData } = useImportHistoryList({
    where: { users: { some: { user_id: { equals: userData?.id } } } },
  });
  console.log('import history', importHistoryData);

  const { data: importHistoryInfiniteData } = useImportHistoryInfiniteList({
    where: { users: { some: { user_id: { equals: userData?.id } } } },
  });
  console.log('import history', importHistoryInfiniteData);

  return (
    <Box
      paddingY={{ base: '4' }}
      paddingX={{ base: '0', md: '4' }}
      color="gray.700"
      width="100%"
      maxWidth="100vw"
      overflowX="auto"
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'md' }}
      marginBottom={10}
    >
      {importHistoryData && importHistoryData.length > 0 ? (
        <Stack spacing="5">
          <Heading as="h3" fontWeight="600" fontSize="md" marginY={4}>
            Import History
          </Heading>
        </Stack>
      ) : (
        <EmptyImports />
      )}
    </Box>
  );
};

export default ImportHistoryTable;
