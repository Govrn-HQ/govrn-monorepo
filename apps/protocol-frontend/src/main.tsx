import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
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
        '0x1': networks['0x1'].rpc,
        '0x4': networks['0x4'].rpc,
        '0x64': networks['0x64'].rpc,
        '0x38': networks['0x38'].rpc,
        '0x89': networks['0x89'].rpc,
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
    <WalletProvider
      web3modalOptions={web3modalOptions}
      networks={networks}
      // Optional if you want to auto switch the network
      defaultChainId={'0x1'}
      // Optional but useful to handle events.
      handleModalEvents={(eventName, error) => {
        if (error) {
          console.error(error.message);
        }
        console.log(eventName);
      }}
    >
      <UserContextProvider>
        <OverlayContextProvider>
          <ChakraProvider theme={GovrnTheme}>
            <Routes />
          </ChakraProvider>
        </OverlayContextProvider>
      </UserContextProvider>
    </WalletProvider>
  </StrictMode>,
  document.getElementById('root')
);
