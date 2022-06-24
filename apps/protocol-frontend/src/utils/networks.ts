import { ChainName } from './definitions';

type ChainLabel =
  | 'Mainnet'
  | 'Rinkeby'
  | 'Gnosis Chain'
  | 'Polygon'
  | 'Binance Smart Chain'
  | 'Optimism'
  | 'Localhost';

type Network = {
  chainId: string;
  chainNumber: number;
  name: ChainLabel;
  symbol: string;
  explorer: string;
  rpc: string;
};

export const networks: { [key: string]: Network } = {
  '0x1': {
    chainId: '0x1',
    chainNumber: 1,
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    rpc: 'https://eth-mainnet.alchemyapi.io/v2/6idtzGwDtRbzil3s6QbYHr2Q_WBfn100',
  },
  '0x4': {
    chainId: '0x4',
    chainNumber: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io',
    rpc: 'https://eth-rinkeby.alchemyapi.io/v2/n0NXRSZ9olpkJUPDLBC00Es75jaqysyT',
  },
  '0x64': {
    chainId: '0x64',
    chainNumber: 100,
    name: 'Gnosis Chain',
    symbol: 'xDAI',
    explorer: 'https://blockscout.com/xdai/mainnet',
    rpc: 'https://rpc.xdaichain.com/',
  },
  '0xa': {
    chainId: '0xa',
    chainNumber: 100,
    name: 'Optimism',
    symbol: 'Eth',
    explorer: 'https://optimistic.etherscan.io/address/',
    rpc: 'https://mainnet.optimism.io',
  },
  '0x89': {
    chainId: '0x89',
    chainNumber: 137,
    name: 'Polygon',
    symbol: 'Matic',
    explorer: 'https://polygonscan.com/',
    rpc: 'https://polygon-rpc.com/',
  },
  '0x38': {
    chainId: '0x38',
    chainNumber: 56,
    name: 'Binance Smart Chain',
    symbol: 'BSC',
    explorer: 'https://bscscan.com/',
    rpc: 'https://bsc-dataseed.binance.org/',
  },
  '0x539': {
    chainId: '0x539',
    chainNumber: 31337,
    name: 'Localhost',
    symbol: 'ETH',
    explorer: 'http://localhost:1234',
    rpc: 'http://localhost:8545',
  },
};

export const chainOptions = [
  { label: 'Mainnet', value: '0x1' },
  { label: 'Rinkeby', value: '0x4' },
  { label: 'Gnosis Chain', value: '0x64' },
  { label: 'Localhost', value: '0x7a69' },
];

export const getChainIdByName = (chainName: ChainLabel) => {
  return chainOptions.filter((option) => {
    return option.value === chainName;
  });
};
