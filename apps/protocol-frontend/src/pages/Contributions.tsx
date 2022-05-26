import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import SiteLayout from '../components/SiteLayout';
import ConnectWallet from '../components/ConnectWallet';
import ContributionsTableShell from '../components/ContributionsTableShell';

const isUser = true;

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center">
      <Text>Anything that governs you, you should be able to govern.</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to see your Contributions{' '}
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

const Contributions = () => {
  const { isConnected } = useWallet();
  return (
    <SiteLayout>
      {isConnected ? (
        <ContributionsTableShell />
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

export default Contributions;
