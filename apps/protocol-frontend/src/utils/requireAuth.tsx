import { Box, Container, Stack, Text } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import React from 'react';
import { useAccount } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import { GovrnCta } from '@govrn/protocol-ui';

type RequireAuthProps = {
  children: React.ReactNode;
};

const NonAuthenticatedView = () => {
  return (
    <GovrnCta
      heading={'Welcome to Govrn'}
      emoji={'🫡'}
      copy={
        <Stack>
          <Text fontSize="lg" fontWeight="medium" align="center" mx={32} mb={4}>
            {' '}
            You'll need to connect your wallet to get started with Govrn. After
            connecting you should be redirected to whatever page you’re looking
            for.{' '}
          </Text>
          <Text fontSize="lg" fontWeight="medium" align="center" mx={32}>
            You’ll be able to Join a DAO, attest to other people’s
            contributions, and create contributions of your own.
          </Text>
        </Stack>
      }
      children={<ConnectWallet variant="primary" />}
    />
  );
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  // If the user is connected and authenticated, render the children.
  if (isConnected && isAuthenticated) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return (
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
        <NonAuthenticatedView />
      </Box>
    </Container>
  );
};
