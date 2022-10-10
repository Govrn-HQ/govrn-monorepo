import { useUser } from '../contexts/UserContext';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ContributionFormValues } from '../types/forms';

export const useContributionCreate = () => {
  const toast = useToast();
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
        toast({
          title: 'Contribution Report Added',
          description:
            'Your Contribution report has been recorded. Add another Contribution report or check out your Contributions.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      },
      onError: error => {
        toast({
          title: 'Unable to Report Contribution',
          description: `Something went wrong. Please try again: ${error}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      },
    },
  );
  return { mutateAsync, isLoading, isError, isSuccess };
};
