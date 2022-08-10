import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';

import Routes from './Routes';
import { OverlayContextProvider } from './contexts/OverlayContext';
import { UserContextProvider } from './contexts/UserContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { wagmiClient, chains } from './utils/web3';

import '@rainbow-me/rainbowkit/styles.css';

const App = () => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <AuthContextProvider>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </AuthContextProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={GovrnTheme}>
      <OverlayContextProvider>
        <App />
      </OverlayContextProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
);
