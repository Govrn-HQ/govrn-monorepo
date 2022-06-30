import { ChainName } from './definitions';

type ChainLabel =
  | 'Mainnet'
  | 'Rinkeby'
  | 'Gnosis Chain'
  | 'Polygon'
  | 'Binance Smart Chain'
  | 'Optimism'
  | 'Localhost'
  | 'Goerli';

type Network = {
  chainId: string;
  chainNumber: number;
  name: ChainLabel;
  symbol: string;
  explorer: string;
  rpc: string;
  govrnContract: string;
};

export const networks: { [key: string]: Network } = {
  '0x4': {
    chainId: '0x4',
    chainNumber: 4,
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io',
    rpc: 'https://eth-rinkeby.alchemyapi.io/v2/n0NXRSZ9olpkJUPDLBC00Es75jaqysyT',
    govrnContract: '0xC93fD1922592f202DEa7B44381Bb71fb491c8f49',
  },
  '0x5': {
    chainId: '0x5',
    chainNumber: 5,
    name: 'Goerli',
    symbol: 'ETH',
    explorer: 'https://goerli.etherscan.io',
    rpc: 'https://goerli.infura.io/v3/a8e70ebbf06e4ab8b7f020e3abe204ec',
    govrnContract: '0x709f84918fc0E2F96F4F67813377e7b27aCB63ee',
  },
  //'0x64': {
  //  chainId: '0x64',
  //  chainNumber: 100,
  //  name: 'Gnosis Chain',
  //  symbol: 'xDAI',
  //  explorer: 'https://blockscout.com/xdai/mainnet',
  //  rpc: 'https://rpc.xdaichain.com/',
  //  govrnContract: '',
  //},
  '0x539': {
    chainId: '0x539',
    chainNumber: 31337,
    name: 'Localhost',
    symbol: 'ETH',
    explorer: 'http://localhost:1234',
    rpc: 'http://localhost:8545',
    govrnContract: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
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
