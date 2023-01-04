import { ethers } from 'ethers';
import { ALCHEMY_KEY } from '../utils/constants';
import { useQuery } from '@tanstack/react-query';

export const useEnsNameEthers = (address: string | undefined) => {
  const ethersProvider = new ethers.providers.AlchemyProvider(
    'mainnet',
    ALCHEMY_KEY,
  );
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['userEnsNameEthers', address],
    async () => {
      if (!address) throw new Error('Address is required for ENS lookup.');
      const data = await ethersProvider.lookupAddress(address);
      return data;
    },
    { enabled: !!address },
  );
  return { isLoading, isError, isFetching, error, data };
};
