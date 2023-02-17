import { Box } from '@chakra-ui/react';
import DiscordSignatureLayout from '../components/DiscordSignatureLayout';

const DiscordSignature = () => {
  return (
    <Box as="section" height="100vh" bg="gray.50" overflowY="auto">
      <DiscordSignatureLayout />
    </Box>
  );
};

export default DiscordSignature;
