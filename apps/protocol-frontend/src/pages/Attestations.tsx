import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import SiteLayout from '../components/SiteLayout';
import ConnectWallet from '../components/ConnectWallet';
import AttestationsTableShell from '../components/AttestationsTableShell';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>Anything that governs you, you should be able to govern.</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to see Contributions{' '}
        <span role="img" aria-labelledby="eye emoji looking at Contributions">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const NotUserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center">
      <Text>Anything that governs you, you should be able to govern.</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome to Govrn! You'll need to create a Username to get started.
      </Text>
      <ConnectWallet />
    </Stack>
  );
};

const Attestations = () => {
  const { isConnected } = useWallet();
  const { userData } = useUser();
  return (
    <SiteLayout>
      {isConnected ? (
        <AttestationsTableShell />
      ) : (
        <Container
          paddingY={{ base: '4', md: '8' }}
          paddingX={{ base: '0', md: '8' }}
          color="gray.700"
          maxWidth="1200px"
        >
          <Box
            background="white"
            boxShadow="sm"
            borderRadius={{ base: 'none', md: 'lg' }}
          >
            {userData ? <UserView /> : <NotUserView />}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Attestations;
