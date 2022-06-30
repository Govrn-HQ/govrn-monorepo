import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { WalletProvider } from '@raidguild/quiver';
import WalletConnectProvider from '@walletconnect/ethereum-provider';
import { IProviderOptions } from 'web3modal';
import { networks } from '../src/utils/networks';
import { ChakraProvider } from '@chakra-ui/react';
import { OverlayContextProvider } from './contexts/OverlayContext';
import { GovrnTheme } from '@govrn/protocol-ui';
import Routes from './Routes';
import { UserContextProvider } from './contexts/UserContext';

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
const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
};

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={GovrnTheme}>
      <WalletProvider
        web3modalOptions={web3modalOptions}
        networks={networks}
        // Optional but useful to handle events.
        handleModalEvents={(eventName, error) => {
          if (error) {
            console.error(error.message);
          }
          console.log(eventName);
        }}
      >
        <OverlayContextProvider>
          <UserContextProvider>
            <Routes />
          </UserContextProvider>
        </OverlayContextProvider>
      </WalletProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
