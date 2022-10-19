import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { useContributionList } from '../hooks/useContributionList';
import SiteLayout from '../components/SiteLayout';
import NewUserView from '../components/NewUserView';
import ErrorView from '../components/ErrorView';
import { GOVRN_MOTTO } from '../utils/constants';
import DaoDashboardShell from '../components/DaoDashboardShell';

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

const DaoDashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData, userDaos } = useUser();
  const { guildId } = useParams();
  const { data: userContributions } = useContributionList({
    where: {
      user_id: { equals: userData?.id },
    },
  });

  if (userContributions === undefined) {
    return (
      <ErrorView errorMessage="There may have been an issue loading your Contributions. Please try again." />
    );
  }

  const currentDao = userDaos?.find(
    dao => dao.guild_id === parseInt(guildId ? guildId : ''),
  );

  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
        <DaoDashboardShell
          user={userData}
          daoName={currentDao?.guild.name ?? ''}
        />
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

export default DaoDashboard;
