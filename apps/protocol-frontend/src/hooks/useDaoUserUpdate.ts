import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGovrnToast } from '@govrn/protocol-ui';

// interface DaoUserUpdateProps {
//   //
// }

export const useDaoUserUpdate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({ updatedDaoUser }) => {
      const mutationData = await govrn.guild.user.update({
        data: {
          userId: user
          membershipStatus: newDaoUser.membershipStatus,

        },
      });
      return { mutationData };
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);

        const toastSuccessId = 'dao-user-create-success';
        if (!toast.isActive(toastSuccessId)) {
          toast.success({
            id: toastSuccessId,
            title: `${
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
