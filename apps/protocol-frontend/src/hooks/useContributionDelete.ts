import { useUser } from '../contexts/UserContext';
import { useNetwork, useSigner } from 'wagmi';
import { useToast } from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';

export const useContributionDelete = () => {
  const toast = useToast()
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
        toast({
          title: 'Contribution successfully deleted',
          description: 'Your Contribution has been deleted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      },
      onError: (error) => {
        console.log('error', error)
        toast({
          title: 'Unable to delete contribution',
          description: `Something went wrong. Please try again.`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      },
    }
  )
  return { mutate, mutateAsync, isLoading, isError, isSuccess }
}
