import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import useGovrnToast from '../components/toast';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import pluralize from 'pluralize';

type AttestationInput = {
  name: string;
  onChainId?: number | null;
  confidence: number;
  confidenceName: string;
};

const useAttestationBulkMint = () => {
  const toast = useGovrnToast();
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { userData, govrnProtocol: govrn } = useUser();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['BulkMintAttestation'],
    async (data: AttestationInput[]) => {
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
            title: 'Attestation successfully minted',
            description: `${pluralize(
              'Attestation',
              results.length,
              true,
            )} has been minted.`,
          });
        }

        if (errors.length > 0) {
          toast.error({
            title: 'Unable to Mint Attestation',
            description: `${pluralize(
              'Attestation',
              errors.length,
              true,
            )} failed to minted.`,
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
