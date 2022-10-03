import { useUser } from '../contexts/UserContext';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ContributionFormValues } from '../types/forms';
import { UIContribution } from '@govrn/ui-types';

interface UpdateContributionProps {
  updatedValues: ContributionFormValues;
  contribution: UIContribution;
  bulkItemCount?: number;
}



export const useContributionUpdate = () => {
  const toast = useToast()
  const { govrnProtocol: govrn, userData } = useUser()
  const queryClient = useQueryClient()
  // updatedValues: ContributionFormValues, contribution: UIContribution, bulkItemCount?: number }
  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(async ({ updatedValues, contribution, bulkItemCount }: UpdateContributionProps) => {
    console.log('updatedValues', updatedValues)
    console.log()
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
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['activityTypes', 'userDaos'])
      toast({
        title: 'Contribution Update Added',
        description:
          'Your Contribution report has been recorded. Add another Contribution report or check out your Contributions.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
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
