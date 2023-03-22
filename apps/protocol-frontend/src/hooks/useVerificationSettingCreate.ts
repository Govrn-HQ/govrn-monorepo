import { GovrnProtocol, UserUpdateCustomInput } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useVerificationSettingCreate = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (createValues: { daoId: number; numberOfAttestations: number }) => {
      const resp = await govrn.guild.verification_setting.create({
        guild: {
          connect: {
            id: createValues.daoId,
          },
        },
        num_of_attestations: createValues.numberOfAttestations,
      });

      return resp;
    },
    {
      onSuccess: data => {
        console.log('data', data);
        // queryClient.invalidateQueries(['verificationSettings', data.id]);

        toast.success({
          title: 'Verification Settings Created',
          description: 'Your verification settings have been created.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Create Verification Settings',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useVerificationSettingCreate;
