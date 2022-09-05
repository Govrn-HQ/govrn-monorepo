import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import {
  Flex,
  Link as ChakraLink,
  Button,
  Text,
  VisuallyHidden,
  Heading,
} from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import PageHeading from './PageHeading';
import CreateUserForm from './CreateUserForm';

import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import CreateWaitlistUserForm from './CreateWaitlistUserForm';
import { GOVRN_MOTTO } from '../utils/constants';
import { FaDiscord } from 'react-icons/all';
import { GovrnSpinner } from '@govrn/protocol-ui';

const HomeShell = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const [createProfileSteps, setCreateProfileSteps] = useState<number | null>(
    null,
  );

  const { userDataByAddress, userData, isUserLoading } = useUser();

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
            <Text color="gray.800" paddingBottom={8}>
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
          <>
            {userDataByAddress?.active === true ? (
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
            ) : (
              <CreateWaitlistUserForm />
            )}
          </>
        )}
        {createProfileSteps === 3 && (
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            {userDataByAddress?.active === true ? (
              <>
                <Text color="gray.800" paddingBottom={8}>
                  Welcome back{' '}
                  <Text
                    as="span"
                    fontWeight="bolder"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    {userData?.name || userDataByAddress?.name}
                  </Text>
                  . Click below to view your contributions.
                </Text>
                <Link to="/contributions">
                  <Button
                    color="brand.primary.600"
                    backgroundColor="brand.primary.50"
                    transition="all 100ms ease-in-out"
                    _hover={{ bgColor: 'white' }}
                    marginTop={4}
                    width="100%"
                    data-cy="myContributions-btn"
                  >
                    My Contributions
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Text color="gray.800" paddingBottom={8}>
                  Welcome back{' '}
                  <Text
                    as="span"
                    fontWeight="bolder"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                  >
                    {userDataByAddress?.name}
                  </Text>
                  .{' '}
                  <strong>
                    We'll reach out as soon as we open up more spots!
                  </strong>
                </Text>

                <ChakraLink href="https://discord.gg/3e36ZHU5aG" isExternal>
                  <Button
                    leftIcon={<FaDiscord />}
                    color="brand.primary.600"
                    backgroundColor="brand.primary.50"
                    transition="all 100ms ease-in-out"
                    _hover={{ bgColor: 'white' }}
                    marginTop={4}
                    width="100%"
                  >
                    Join Our Discord
                  </Button>
                </ChakraLink>
              </>
            )}
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
      bgGradient="linear(to-r, white 0%, brand.primary.100 50%, brand.primary.200 100%)"
    >
      <VisuallyHidden>
        <Heading as="h1">Govrn</Heading>
      </VisuallyHidden>
      <Flex
        direction="column"
        alignItems={{ base: 'flex-start', lg: 'center' }}
        justifyContent={{ base: 'flex-start', lg: 'center' }}
        paddingY={{ base: '8', lg: '0' }}
        flex="1"
        minHeight={['100vh', '100vh', '0', '0']}
      >
        <PageHeading>
          Welcome to Govrn{' '}
          <span role="img" aria-labelledby="welcome">
            👋
          </span>
        </PageHeading>
        <Text color="gray.800" paddingBottom={4}>
          {GOVRN_MOTTO}
        </Text>
        {isConnected && isAuthenticated ? (
          <NewUserFlow />
        ) : (
          <>
            <Text color="gray.800" paddingBottom={8}>
              To get started, connect your wallet to Gnosis Chain.
            </Text>
            <ConnectWallet />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default HomeShell;
