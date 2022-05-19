import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@raidguild/quiver';
import { Flex, Button, Text } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import PageHeading from './PageHeading';
import { GovrnProtocol } from '@govrn/protocol-client';

// const protocolUrl = import.meta.env.PROTOCOL_URL; // TODO: troubleshoot why this isnt pulling from .env

const HomeShell = () => {
  const { isConnected, address } = useWallet();
  const govrn = new GovrnProtocol('http://localhost:4000'); // tried this and /graphql

  useEffect(() => {
    const getUserByAddress = async () => {
      // this triggers CORS error
      try {
        const userData = await govrn.user.list({
          where: { address: { equals: address } },
        });
        console.log('userdata', userData);
        return userData;
      } catch (error) {
        console.error(error);
      }
    };
    getUserByAddress();
  }, [address]);

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
          <Flex direction="row">
            <Link to="/contributions">
              <Button
                color="brand.primary.600"
                backgroundColor="brand.primary.50"
                transition="all 100ms ease-in-out"
                _hover={{ bgColor: 'white' }}
                marginTop={4}
                width="100%"
              >
                Get Started
              </Button>
            </Link>
          </Flex>
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
