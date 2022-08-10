import React from 'react';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import SiteLayout from '../components/SiteLayout';
import ReportShell from '../components/ReportShell';
import { useAuth } from '../contexts/AuthContext';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';

const isUser = true;

const UserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center" minHeight="50vh">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome back! Connect your wallet to report a Contribution{' '}
        <span role="img" aria-labelledby="eye emoji looking at Contributions">
          👀
        </span>
      </Text>
    </Stack>
  );
};

const Report = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
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
            {isUser ? <UserView /> : <NewUserView />}
          </Box>
        </Container>
      )}
    </SiteLayout>
  );
};

export default Report;
