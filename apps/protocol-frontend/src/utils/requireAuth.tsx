import React, { useCallback, useEffect } from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import useUserCreate from '../hooks/useUserCreate';
import { GovrnCta } from '@govrn/protocol-ui';

type RequireAuthProps = {
  children: React.ReactNode;
};

const NonAuthenticatedView = () => {
  return (
    <GovrnCta
      heading={'Welcome to Govrn'}
      emoji={'👋'}
      copy={
        <Stack fontSize="lg" fontWeight="regular" mx={{ base: 4, lg: 32 }}>
          <Text>
            Connect your wallet to get started! If you're a new user, we'll
            create an account for you and then you'll be redirected to the page
            you're looking for.
          </Text>
          <Text>
            You'll be able to join a DAO, attest to others' contributions, and
            create contributions of your own.
          </Text>
        </Stack>
      }
      children={<ConnectWallet variant="primary" />}
    />
  );
};

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { isConnected, address } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userDataByAddress, isUserLoading } = useUser();
  const { mutateAsync: createUser } = useUserCreate();

  const createNewUser = useCallback(async () => {
    if (!address || !isConnected || !isAuthenticated) {
      return;
    }
    if (isConnected && isAuthenticated && isUserLoading && userDataByAddress) {
      return;
    }
    await createUser({
      newUser: {
        username: address ?? '',
        address: address,
      },
      showToast: true,
    });
  }, [
    address,
    isConnected,
    isAuthenticated,
    isUserLoading,
    userDataByAddress,
    createUser,
  ]);

  // If the user is connected and authenticated, but not an active user, create a new user.
  useEffect(() => {
    if (
      isConnected &&
      isAuthenticated &&
      !isUserLoading &&
      userDataByAddress === undefined
    ) {
      createNewUser();
    }
  }, [
    createNewUser,
    isConnected,
    isAuthenticated,
    isUserLoading,
    userDataByAddress,
  ]);

  // If the user is connected and authenticated, render the children.
  if (
    isConnected &&
    isAuthenticated &&
    !isUserLoading &&
    userDataByAddress !== undefined
  ) {
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
