import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from '@tanstack/react-query';
import Routes from './Routes';
import { OverlayContextProvider } from './contexts/OverlayContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { wagmiClient, chains } from './utils/web3';
import '@rainbow-me/rainbowkit/styles.css';
import { UserContextProvider } from './contexts/UserContext';
import { useGovrnToast } from '@govrn/protocol-ui';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const container = document.getElementById('root');
if (!container) {
  throw Error('Root cannot be found');
}
const root = createRoot(container);

const App = () => {
  // we can refactor this to use a standalone toast
  const toast = useGovrnToast();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: error => {
        toast.error({
          title: 'Something went wrong.',
          description: `Please try again: ${error}`,
        });
      },
    }),
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <AuthContextProvider>
          <UserContextProvider>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <Routes />
            </QueryClientProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

root.render(
  <StrictMode>
    <ChakraProvider theme={GovrnTheme}>
      <OverlayContextProvider>
        <App />
      </OverlayContextProvider>
    </ChakraProvider>
  </StrictMode>,
);
