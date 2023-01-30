import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DaoUserCreateValues } from '../types/forms';
import { useGovrnToast } from '@govrn/protocol-ui';

interface DaoUserCreateProps {
  newDaoUser: DaoUserCreateValues;
  creatingNewDao?: boolean;
}

export const useDaoUserCreate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({ newDaoUser, creatingNewDao = false }: DaoUserCreateProps) => {
      const mutationData = await govrn.guild.user.create({
        data: {
          userId: newDaoUser.userId,
          guildId: newDaoUser.guildId,
          guildName: newDaoUser.guildName,
          userAddress: newDaoUser.userAddress,
          membershipStatus: newDaoUser.membershipStatus,
        },
      });
      return { mutationData, creatingNewDao };
    },
    {
      onSuccess: (_, { creatingNewDao }) => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          toast.success({
            id: toastSuccessId,
            title: `${
              creatingNewDao === true
                ? 'Successfully Created DAO'
                : 'Successfully Joined DAO'
            }`,
            description: `${
              creatingNewDao === true
                ? 'You have successfully created a new DAO.'
                : 'You have successfully joined the DAO as a recruit.'
            }`,
          });
        }
      },
      onError: (error, { creatingNewDao }) => {
        const toastErrorId = 'dao-user-create-error';
        if (!toast.isActive(toastErrorId)) {
          toast.error({
            id: toastErrorId,
            title: `${
              creatingNewDao === true
                ? 'Unable to Create DAO'
                : 'Unable to Join DAO'
            }`,
            description: `Something went wrong. Please try again: ${error}`,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
