import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ContributionFormValues } from '../types/forms';
import useGovrnToast from '../components/toast';

export const useContributionCreate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn, userData } = useUser();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    async (newContribution: ContributionFormValues) => {
      const data = await govrn.custom.createUserContribution({
        address: userData?.address ?? '',
        chainName: 'ethereum',
        userId: userData?.id ?? -1,
        name: newContribution.name || '',
        details: newContribution.details || '',
        proof: newContribution.proof || '',
        activityTypeName: newContribution.activityType || '',
        dateOfEngagement: new Date(
          newContribution.engagementDate || '',
        ).toISOString(),
        status: 'staging',
        guildId: Number(newContribution.daoId) || undefined,
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['activityTypes']); // invalidate and refetch
        queryClient.invalidateQueries(['userDaos']); // invalidate and refetch
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries(['ContributionGetCountYear']);
        queryClient.invalidateQueries(['ContributionGetCount']);

        toast.success({
          title: 'Contribution Report Added',
          description:
            'Your Contribution report has been recorded. Add another Contribution report or check out your Contributions.',
        });
      },
      onError: error => {
        toast.error({
          title: 'Unable to Report Contribution',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
