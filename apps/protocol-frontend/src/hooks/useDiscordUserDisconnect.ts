import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

type DiscordUserDisconnect = {
  discordUserId: number;
  userId: number;
  username: string;
};

export const useDiscordUserDisconnect = () => {
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const queryClient = useQueryClient();
  const toast = useGovrnToast();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (props: DiscordUserDisconnect) => {
      const resp = await govrn.custom.updateUser({
        name: props.username,
        id: props.userId,
        disconnectDiscordId: props.discordUserId,
      });

      return resp;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userGet']);
        queryClient.invalidateQueries(['userByAddressGet']);
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
