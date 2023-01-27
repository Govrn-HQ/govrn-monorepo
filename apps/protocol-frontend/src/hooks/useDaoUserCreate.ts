import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DaoUserCreateValues } from '../types/forms';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useDaoUserCreate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (newDaoUser: DaoUserCreateValues) => {
      const mutationData = await govrn.guild.user.create({
        data: {
          userId: newDaoUser.userId,
          guildId: newDaoUser.guildId,
          guildName: newDaoUser.guildName,
          userAddress: newDaoUser.userAddress,
          membershipStatus: newDaoUser.membershipStatus,
        },
      });
      return mutationData;
    },
    {
      onSuccess: data => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);

        console.log('data', data);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          toast.success({
            id: toastSuccessId,
            title: 'Successfully joined DAO',
            description: 'You have successfully joined as a recruit.',
          });
        }
      },
      onError: error => {
        const toastErrorId = 'dao-user-create-error';
        if (!toast.isActive(toastErrorId)) {
          toast.error({
            id: toastErrorId,
            title: 'Unable to Join DAO',
            description: `Something went wrong. Please try again: ${error}`,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};

export const useDaoCreateUserCreate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (newDaoUser: DaoUserCreateValues) => {
      const mutationData = await govrn.guild.user.create({
        data: {
          userId: newDaoUser.userId,
          guildId: newDaoUser.guildId,
          guildName: newDaoUser.guildName,
          userAddress: newDaoUser.userAddress,
          membershipStatus: newDaoUser.membershipStatus,
        },
      });
      return mutationData;
    },
    {
      onSuccess: mutationData => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          toast.success({
            id: toastSuccessId,
            title: 'Successfully created DAO',
            description: 'You have successfully created the DAO.',
          });
        }
      },
      onError: error => {
        const toastErrorId = 'dao-user-create-error';
        if (!toast.isActive(toastErrorId)) {
          toast.error({
            id: toastErrorId,
            title: 'Unable to Join DAO',
            description: `Something went wrong. Please try again: ${error}`,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
