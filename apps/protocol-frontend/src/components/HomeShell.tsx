import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@raidguild/quiver';
import { Flex, Button, Text } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import PageHeading from './PageHeading';
import CreateUserForm from './CreateUserForm';

import { useUser } from '../contexts/UserContext';

const HomeShell = () => {
  const { isConnected } = useWallet();
  const [createProfileSteps, setCreateProfileSteps] = useState<number | null>(
    null
  );

  const { userDataByAddress } = useUser();

  useEffect(() => {
    if (userDataByAddress) {
      setCreateProfileSteps(3);
    }
    if (!userDataByAddress) {
      setCreateProfileSteps(1);
    }
  }, [userDataByAddress]);

  const NewUserFlow = () => {
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
          <Flex direction="column">
            <Text color="gray.800" paddingBottom={8}>
              Welcome back{' '}
              <Text
                as="span"
                fontWeight="bolder"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                {userDataByAddress[0]?.name}
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
              >
                My Contributions
              </Button>
            </Link>
          </Flex>
        )}
      </Flex>
    );
  };

  return (
    <Flex
      direction="column"
      overflowX="hidden"
      margin="0 auto"
      minHeight="100vh"
      minWidth="100vw"
      bgGradient="linear(to-r, white 0%, brand.primary.100 50%, brand.primary.200 100%)"
    >
      <Flex
        direction="column"
        align="center"
        justify={['flex-start', 'flex-start', 'center', 'center']}
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
          Anything that governs you, you should be able to govern.
        </Text>
        {isConnected ? (
          <NewUserFlow />
        ) : (
          <>
            <Text color="gray.800" paddingBottom={8}>
              To get started, connect your wallet.
            </Text>
            <ConnectWallet />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default HomeShell;
