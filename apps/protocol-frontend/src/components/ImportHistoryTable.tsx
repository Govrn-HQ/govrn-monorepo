import { useImportHistory } from '../hooks/useImportHistory';
import { useUser } from '../contexts/UserContext';
import { Box, Text } from '@chakra-ui/react';

const ImportHistoryTable = () => {
  const { userData } = useUser();
  const {
    data: importHistoryData,
    isLoading,
    isError,
  } = useImportHistory({
    // where: { users: { some: { user_id: { equals: userData?.id } } } },
  });
  console.log('import history', importHistoryData);
  return <Box>Table</Box>;
};

export default ImportHistoryTable;
