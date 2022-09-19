import { Text } from '@chakra-ui/react';

const TableEndMessage = ({ message }: { message?: string }) => {
  return (
    <Text fontSize="sm" align={'center'} padding={3}>
      {message ?? 'No more results'}
    </Text>
  );
};

export default TableEndMessage;
