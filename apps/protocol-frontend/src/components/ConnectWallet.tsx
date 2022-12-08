import { ConnectButton } from '@rainbow-me/rainbowkit';
import { chain, useAccount, useDisconnect, useEnsName } from 'wagmi';
import {
  Button,
  Text,
  Menu,
  MenuButton,
  Image,
  MenuList,
  MenuItem,
  Icon,
  HStack,
  Box,
  Flex,
} from '@chakra-ui/react';
import { FiKey, FiChevronDown, FiXCircle } from 'react-icons/fi';
import { displayAddress } from '../utils/web3';

interface ConnectWalletProps {
  showNetwork?: boolean;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ showNetwork }) => {
  const { address, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();

  const { data: userEnsName } = useEnsName({
    address: address,
    chainId: chain.mainnet.id,
    enabled: !!address,
  });

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button
                    variant="tertiary"
                    leftIcon={<FiKey />}
                    disabled={isConnecting}
                    onClick={openConnectModal}
                    data-cy="connect-wallet"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    variant="tertiary"
                    leftIcon={<FiKey />}
                    onClick={openChainModal}
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <Flex gap={2}>
                  {showNetwork && chain.hasIcon && chain.iconUrl && (
                    <Button
                      onClick={openChainModal}
                      display="flex"
                      alignItems="center"
                      bg={chain.iconBackground}
                      p={0}
                      backgroundColor="gray.100"
                      marginLeft={4}
                    >
                      <Image
                        alt={chain.name ?? 'Chain icon'}
                        src={chain.iconUrl}
                        width={25}
                        height={25}
                      />
                    </Button>
                  )}

                  <Menu
                    offset={[0, 4]}
                    placement="bottom-end"
                    autoSelect={false}
                  >
                    <MenuButton
                      as={Button}
                      rightIcon={
                        <Icon as={FiChevronDown} color="brand.purple" />
                      }
                      color="gray.900"
                      backgroundColor="brand.secondary.100"
                      transition="all 100ms ease-in-out"
                      _hover={{ bgColor: 'brand.secondary.200' }}
                      width="100%"
                      paddingRight={2}
                    >
                      <Text color="gray.800" fontSize="sm">
                        {userEnsName ?? displayAddress(address)}
                      </Text>
                    </MenuButton>
                    <MenuList backgroundColor="gray.800" minWidth="none">
                      <MenuItem
                        onClick={() => openAccountModal()}
                        _hover={{ backgroundColor: 'gray.600' }}
                      >
                        <HStack>
                          <Icon as={FiKey} color="white" />
                          <Box color="white">Wallet</Box>
                        </HStack>
                      </MenuItem>
                      <MenuItem
                        onClick={() => disconnect()}
                        _hover={{ backgroundColor: 'gray.600' }}
                      >
                        <HStack spacing={2}>
                          <Icon as={FiXCircle} color="red.300" />
                          <Box color="red.300">Sign Out</Box>
                        </HStack>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
