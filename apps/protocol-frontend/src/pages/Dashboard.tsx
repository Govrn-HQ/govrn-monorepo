import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { UIContribution } from '@govrn/ui-types';
import { useContributions } from '../contexts/ContributionContext';
import SiteLayout from '../components/SiteLayout';
import DashboardShell from '../components/DashboardShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Add a Contribution to view your Dashboard
      </Text>
    </Stack>
  );
};

const Dashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData } = useUser();
  const { userContributions } = useContributions();

  if (userContributions === undefined) {
    return (
      <SiteLayout>
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
            <Stack spacing="4" justify="center" align="center" minHeight="50vh">
              <Text>{GOVRN_MOTTO}</Text>
              <Text fontSize="lg" fontWeight="medium">
                There may have been an issue loading your Contributions. Please
                try again.
              </Text>
            </Stack>
          </Box>
        </Container>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      {isConnected &&
      isAuthenticated &&
      userContributions !== undefined &&
      userContributions?.length ? (
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
            {isConnected && isAuthenticated && userData ? (
              <UserView />
            ) : (
              <NewUserView />
            )}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Dashboard;
