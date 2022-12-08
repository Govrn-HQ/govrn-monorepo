import { useUser } from './../contexts/UserContext';
import { useEnsName, chain, useAccount } from 'wagmi';
import { displayAddress } from '../utils/web3';

const useDisplayName = () => {
  const { userData, userAddress, userDataByAddress } = useUser();
  const { address } = useAccount();

  const { data: userEnsName } = useEnsName({
    address: address,
    chainId: chain.mainnet.id,
    enabled: !!address,
  });

  const displayName =
    userData?.name ||
    userData?.display_name ||
    userDataByAddress?.name ||
    userDataByAddress?.display_name ||
    userEnsName ||
    displayAddress(userAddress);
  return { displayName };
};

export default useDisplayName;
