import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

interface DaoUserUpdateProps {
  userId: number;
  guildId: number;
  favorite?: boolean;
  membershipStatusId?: number;
  memberId?: number;
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
      memberId,
    }: DaoUserUpdateProps) => {
      const mutationData = await govrn.guild.user.update({
        userId: userId,
        guildId: guildId,
        favorite: favorite,
        membershipStatusId: membershipStatusId,
        memberId: memberId,
      });
      return { mutationData };
    },
    {
      onSuccess: (_, { favorite }) => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          toast.success({
            id: toastSuccessId,
            title:
              favorite !== undefined
                ? 'Favorite Status Updated'
                : 'DAO Updated',
            description:
              favorite !== undefined
                ? 'Favorite status has been updated.'
                : 'DAO has been updated.',
          });
        }
      },
      onError: (error, { favorite }) => {
        const toastErrorId = 'dao-user-create-error';

        if (!toast.isActive(toastErrorId)) {
          toast.error({
            id: toastErrorId,
            title:
              favorite !== undefined
                ? 'Favorite status update failed.'
                : 'DAO update failed.',
            description: `Something went wrong. Please try again: ${error}`,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
