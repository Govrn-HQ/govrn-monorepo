import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';
import { useUser } from '../contexts/UserContext';

export const useLinearUserDisconnect = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const { userData } = useUser();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async () => {
      if (userData?.id || userData?.name) {
        return await govrn.custom.updateUser({
          name: userData.name || '',
          id: userData.id,
          disconnectLinearId: userData.linear_users[0].id,
        });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userGet']);
        queryClient.invalidateQueries(['userByAddressGet']);
        toast.success({
          title: 'Disconnected linear user',
          description: 'Your linear user has been disconnected',
        });
      },
      onError: error => {
        toast.error({
          title: 'Failed to disconnect linear user',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useLinearUserDisconnect;
