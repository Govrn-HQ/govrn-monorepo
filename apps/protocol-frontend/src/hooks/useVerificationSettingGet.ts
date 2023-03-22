import { GovrnProtocol } from '@govrn/protocol-client';
import { useQuery } from '@tanstack/react-query';
import { PROTOCOL_URL } from '../utils/constants';

export const useVerificationSettingGet = ({
  id,
  refetchOnWindowFocus,
}: {
  id: number;
  refetchOnWindowFocus?: boolean;
}) => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const { isLoading, isFetching, isError, error, data } = useQuery({
    queryKey: ['verificationSettingGet', id],
    queryFn: async () => {
      if (!id) {
        return null;
      }
      await govrn.guild.verification_setting.get({ id });
    },
    refetchOnWindowFocus,
  });
  return { isLoading, isError, isFetching, error, data };
};

export default useVerificationSettingGet;
