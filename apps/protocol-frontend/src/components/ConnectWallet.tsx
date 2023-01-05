import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
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
import { useEnsNameEthers } from '../hooks/useEnsNameEthers';
import { displayAddress } from '../utils/web3';

interface ConnectWalletProps {
  showNetwork?: boolean;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ showNetwork }) => {
  const { address, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();

  const { data: userEnsName, isLoading } = useEnsNameEthers(address);

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

              if (!mounted || isLoading) return null;

              return (
                <Flex gap={2}>
                  {showNetwork && chain.hasIcon && chain.iconUrl && (
                    <Button
                      display="flex"
                      onClick={openChainModal}
                      alignItems="center"
                      bg={chain.iconBackground}
                      p={0}
                      backgroundColor="brand.secondary.100"
                      _hover={{
                        backgroundColor: 'brand.secondary.200',
                      }}
                      _active={{
                        backgroundColor: 'brand.secondary.200',
                      }}
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
                        <Icon
                          as={FiChevronDown}
                          color="brand.purple"
                          size="md"
                        />
                      }
                      color="gray.900"
                      backgroundColor="brand.secondary.100"
                      transition="all 100ms ease-in-out"
                      _hover={{
                        bgColor: 'brand.secondary.200',
                      }}
                      _active={{
                        bgColor: 'brand.secondary.200',
                      }}
                      width="100%"
                      paddingRight={2}
                    >
                      <Text color="gray.800" fontSize="sm">
                        {userEnsName ?? displayAddress(address)}
                      </Text>
                    </MenuButton>

                    <MenuList
                      minWidth="none"
                      backgroundColor="brand.secondary.200"
                      paddingX={1}
                    >
                      <MenuItem
                        backgroundColor="transparent"
                        borderRadius="md"
                        onClick={() => openAccountModal()}
                        _hover={{ backgroundColor: 'brand.secondary.50' }}
                      >
                        <HStack>
                          <Icon as={FiKey} color="brand.purple" />
                          <Box color="brand.purple">Wallet</Box>
                        </HStack>
                      </MenuItem>
                      <MenuItem
                        backgroundColor="transparent"
                        borderRadius="md"
                        onClick={() => disconnect()}
                        _hover={{ backgroundColor: 'brand.secondary.50' }}
                      >
                        <HStack spacing={2}>
                          <Icon as={FiXCircle} color="brand.purple" />
                          <Box color="brand.purple">Sign Out</Box>
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
