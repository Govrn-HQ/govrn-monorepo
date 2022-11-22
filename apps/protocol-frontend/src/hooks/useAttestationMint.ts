import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import useGovrnToast from '../components/toast';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';

const useAttestationMint = () => {
  const toast = useGovrnToast();
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { userData, govrnProtocol: govrn } = useUser();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['MintAttestation'],
    async (data: { contributionId: number; onChainId: number }) => {
      if (!data?.onChainId) {
        throw new Error('No onChainId for contribution');
      }

      if (!(signer && chain?.id && userData)) {
        throw new Error('Not signed in, unable to mint');
      }

      return await govrn.contribution.attest(
        {
          address: networks[chain?.id].govrnContract,
          chainId: chain?.id,
          name: networks[chain?.id].name,
        },
        signer,
        data.contributionId,
        userData.id,
        {
          contribution: data.onChainId,
          confidence: 0,
        },
        chain.id,
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['contributionInfiniteList']);
        toast.success({
          title: 'Attestation Successfully Minted',
          description: 'Your Attestation has been minted.',
        });
      },
      onError: error => {
        console.error(error);
        toast.error({
          title: 'Unable to Mint Attestation',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );

  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useAttestationMint;
