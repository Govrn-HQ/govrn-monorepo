import { Box, Container, Stack, Text } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import { GOVRN_MOTTO } from './constants';
import React from 'react';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';

type RequireAuthProps = {
  children: React.ReactNode;
};

const NewUserView = () => {
  return (
    <Stack spacing="4" justify="center" align="center">
      <Text>{GOVRN_MOTTO}</Text>
      <Text fontSize="lg" fontWeight="medium">
        Welcome to Govrn! You'll need to create a Username to get started.
      </Text>
      <ConnectWallet />
    </Stack>
  );
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isConnected } = useAccount();
  const { userData } = useUser();
  const { isAuthenticated } = useAuth();
  console.log({ isConnected, isAuthenticated, userData });
  // If the user is connected and authenticated, render the children.
  if (isConnected && isAuthenticated) {
    console.log('User is connected and authenticated');
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
        <NewUserView />
      </Box>
    </Container>
  );
};
