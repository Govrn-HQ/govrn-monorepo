import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import ContributionsTableShell from '../components/ContributionsTableShell';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to see your Contribution Details{' '}
        <span role="img" aria-labelledby="eye emoji looking at Contributions">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const ContributionDetails = () => {
  const { isConnected } = useWallet();
  const { userData } = useUser();
  const { isAuthenticated } = useAuth();

  return (
    <SiteLayout>
      {isConnected && isAuthenticated ? (
        <Text color="black">Details here</Text>
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

export default ContributionDetails;
