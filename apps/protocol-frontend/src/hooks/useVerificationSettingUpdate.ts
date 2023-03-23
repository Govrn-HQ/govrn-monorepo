import { GovrnProtocol, UserUpdateCustomInput } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useVerificationSettingUpdate = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (updateValues: {
      id: number | null | undefined;
      daoId: number;
      numberOfAttestations: number | null;
    }) => {
      console.log('update values', updateValues);
      const resp = await govrn.guild.verification_setting.update(
        {
          num_of_attestations: {
            set: updateValues.numberOfAttestations,
          },
        },
        {
          id: updateValues.id,
        },
      );
      console.log('resp', resp);
      return resp;
    },
    {
      onSuccess: data => {
        console.log('data', data);
        // queryClient.invalidateQueries(['verificationSettings', data.id]);

        toast.success({
          title: 'Verification Settings Updated',
          description: 'Your verification settings have been updated.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Update Verification Settings',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useVerificationSettingUpdate;
