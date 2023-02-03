import { GovrnProtocol, UserCreateCustomInput } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';
import { useAccount } from 'wagmi';

export const useUserCustomUpdate = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();
  const { address } = useAccount();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (props: UserCreateCustomInput) => {
      const resp = await govrn.user.create({
        ...props,
      });

      return resp;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userGet']);
        queryClient.invalidateQueries(['userByAddressGet']);
        toast.success({
          title: 'User Created',
          description: `Your username has been created with your address: ${address}. Let's report your first contribution!`,
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Create User',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useUserCustomUpdate;
