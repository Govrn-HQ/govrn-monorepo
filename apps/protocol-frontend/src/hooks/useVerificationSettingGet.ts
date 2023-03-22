import { GovrnProtocol } from '@govrn/protocol-client';
import { useQuery } from '@tanstack/react-query';
import { PROTOCOL_URL } from '../utils/constants';

export const useVerificationSettingGet = (
  { ...args },
  refetchOnWindowFocus?: boolean,
) => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['verificationSettingGet', args],
    queryFn: async () => {
      if (!args.id) {
        return null;
      }
      return await govrn.guild.verification_setting.get({ ...args });
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};

export default useVerificationSettingGet;
