import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { Flex, Button, Text, VisuallyHidden, Heading } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import CreateUserForm from './CreateUserForm';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { GovrnSpinner } from '@govrn/protocol-ui';
import GovrnTextLogo from './GovrnTextLogo';
import useDisplayName from '../hooks/useDisplayName';

const HomeShell = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const [createProfileSteps, setCreateProfileSteps] = useState<number | null>(
    null,
  );

  const { userDataByAddress, isUserLoading } = useUser();
  const { displayName } = useDisplayName();

  console.log('display name', displayName);

  useEffect(() => {
    if (userDataByAddress) {
      setCreateProfileSteps(3);
    }
    if (!userDataByAddress) {
      setCreateProfileSteps(1);
    }
  }, [userDataByAddress]);

  const NewUserFlow = () => {
    if (isUserLoading) {
      return <GovrnSpinner />;
    }

    return (
      <Flex direction="column" alignItems="center" justifyContent="center">
        {createProfileSteps === 1 && (
          <>
            <Text color="white" paddingBottom={8}>
              Welcome to Govrn! Let's start by creating your profile. You can
              change these details at any time on your Profile.
            </Text>
            <Button
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'white' }}
              marginTop={4}
              onClick={() => setCreateProfileSteps(2)}
              data-cy="create-my-profile-btn"
            >
              Create My Profile
            </Button>
          </>
        )}
        {createProfileSteps === 2 && (
          <Flex
            justify="space-between"
            direction="column"
            wrap="wrap"
            width="100%"
            padding={8}
            background="white"
            boxShadow="sm"
            borderRadius="lg"
            marginBottom={4}
          >
            <CreateUserForm />
          </Flex>
        )}
        {createProfileSteps === 3 && (
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
          >
            <>
              <Text paddingBottom={8}>
                Welcome back,{' '}
                <Text as="span" fontWeight="bolder">
                  {displayName}
                  {/* {userData?.name ||
                    userDataByAddress?.name ||
                    displayAddress(userData?.address)} */}
                </Text>
                .
              </Text>
              <Link to="/dashboard">
                <Button
                  color="brand.purple"
                  backgroundColor="gray.300"
                  transition="all 100ms ease-in-out"
                  _hover={{ backgroundColor: 'white' }}
                  marginTop={4}
                  width="100%"
                  data-cy="myDashboards-btn"
                >
                  My Dashboard
                </Button>
              </Link>
            </>
          </Flex>
        )}
      </Flex>
    );
  };

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
      bgGradient="linear(to-r, #DF1F97 0%, #5100E4 100%)"
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
        >
          <Text>Track and record your DAO</Text>
          <Text>Contributions</Text>
          <span role="img" aria-labelledby="Govrn motto handshake emoji">
            🤝
          </span>
        </Flex>
        {isConnected && isAuthenticated ? (
          <NewUserFlow />
        ) : (
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight="400"
          >
            <Text>To get started, connect</Text>
            <Text marginBottom={{ base: 10, lg: 16 }}>
              your wallet to Gnosis Chain.
            </Text>
            <ConnectWallet />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default HomeShell;
