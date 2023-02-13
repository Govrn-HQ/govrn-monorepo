import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';
import { useUser } from '../contexts/UserContext';

export const useDiscordUserDisconnect = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const { userData } = useUser();
  const toast = useGovrnToast();
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async () => {
      if (userData?.id && userData?.name) {
        return await govrn.custom.updateUser({
          id: userData.id,
          name: userData.name,
          disconnectDiscordId: userData?.discord_users[0].id,
        });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userGet', userData?.id]);
        queryClient.invalidateQueries(['userByAddressGet', userData?.address]);
        toast.success({
          title: 'Disconnected Discord user.',
          description: 'Your Discord user has been disconnected.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Failed to disconnect Discord user.',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useDiscordUserDisconnect;
