import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

interface DaoUserUpdateProps {
  userId: number;
  guildId: number;
  favorite?: boolean;
  membershipStatusId?: number;
}

export const useDaoUserUpdate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({
      userId,
      guildId,
      favorite,
      membershipStatusId,
    }: DaoUserUpdateProps) => {
      console.log('userId', userId);
      console.log('guildId', guildId);
      console.log('favorite', favorite);
      console.log('membershipStatusId', membershipStatusId);
      const mutationData = await govrn.guild.user.update({
        userId: userId,
        guildId: guildId,
        favorite: favorite,
        membershipStatusId: membershipStatusId,
      });
      return { mutationData };
    },
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);
        console.log('variables', variables);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          toast.success({
            id: toastSuccessId,
            title: 'hi',
            description: 'hi',
          });
        }
      },
      onError: (error, variables) => {
        const toastErrorId = 'dao-user-create-error';
        console.log('error vars', variables);
        if (!toast.isActive(toastErrorId)) {
          toast.error({
            id: toastErrorId,
            title: 'hi',
            description: `Something went wrong. Please try again: ${error}`,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
