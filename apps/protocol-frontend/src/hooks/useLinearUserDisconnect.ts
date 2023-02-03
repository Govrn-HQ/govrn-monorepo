import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

type LinearUserDisconnect = {
  linearUserId: number;
  userId: number;
  username: string;
};

export const useLinearUserDisconnect = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (props: LinearUserDisconnect) => {
      const resp = await govrn.custom.updateUser({
        name: props.username,
        id: props.userId,
        disconnectLinearId: props.linearUserId,
      });

      return resp;
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
