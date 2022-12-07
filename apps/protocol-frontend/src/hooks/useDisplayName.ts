import { useUser } from './../contexts/UserContext';
import { displayAddress } from '../utils/web3';

const useDisplayName = () => {
  const { userEnsName, userData, userDataByAddress, userAddress } = useUser();

  const displayName =
    userEnsName ||
    userData?.name ||
    userData?.display_name ||
    userDataByAddress?.name ||
    userDataByAddress?.display_name ||
    displayAddress(userAddress);
  console.log('displayName hook', displayName);
  return { displayName };
};

export default useDisplayName;
