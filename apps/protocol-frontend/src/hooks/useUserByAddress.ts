import { GovrnProtocol } from '@govrn/protocol-client';
import { useQuery } from '@tanstack/react-query';
import { PROTOCOL_URL } from '../utils/constants';

export const useUserByAddress = ({ address }: { address: string }) => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ['userByAddressGet', address],
    async () => {
      if (!address) {
        return [];
      }
      const userDataByAddressResponse = await govrn.custom.listUserByAddress(
        address,
      );

      return userDataByAddressResponse;
    },
  );
  return { isLoading, isError, isFetching, error, data };
};

export default useUserByAddress;
