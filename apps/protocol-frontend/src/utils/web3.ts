import { Chain, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const gnosisChain: Chain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'gno',
  iconUrl:
    'https://styles.redditmedia.com/t5_yot2j/styles/communityIcon_nday7uia8wa81.png',
  iconBackground: '#ddd',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'xDAI',
  },
  rpcUrls: {
    default: 'https://api.avax.network/ext/bc/C/rpc',
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://snowtrace.io' },
  },
  testnet: false,
};

export const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli, gnosisChain],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const displayAddress = (address: string) =>
  address ? `${address.slice(0, 4)}...${address.slice(-4)}` : '0x';
