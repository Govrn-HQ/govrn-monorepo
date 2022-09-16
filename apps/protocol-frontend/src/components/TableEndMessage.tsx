import { Text } from '@chakra-ui/react';

const TableEndMessage = ({ message }: { message?: string }) => {
  return (
    <Text fontSize="sm" align={'center'} padding={3}>
      {message ?? 'Yay! You have seen it all.'}
    </Text>
  );
};

export default TableEndMessage;
