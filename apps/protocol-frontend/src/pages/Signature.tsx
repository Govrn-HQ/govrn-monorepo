import { Box } from '@chakra-ui/react';
import SignatureLayout from '../components/SignatureLayout';

const Signature = () => {
  return (
    <Box as="section" height="100vh" bg="gray.50" overflowY="auto">
      <SignatureLayout />
    </Box>
  );
};

export default Signature;
