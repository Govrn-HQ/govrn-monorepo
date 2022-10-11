import { useUser } from '../contexts/UserContext';
import { useNetwork, useSigner } from 'wagmi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import useGovrnToast from '../components/toast';

export const useContributionDelete = () => {
  const toast = useGovrnToast();
  const { govrnProtocol: govrn } = useUser()
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { mutate, mutateAsync, isLoading, isError, isSuccess } = useMutation(async (contributionId: number) => {
    if (signer && chain?.id) {
      const data = await govrn.contribution.delete(
        {
          address: networks[chain?.id].govrnContract,
          chainId: chain?.id,
          name: networks[chain?.id].name,
        },
        signer,
        contributionId,
      );
      return data;
    }
  },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['activityTypes']); // invalidate the activity types query -- covers all args
        queryClient.invalidateQueries(['userDaos']); // invalidate the userDaos query -- covers all args
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries([
          'contributionGet',
          data?.deleteUserContribution.id
        ]); // invalidate the contributionGet Query with the ID of the deleted Contribution
        toast.success({
          title: 'Contribution successfully deleted',
          description: 'Your Contribution has been deleted.',
        });
      },
      onError: (error) => {
        console.log('error', error)
        toast.error({
          title: 'Unable to delete contribution',
          description: `Something went wrong. Please try again.`,
        });
      },
    }
  )
  return { mutate, mutateAsync, isLoading, isError, isSuccess }
}
