import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import SiteLayout from '../components/SiteLayout';
import ConnectWallet from '../components/ConnectWallet';
import ReportShell from '../components/ReportShell';
import { useUser } from '../contexts/UserContext';

const isUser = true;

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>Anything that governs you, you should be able to govern.</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to report a Contribution{' '}
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

const Report = () => {
  const { isConnected } = useWallet();
  const { isAuthenticated } = useUser();
  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
        <ReportShell />
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
            {isUser ? <UserView /> : <NotUserView />}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Report;
