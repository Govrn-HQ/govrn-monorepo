import { Chain, ChainList, ChainIdMapping } from './definitions';

export const supportedChains: ChainList = {
  '0x1': {
    name: 'Ethereum Mainnet',
    short_name: 'eth',
    chain: 'ETH',
    network: 'mainnet',
    network_id: 1,
    chain_id: '0x1',
    providers: ['walletconnect'],
    // , 'portis', 'fortmatic'
    rpc_url: `https://mainnet.infura.io/v3/${process.env.RPC_KEY}`,
    block_explorer: 'https://etherscan.io',
  },
  '0x4': {
    name: 'Ethereum Rinkeby',
    short_name: 'rin',
    chain: 'ETH',
    network: 'rinkeby',
    network_id: 4,
    chain_id: '0x4',
    providers: ['walletconnect'],
    // , 'portis', 'fortmatic'
    rpc_url: `https://rinkeby.infura.io/v3/${process.env.RPC_KEY}`,
    block_explorer: 'https://rinkeby.etherscan.io',
  },
  '0x2a': {
    name: 'Ethereum Kovan',
    short_name: 'kov',
    chain: 'ETH',
    network: 'kovan',
    network_id: 42,
    chain_id: '0x2a',
    providers: ['walletconnect'],
    // , 'portis', 'fortmatic'
    rpc_url: `https://kovan.infura.io/v3/${process.env.RPC_KEY}`,
    block_explorer: 'https://kovan.etherscan.io',
  },
  '0x64': {
    name: 'xDAI Chain',
    short_name: 'xdai',
    chain: 'xDAI',
    network: 'xdai',
    network_id: 100,
    chain_id: '0x64',
    providers: ['walletconnect'],
    // , 'portis',
    rpc_url: 'https://dai.poa.network',
    block_explorer: 'https://blockscout.com/poa/xdai',
  },
  '0x89': {
    name: 'Matic',
    short_name: 'matic',
    chain: 'MATIC',
    network: 'matic',
    network_id: 137,
    chain_id: '0x89',
    providers: ['walletconnect'],
    rpc_url: 'https://rpc-mainnet.maticvigil.com',
    block_explorer: 'https://explorer-mainnet.maticvigil.com',
  },
  '0x13881': {
    name: 'Mumbai Testnet',
    short_name: 'Mumbai',
    chain: 'MATIC',
    network: 'mumbai',
    network_id: 80001,
    chain_id: '0x13881',
    providers: ['walletconnect'],
    rpc_url: 'https://rpc-mumbai.maticvigil.com',
    block_explorer: 'https://mumbai-explorer.matic.today',
  },
};

export const chainByID = (chainID: string): Chain => supportedChains[chainID];
export const chainByNetworkId = (networkId: number): Chain => {
  const idMapping: ChainIdMapping = {
    1: supportedChains['0x1'],
    4: supportedChains['0x4'],
    42: supportedChains['0x2a'],
    74: supportedChains['0x4a'],
    100: supportedChains['0x64'],
    137: supportedChains['0x89'],
    80001: supportedChains['0x13881'],
  };

  return idMapping[networkId];
};
