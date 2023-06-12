import { Box, Container, Stack, Text } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import React, { useCallback, useEffect } from 'react';
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
            You'll need to connect your wallet to get started with Govrn. If
            you're a new user we'll create an account for you with your address.
          </Text>
          <Text>
            You’ll be able to join a DAO, attest to other people’s
            contributions, and create contributions of your own.
          </Text>
          <Text>
            After connecting you should be redirected to whatever page you’re
            looking for.
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
    await createUser({
      newUser: {
        username: address ?? '',
        address: address,
      },
      showToast: true,
    });
  }, [address, createUser, isConnected, isAuthenticated, userDataByAddress]);

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

  // useEffect(() => {
  //   if (
  //     isConnected &&
  //     isAuthenticated &&
  //     userDataByAddress === undefined &&
  //     isUserLoading === false
  //   ) {
  //     console.log('userDataByAddress', userDataByAddress);
  //     createNewUser();
  //     console.log('new user being created');
  //   }
  // }, [
  //   isConnected,
  //   isAuthenticated,
  //   userDataByAddress,
  //   isUserLoading,
  //   createNewUser,
  //   address,
  // ]);

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
