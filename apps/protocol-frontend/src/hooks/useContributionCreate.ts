import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ContributionFormValues } from '../types/forms';
import { useGovrnToast } from '@govrn/protocol-ui';
import { UIContribution } from '@govrn/ui-types';

export const useContributionCreate = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn, userData } = useUser();
  const queryClient = useQueryClient();

  const createContribution = async (
    newContribution: ContributionFormValues,
  ) => {
    const data = await govrn.custom.createUserContribution({
      address: userData?.address ?? '',
      chainName: 'ethereum',
      userId: userData?.id ?? -1,
      chainId: null,
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
  };
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation({
    mutationFn: createContribution,
    onMutate: async (newContribution: ContributionFormValues) => {
      // await queryClient.cancelQueries(['contributionList']);
      await queryClient.cancelQueries({
        queryKey: [['contributionInfiniteList'], ['contributionList']],
      });

      const previousContributions = queryClient.getQueryData<UIContribution[]>([
        'contributionInfiniteList',
        {
          where: {
            user_id: { equals: userData?.id },
            status: { isNot: { name: { equals: 'minted' } } },
          },
        },
      ]);

      console.log('previousContributions', previousContributions);

      if (previousContributions) {
        queryClient.setQueryData(
          [
            'contributionInfiniteList',
            {
              where: {
                user_id: { equals: userData?.id },
                status: { isNot: { name: { equals: 'minted' } } },
              },
            },
          ],
          [...[previousContributions], newContribution],
        );
      }

      console.log('previousContributions', previousContributions);

      return { previousContributions, newContribution };
    },
    onError: (error, context) => {
      if (context?.previousContributions) {
        queryClient.setQueryData<ContributionFormValues>(
          [
            'contributionInfiniteList',
            {
              where: {
                user_id: { equals: userData?.id },
                status: { isNot: { name: { equals: 'minted' } } },
              },
            },
          ],
          context.previousContributions,
        );
      }
      toast.error({
        title: 'Unable to Report Contribution',
        description: `Something went wrong. Please try again: ${error}`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(['activityTypes']); // invalidate the activity types query -- covers all args
      queryClient.invalidateQueries(['userDaos']); // invalidate the userDaos query -- covers all args
      queryClient.invalidateQueries(['contributionList']);
      queryClient.invalidateQueries([
        'contributionInfiniteList',
        {
          where: {
            user_id: { equals: userData?.id },
            status: { isNot: { name: { equals: 'minted' } } },
          },
        },
      ]);
      queryClient.invalidateQueries(['ContributionGetCountYear']);
      queryClient.invalidateQueries(['contributionGetCount']);

      toast.success({
        title: 'Contribution Report Added',
        description: 'Your contribution report has been recorded.',
      });
    },
  });
  return { mutateAsync, isLoading, isError, isSuccess };
};
