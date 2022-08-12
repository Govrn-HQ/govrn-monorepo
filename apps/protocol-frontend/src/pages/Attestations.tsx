import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import AttestationsTableShell from '../components/AttestationsTableShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

// Force
const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to see Contributions{' '}
        <span role="img" aria-labelledby="eye emoji looking at Contributions">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const Attestations = () => {
  const { isConnected } = useAccount();
  const { userData } = useUser();
  const { isAuthenticated } = useAuth();
  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
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
            {userData ? <UserView /> : <NewUserView />}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Attestations;
