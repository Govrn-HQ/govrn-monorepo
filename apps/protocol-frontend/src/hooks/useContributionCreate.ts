
import { useUser } from '../contexts/UserContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ContributionFormValues } from '../types/forms';


export const useContributionCreate = () => {
  const { govrnProtocol: govrn, userData } = useUser()
  const queryClient = useQueryClient()
  const { mutate, isLoading, isError, isSuccess } = useMutation(async (newContribution: ContributionFormValues) => {
    console.log('new  contribution', newContribution)
    return await govrn.custom.createUserContribution({
      address: userData?.address ?? '',
      chainName: 'ethereum',
      userId: userData?.id ?? -1,
      name: newContribution.name || '',
      details: newContribution.details || '',
      proof: newContribution.proof || '',
      activityTypeName: newContribution.activityType || '',
      dateOfEngagement: new Date(newContribution.engagementDate || '').toISOString(),
      status: 'staging',
      guildId: Number(newContribution.daoId) || undefined,
    })
  }, {
    onSuccess: () => {
      // queryClient.invalidateQueries('contributions')
      console.log('success')
    }
  })
  return { mutate, isLoading, isError, isSuccess }
}
