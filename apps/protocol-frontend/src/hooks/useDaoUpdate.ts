import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DaoUpdateValues } from '../types/forms';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useDaoUpdate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({
      daoUpdateValues,
      showToast = true,
    }: {
      daoUpdateValues: DaoUpdateValues;
      showToast: boolean;
    }) => {
      const mutationData = await govrn.guild.update(
        {
          name: daoUpdateValues.name,
          verification_setting_id: daoUpdateValues.verificationSettingId,
        },
        { guildId: daoUpdateValues.guildId },
      );
      return { mutationData, showToast };
    },
    {
      onSuccess: (data, { showToast }) => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);
        queryClient.invalidateQueries(['daoGet', { id: data.mutationData.id }]);
        queryClient.invalidateQueries({
          queryKey: ['contributionInfiniteList'],
        }); // invalidate this query key regardless of the args

        if (showToast) {
          toast.success({
            title: 'Successfully Updated DAO',
            description: 'You have successfully updated the DAO.',
          });
        }
      },
      onError: (error, { showToast }) => {
        if (showToast) {
          toast.error({
            title: 'Unable to Update DAO',
            description: `Something went wrong. Please try again: ${error}`,
          });
        }
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
