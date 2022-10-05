import { useUser } from '../contexts/UserContext';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useOverlay } from '../contexts/OverlayContext';
import { ContributionFormValues } from '../types/forms';
import { UIContribution } from '@govrn/ui-types';

interface UpdateContributionProps {
  updatedValues: ContributionFormValues;
  contribution: UIContribution;
  bulkItemCount?: number;
}

export const useContributionUpdate = () => {
  const toast = useToast()
  const { setModals } = useOverlay();
  const { govrnProtocol: govrn, userData } = useUser()
  const queryClient = useQueryClient()
  const toastUpdateContributionId = 'toast-update-contribution';
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(async ({ updatedValues, contribution, bulkItemCount }: UpdateContributionProps) => {
    try {
      if (userData?.id !== contribution.user.id) {
        throw new Error('You can only edit your own Contributions.');
      }
      if (contribution.status.name !== 'staging') {
        throw new Error(
          'You can only edit Contributions with a Staging status.',
        );
      }
      if (userData !== null) {
        const data = await govrn.custom.updateUserContribution({
          address: userData.address,
          chainName: 'ethereum',
          userId: userData.id,
          name: updatedValues.name ?? contribution.name,
          details: updatedValues.details ?? contribution.details,
          proof: updatedValues.proof ?? contribution.proof,
          activityTypeName:
            updatedValues.activityType ?? contribution.activity_type.name,
          dateOfEngagement: new Date(
            updatedValues.engagementDate ?? contribution.date_of_engagement,
          ).toISOString(),
          status: 'staging',
          guildId: updatedValues.daoId === null ? null : Number(updatedValues.daoId),
          contributionId: contribution.id,
          currentGuildId: contribution.guilds[0]?.guild?.id || undefined,
        })
        return data
      }
    } catch (error) {
      console.log(error)
    }
  }, {
    onSuccess: (_, { bulkItemCount }) => { // destructure the bulkItemCount from the variables (args passed into the mutation)
      queryClient.invalidateQueries(['activityTypes']) // invalidate the activity types query -- covers all args
      queryClient.invalidateQueries(['userDaos'])  // invalidate the userDaos query -- covers all args
      if (!toast.isActive(toastUpdateContributionId)) {
        toast({
          id: toastUpdateContributionId,
          title: `Contribution ${bulkItemCount && bulkItemCount > 0 ? 'Reports' : 'Report'
            } Updated`,
          description: `Your Contribution ${bulkItemCount && bulkItemCount > 0 ? 'Reports have' : 'Report has'
            } been updated.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      setModals({ editContributionFormModal: false });
    },
    onError: (error) => {
      toast({
        title: 'Unable to Report Contribution',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    },
  }
  )
  return { mutateAsync, isLoading, isError, isSuccess }
}
