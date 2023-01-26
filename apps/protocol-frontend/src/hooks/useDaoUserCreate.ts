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
        },
      });
      return mutationData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);

        toast.success({
          title: 'Successfully joined DAO',
          description: 'You have successfully joined as a recruit.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Join DAO',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
