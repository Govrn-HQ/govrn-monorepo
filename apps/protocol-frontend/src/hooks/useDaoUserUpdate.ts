import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';
import { MembershipStatusesNames } from '../utils/constants';

interface DaoUserUpdateProps {
  userId: number;
  guildId: number;
  favorite?: boolean;
  membershipStatusId?: number;
  memberId?: number;
  membershipStatus?: string;
  rejoining?: boolean;
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
      rejoining = false,
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
      onSuccess: (data, { userId, favorite, membershipStatus, rejoining }) => {
        const { address } = data.mutationData.user;
        queryClient.invalidateQueries({ queryKey: ['userDaos'] });
        queryClient.invalidateQueries(['userGet', userId]);
        queryClient.invalidateQueries({ queryKey: ['daoUsersList'] });
        queryClient.invalidateQueries({ queryKey: ['daoUsersInfiniteList'] });
        queryClient.invalidateQueries(['userByAddressGet', address]); // to invalidate the dependent queries that have deeply nested args the contribution infinite lists

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          if (membershipStatus === MembershipStatusesNames.Left) {
            toast.success({
              id: toastSuccessId,
              title: 'Leaving DAO',
              description: 'You have successfully left the DAO.',
            });
            return;
          }
          if (rejoining === true) {
            toast.success({
              id: toastSuccessId,
              title: 'Successfully Added to DAO',
              description: `Successfully added to the DAO as a ${membershipStatus}.`,
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
            isClosable: true,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
