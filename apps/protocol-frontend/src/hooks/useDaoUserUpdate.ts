import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';
import { LEFT_MEMBERSHIP_NAME } from '../utils/constants';

interface DaoUserUpdateProps {
  userId: number;
  guildId: number;
  favorite?: boolean;
  membershipStatusId?: number;
  memberId?: number;
  membershipStatus?: string;
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
      membershipStatus,
    }: DaoUserUpdateProps) => {
      const mutationData = await govrn.guild.user.update({
        userId: userId,
        guildId: guildId,
        favorite: favorite,
        membershipStatusId: membershipStatusId,
        memberId: memberId,
        membershipStatus: membershipStatus,
      });
      return { mutationData };
    },
    {
      onSuccess: (_, { userId, favorite, membershipStatus }) => {
        queryClient.invalidateQueries(['userDaos', userId]);
        queryClient.invalidateQueries(['userGet', userId]);
        queryClient.invalidateQueries(['daoUsersList']);
        queryClient.invalidateQueries(['daoUsersInfiniteList']);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          if (membershipStatus === LEFT_MEMBERSHIP_NAME) {
            toast.success({
              id: toastSuccessId,
              title: 'Leaving DAO',
              description: 'You have left successfully.',
            });
            return;
          }
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
