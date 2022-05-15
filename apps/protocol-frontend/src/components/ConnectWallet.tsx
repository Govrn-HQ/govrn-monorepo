import { formatAddress, useWallet } from '@raidguild/quiver';
import { Button, Text } from '@chakra-ui/react';
import { FiKey } from 'react-icons/fi';

const ConnectWallet = () => {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet();

  return (
    <>
      {!isConnected && (
        <Button
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          width="100%"
          leftIcon={<FiKey />}
          disabled={isConnecting}
          onClick={() => !isConnected && connectWallet()}
        >
          {isConnecting
            ? 'Connecting...'
            : isConnected
            ? 'Connected'
            : 'Connect Wallet'}
        </Button>
      )}
      {isConnected && (
        <>
          <Text display="inline" fontSize="sm">
            {formatAddress(address)}
          </Text>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </>
      )}
    </>
  );
};

export default ConnectWallet;
