import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DaoUserCreateValues } from '../types/forms';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useDaoUserCreate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn, userData } = useUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (newDaoUser: DaoUserCreateValues) => {
      const mutationData = await govrn.guild.user.create({
        data: {
          userId: userData?.id ?? -1,
          guildId: newDaoUser.guildId,
        },
      });
      return mutationData;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['activityTypes']); // invalidate the activity types query -- covers all args
        queryClient.invalidateQueries(['userDaos']); // invalidate the userDaos query -- covers all args
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries(['ContributionGetCountYear']);
        queryClient.invalidateQueries(['contributionGetCount']);

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
