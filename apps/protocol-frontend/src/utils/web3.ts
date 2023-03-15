import { Chain, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ALCHEMY_KEY } from './constants';

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
    default: 'https://rpc.gnosischain.com/',
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://blockscout.com/xdai/mainnet' },
  },
  testnet: false,
};

const buildEnv = import.meta.env.VITE_BUILD_ENV;

const defaultChains =
  buildEnv !== 'production'
    ? [gnosisChain, chain.goerli, chain.rinkeby, chain.localhost]
    : [gnosisChain];
export const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: ALCHEMY_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: 'Govrn',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const displayAddress = (address: string | undefined | null) =>
  address ? `${address.slice(0, 5)}...${address.slice(-5)}` : '0x';
