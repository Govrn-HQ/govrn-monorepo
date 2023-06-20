import { useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { Flex, Button, Text, VisuallyHidden, Heading } from '@chakra-ui/react';
import ConnectWallet from './ConnectWallet';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { GovrnSpinner } from '@govrn/protocol-ui';
import GovrnTextLogo from './GovrnTextLogo';
import useDisplayName from '../hooks/useDisplayName';
import useUserCreate from '../hooks/useUserCreate';

const HomeNew = () => {
  const { isConnected, address } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userDataByAddress, isUserLoading } = useUser();
  const { displayName } = useDisplayName();
  const { mutateAsync: createUser } = useUserCreate();
  // const navigate = useNavigate();

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

  const connectedExistingUser =
    isConnected && isAuthenticated && !isUserLoading && userDataByAddress;

  const connectedNoUser = !isUserLoading && userDataByAddress === undefined;

  // useEffect(() => {
  //   connectedExistingUser && navigate('/dashboard');
  // }, [connectedExistingUser, navigate]);

  let homeComponent;
  if (connectedNoUser) {
    homeComponent = (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize={{ base: 'lg', lg: 'xl' }}
        fontWeight="400"
        maxW={{ base: '60%', lg: '70%' }}
      >
        <Text marginBottom={{ base: 10, lg: 16 }} textAlign="center">
          To get started, connect your wallet to Gnosis Chain.
        </Text>
      </Flex>
    );
  }

  if (connectedExistingUser) {
    homeComponent = (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
        <Text>
          Welcome{' '}
          <Text as="span" fontWeight="bolder">
            {displayName}
          </Text>
          .
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      alignItems={{ base: 'center' }}
      justifyContent={{ base: 'center' }}
      overflowX="hidden"
      margin="0 auto"
      paddingX={{ base: 8, lg: 0 }}
      minHeight="100vh"
      minWidth="100vw"
      bgGradient="linear-gradient(49deg, rgba(223,31,151,1) 0%, rgba(81,0,228,1) 100%)"
    >
      <Flex
        direction="column"
        alignItems={{ base: 'center' }}
        justifyContent={{ base: 'center' }}
        paddingY={{ base: '8', lg: '0' }}
        flex="1"
        minHeight={['100vh', '100vh', '0', '0']}
        gap={{ base: 4, lg: 16 }}
      >
        <VisuallyHidden>
          <Heading as="h1">Govrn</Heading>
        </VisuallyHidden>
        <GovrnTextLogo />
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontSize={{ base: 'lg', lg: '2xl' }}
          fontWeight="400"
          marginBottom={{ base: 40, lg: 0 }}
          gap={1}
          maxW={{ base: '70%', lg: '60%' }}
        >
          <Text textAlign="center">
            Track and record your DAO Contributions
          </Text>
          <span role="img" aria-labelledby="Govrn motto handshake emoji">
            🤝
          </span>
        </Flex>
        {homeComponent}
        {isUserLoading ? <GovrnSpinner /> : null}
        {connectedExistingUser ? (
          <Link to="/dashboard">
            <Button variant="tertiary" width="100%" data-cy="myDashboards-btn">
              My Dashboard
            </Button>
          </Link>
        ) : (
          <ConnectWallet />
        )}
      </Flex>
    </Flex>
  );
};

export default HomeNew;
