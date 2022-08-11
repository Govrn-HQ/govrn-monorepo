import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import DashboardShell from '../components/DashboardShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to view your Dashboard
        <span role="img" aria-labelledby="eye emoji looking at Dashboard">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const { isConnected } = useWallet();
  const { userData } = useUser();

  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
        <DashboardShell user={userData} />
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
            {isConnected && userData ? <UserView /> : <NewUserView />}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Dashboard;
