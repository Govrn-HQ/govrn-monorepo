import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useSignMessage } from 'wagmi';
import { Flex, Button, Text, VisuallyHidden, Heading } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import CreateUserForm from './CreateUserForm';
import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';
import { GovrnSpinner } from '@govrn/protocol-ui';
import GovrnTextLogo from './GovrnTextLogo';
import useDisplayName from '../hooks/useDisplayName';

const SignatureLayout = () => {
  const { isConnected, address } = useAccount();
  const { isAuthenticated } = useAuth();
  console.log('user account', isConnected ? address : 'not connected');

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
            <ConnectWallet />
            <Button
              variant="primary"
              onClick={signMessageHandler}
              disabled={!isConnected}
            >
              Sign Message
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignatureLayout;
