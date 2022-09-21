import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Routes from './Routes';
import { OverlayContextProvider } from './contexts/OverlayContext';
import { ContributionsContextProvider } from './contexts/ContributionContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { wagmiClient, chains } from './utils/web3';
import '@rainbow-me/rainbowkit/styles.css';
import { UserContextProvider } from './contexts/UserContext';

const queryClient = new QueryClient({});

const App = () => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <AuthContextProvider>
        <UserContextProvider>
          <ContributionsContextProvider>
            <QueryClientProvider client={queryClient}>
              <Routes />
            </QueryClientProvider>
          </ContributionsContextProvider>
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
