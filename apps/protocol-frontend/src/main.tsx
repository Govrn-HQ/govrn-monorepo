import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';
import { WalletProvider } from '@raidguild/quiver';
import WalletConnectProvider from '@walletconnect/ethereum-provider';

import { IProviderOptions } from 'web3modal';
import { networks } from '../src/utils/networks';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import { OverlayContextProvider, useOverlay } from './contexts/OverlayContext';

import { GovrnTheme } from '@govrn/protocol-ui';
import Routes from './Routes';
import { UserContextProvider } from './contexts/UserContext';
import { AuthContextProvider } from './contexts/AuthContext';

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        '0x4': networks['0x4'].rpc,
        '0x5': networks['0x5'].rpc,
        '0x64': networks['0x64'].rpc,
        '0x539': networks['0x539'].rpc,
      },
    },
  },
};

const defaultChain = networks['0x64'].chainId; // we can move this and some others to a constants file

const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
};

const App = () => {
  const toast = useToast();
  return (
    <WalletProvider
      web3modalOptions={web3modalOptions}
      defaultChainId={defaultChain}
      networks={networks}
      handleModalEvents={(eventName, error) => {
        if (error) {
          toast({
            title: 'Unsupported Chain',
            description: `Please switch to a supported chain (Gnosis Chain). You can switch chains by clicking the "Switch network" button in MetaMask.`,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        }
        console.log(eventName);
      }}
    >
      <AuthContextProvider>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </AuthContextProvider>
    </WalletProvider>
  );
};

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={GovrnTheme}>
      <OverlayContextProvider>
        <App />
      </OverlayContextProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
