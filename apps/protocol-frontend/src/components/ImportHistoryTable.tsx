import { useImportHistoryInfiniteList } from '../hooks/useImportHistoryList';
import { useUser } from '../contexts/UserContext';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import EmptyImports from './EmptyImports';

const ImportHistoryTable = () => {
  const { userData } = useUser();
  const { data: importHistoryData } = useImportHistoryInfiniteList({
    where: { users: { some: { user_id: { equals: userData?.id } } } },
  });
  console.log('import history', importHistoryData);
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
      {importHistoryData && importHistoryData.pages.length > 0 ? (
        <Stack spacing="5">
          <Heading as="h3" fontWeight="600" fontSize="md" marginY={4}>
            Import History
          </Heading>
          {/* <RecentContributionsTable
            contributionsData={recentContributions.pages}
            nextPage={fetchNextPage}
            hasMoreItems={hasNextPage || false}
          /> */}
        </Stack>
      ) : (
        <EmptyImports />
      )}
    </Box>
  );
};

export default ImportHistoryTable;
