import { GovrnProtocol, UserCreateCustomInput } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

interface CustomUserCreateProps {
  newUser: UserCreateCustomInput;
  showToast?: boolean;
}

export const useUserCustomUpdate = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({ newUser, showToast = false }: CustomUserCreateProps) => {
      const resp = await govrn.user.create({
        ...newUser,
      });

      return resp;
    },
    {
      onSuccess: (_, { showToast }) => {
        queryClient.invalidateQueries(['userGet']);
        queryClient.invalidateQueries(['userByAddressGet']);

        if (showToast === true) {
          toast.success({
            title: 'Success!',
            description: `Welcome to Govrn.`,
          });
        }
      },
      onError: error => {
        toast.error({
          title: 'Something went wrong',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useUserCustomUpdate;
