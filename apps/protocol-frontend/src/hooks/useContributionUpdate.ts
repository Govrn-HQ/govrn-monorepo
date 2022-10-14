import { ContributionTableType } from './../types/table';
import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useOverlay } from '../contexts/OverlayContext';
import { ContributionFormValues } from '../types/forms';
import { UIContribution } from '@govrn/ui-types';
import useGovrnToast from '../components/toast';

interface UpdateContributionProps {
  updatedValues: ContributionFormValues;
  contribution: UIContribution;
  bulkItemCount?: number;
}

export const useContributionUpdate = () => {
  const toast = useGovrnToast();
  const { setModals } = useOverlay();
  const { govrnProtocol: govrn, userData } = useUser();
  const queryClient = useQueryClient();
  const toastUpdateContributionId = 'toast-update-contribution';
  const { mutate, mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async ({
      updatedValues,
      contribution,
      bulkItemCount,
    }: UpdateContributionProps) => {
      if (userData !== null) {
        const data = await govrn.custom.updateUserContribution({
          address: userData.address,
          chainName: 'ethereum',
          userId: userData.id,
          name: updatedValues.name ?? contribution.name,
          details: updatedValues.details ?? contribution.details,
          proof: updatedValues.proof ?? contribution.proof,
          activityTypeName:
            updatedValues.activityType ?? contribution.activity_type?.name,
          dateOfEngagement: new Date(
            updatedValues.engagementDate ?? contribution.date_of_engagement).toISOString(),
          status: 'staging', // should always be staging since can only update staged Contributions
          guildId:
            updatedValues.daoId === null ? null : Number(updatedValues.daoId),
          contributionId: contribution.id,
          currentGuildId: contribution.guilds[0]?.guild?.id || 0,
          contributionUserAddress: contribution.user?.address,
        });
        return { data, bulkItemCount };
      }
    },
    {
      onSuccess: (data, { bulkItemCount }) => {
        console.log('data', data);
        // destructure the bulkItemCount from the variables (args passed into the mutation)
        queryClient.invalidateQueries(['activityTypes']); // invalidate the activity types query -- covers all args
        queryClient.invalidateQueries(['userDaos']); // invalidate the userDaos query -- covers all args
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries([
          'contributionGet',
          data?.data.id,
        ]); // invalidate the Contribution Query with the ID of the updated Contribution
        if (!toast.isActive(toastUpdateContributionId)) {
          toast.success({
            id: toastUpdateContributionId,
            title: `Contribution ${bulkItemCount && bulkItemCount > 0 ? 'Reports' : 'Report'
              } Updated`,
            description: `Your Contribution ${bulkItemCount && bulkItemCount > 0 ? 'Reports have' : 'Report has'
              } been updated.`,
          });
        }
        setModals({ editContributionFormModal: false });
      },
      onError: error => {
        console.log('error', error);
        toast.error({
          title: 'Unable to Update Contribution',
          description: `Something went wrong.Please try again.`,
        });
      },
    },
  );
  return { mutate, mutateAsync, isLoading, isError, isSuccess };
};
