import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DaoUpdateValues } from '../types/forms';
import { useGovrnToast } from '@govrn/protocol-ui';

export const useDaoUpdate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (daoUpdateValues: DaoUpdateValues) => {
      const mutationData = await govrn.guild.update(
        {
          name: daoUpdateValues.name,
          verification_setting_id: daoUpdateValues.verificationSettingId,
        },
        { guildId: daoUpdateValues.guildId },
      );
      return mutationData;
    },
    {
      onSuccess: data => {
        queryClient.invalidateQueries(['userDaos']);
        queryClient.invalidateQueries(['daoUsersList']);
        queryClient.invalidateQueries(['daoGet', { id: data.id }]);

        toast.success({
          title: 'Successfully Updated DAO',
          description: 'You have successfully updated the DAO.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Update DAO',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
