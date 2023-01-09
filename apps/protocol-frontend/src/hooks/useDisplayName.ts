import { useUser } from './../contexts/UserContext';
import { useAccount } from 'wagmi';
import { displayAddress } from '../utils/web3';
import { useEnsNameEthers } from './useEnsNameEthers';

const useDisplayName = () => {
  const { userData, userAddress, userDataByAddress } = useUser();
  const { address } = useAccount();

  const { data: userEnsName, isLoading } = useEnsNameEthers(address);

  if (isLoading) {
    return { displayName: null };
  }

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
