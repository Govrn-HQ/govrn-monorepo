import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { WalletProvider, NetworkConfig } from '@raidguild/quiver';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { IProviderOptions } from 'web3modal';
import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';
import { supportedChains } from './utils/chains';
import Routes from './Routes';

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        '0x1': supportedChains['0x1'].rpc_url,
        '0x4': supportedChains['0x4'].rpc_url,
        '0x64': supportedChains['0x64'].rpc_url,
        '0x38': supportedChains['0x38'].rpc_url,
        '0x89': supportedChains['0x89'].rpc_url,
      },
    },
  },
};
const web3modalOptions = {
  cacheProvider: false,
  providerOptions,
  theme: 'dark',
};

const SUPPORTED_NETWORKS: NetworkConfig = {
  '0x1': {
    chainId: '0x1',
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    rpc: 'https://mainnet.infura.io/v3/<your infura project id>',
  },
  '0x4': {
    chainId: '0x4',
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io',
    rpc: 'https://rinkeby.infura.io/v3/<your infura project id>',
  },
  '0x539': {
    chainId: '0x539',
    name: 'Hardhat',
    symbol: 'ETH',
    explorer: 'http://localhost:1234',
    rpc: 'http://localhost:8545',
  },
  '0x89': {
    chainId: '0x89',
    name: 'Polygon',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
    rpc: 'https://polygon-rpc.com/',
  },
  '0x13881': {
    chainId: '0x13881',
    name: 'Mumbai Testnet',
    symbol: 'MATIC',
    explorer: 'https://mumbai.polygonscan.com',
    rpc: 'https://matic-mumbai.chainstacklabs.com',
  },
};

ReactDOM.render(
  <StrictMode>
    <WalletProvider
      web3modalOptions={web3modalOptions}
      networks={SUPPORTED_NETWORKS}
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
      <ChakraProvider theme={GovrnTheme}>
        <Routes />
      </ChakraProvider>
    </WalletProvider>
  </StrictMode>,
  document.getElementById('root')
);
