import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { useGovrnToast } from '@govrn/protocol-ui';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import pluralize from 'pluralize';

const useAttestationBulkMint = () => {
  const toast = useGovrnToast();
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { userData, govrnProtocol: govrn } = useUser();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['attestationBulkMint'],
    async (data: { onChainId: number; name: string }[]) => {
      for (const contr of data) {
        if (contr?.onChainId === undefined || contr?.onChainId === null) {
          throw new Error(`No onChainId for contribution: ${contr.name}`);
        }
      }

      if (!(signer && chain?.id && userData)) {
        throw new Error('Not signed in, unable to mint');
      }

      return await govrn.contribution.bulkAttest(
        {
          address: networks[chain?.id].govrnContract,
          chainId: chain?.id,
          name: networks[chain?.id].name,
        },
        signer,
        chain.id,
        userData.id,
        data.map(att => ({
          contribution: att?.onChainId ?? 0,
          confidenceId: 1,
          confidenceName: 'Verified',
          // It's handled by the contract: block's timestamp.
          dateOfSubmission: 0,
        })),
      );
    },
    {
      onSuccess: ({ results, errors }) => {
        queryClient.invalidateQueries(['contributionInfiniteList']);

        if (results.length > 0) {
          toast.success({
            title: 'Attestation Successfully Minted',
            description: `${pluralize('attestation', results.length, true)} ${
              results.length === 1 ? 'has' : 'have'
            } been minted.`,
          });
        }

        if (errors.length > 0) {
          toast.error({
            title: 'Unable to Mint Attestation',
            description: `${pluralize(
              'attestation',
              errors.length,
              true,
            )} failed to mint.`,
          });
        }
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

export default useAttestationBulkMint;
