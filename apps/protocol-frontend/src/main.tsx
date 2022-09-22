import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';

import Routes from './Routes';
import { OverlayContextProvider } from './contexts/OverlayContext';
import { ContributionsContextProvider } from './contexts/ContributionContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { wagmiClient, chains } from './utils/web3';
import '@rainbow-me/rainbowkit/styles.css';
import { UserContextProvider } from './contexts/UserContext';

const App = () => {
  const toast = useToast();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.log('error', error);
        toast({
          title: 'Something went wrong.',
          description: `Please try again: ${error}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      },
    }),
  });
  return (
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
};

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
