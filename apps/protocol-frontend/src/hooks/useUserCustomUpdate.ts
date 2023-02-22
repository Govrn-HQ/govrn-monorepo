import { GovrnProtocol, UserUpdateCustomInput } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useUserCustomUpdate = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (props: UserUpdateCustomInput) => {
      const resp = await govrn.custom.updateUser({
        name: props.name || '',
        id: props?.id,
      });
      return resp;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userGet']);
        queryClient.invalidateQueries(['userByAddressGet']);
        toast.success({
          title: 'User Profile Updated',
          description: 'Your profile has been updated.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Update Profile',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useUserCustomUpdate;
