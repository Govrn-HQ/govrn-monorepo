import { formatAddress, useWallet } from '@raidguild/quiver';
import {
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  HStack,
  Box,
  useClipboard,
} from '@chakra-ui/react';
import { FiKey, FiChevronDown, FiCopy, FiXCircle } from 'react-icons/fi';
import { useUser } from '../contexts/UserContext';

const ConnectWallet = () => {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet();
  const { authenticateAddress } = useUser();
  const copyAddress = useClipboard(address as string);
  const connectAndVerify = async () => {
    await connectWallet();
    await authenticateAddress();
  };

  return (
    <>
      {!isConnected && (
        <Button
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{
            bgColor: 'brand.primary.100',
            borderWidth: '2px',
            borderColor: 'brand.primary.600',
          }}
          // width="100%"
          leftIcon={<FiKey />}
          disabled={isConnecting}
          onClick={() => !isConnected && connectAndVerify()}
        >
          {isConnecting
            ? 'Connecting...'
            : isConnected
            ? 'Connected'
            : 'Connect Wallet'}
        </Button>
      )}
      {isConnected && (
        <Menu offset={[0, 4]} placement="bottom-end">
          <MenuButton
            as={Button}
            rightIcon={<Icon as={FiChevronDown} color="brand.primary.600" />}
            color="brand.primary.600"
            backgroundColor="brand.primary.50"
            transition="all 100ms ease-in-out"
            _hover={{ bgColor: 'brand.primary.100' }}
            width="100%"
          >
            <Text color="gray.800" fontSize="sm">
              {formatAddress(address)}
            </Text>
          </MenuButton>
          <MenuList backgroundColor="gray.800" minWidth="none">
            <MenuItem onClick={copyAddress.onCopy}>
              <HStack spacing={2}>
                <Icon as={FiCopy} />
                <Box>{copyAddress.hasCopied ? 'Copied' : 'Copy Address'}</Box>
              </HStack>
            </MenuItem>
            <MenuItem onClick={() => disconnect()}>
              <HStack spacing={2}>
                <Icon as={FiXCircle} color="red.300" />
                <Box color="red.300">Sign Out</Box>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default ConnectWallet;
