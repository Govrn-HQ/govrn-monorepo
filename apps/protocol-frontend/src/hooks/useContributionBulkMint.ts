import { useMutation, useQueryClient } from '@tanstack/react-query';
import useGovrnToast from '../components/toast';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { networks } from '../utils/networks';
import { ethers } from 'ethers';
import { ChainIdError } from '@govrn/protocol-client';
import pluralize from 'pluralize';

type BulkMintOptions = {
  ipfsContentUri: string;
  engagementDate: Date | string;
  attestations: { id: number }[];
  guildName: string;
  name: string;
  action: string;
  details?: string | null;
  id: number;
  proof?: string | null;
  txHash?: string | null;
  user: { id: number };
  date_of_submission: Date | string;
  activityTypeId: number;
  status: { id: number; name: string };
};

const useContributionBulkMint = () => {
  const toast = useGovrnToast();
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { userData, govrnProtocol: govrn } = useUser();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['BulkMintContribution'],
    async (contributions: BulkMintOptions[]) => {
      if (!(signer && chain?.id && userData)) {
        throw new Error('Not signed in, unable to mint');
      }

      return await govrn.contribution.bulkMint(
        {
          address: networks[chain?.id].govrnContract,
          chainId: chain?.id,
          name: networks[chain?.id].name,
        },
        signer,
        userData.address,
        contributions.map(c => ({
          id: c.id,
          activityTypeId: c.activityTypeId,
          userId: userData.id,
          args: {
            detailsUri: ethers.utils.toUtf8Bytes(c.ipfsContentUri),
            dateOfSubmission: new Date(c.date_of_submission).getTime(),
            dateOfEngagement: new Date(c.engagementDate).getTime(),
          },
          name: ethers.utils.toUtf8Bytes(c.name),
          details: ethers.utils.toUtf8Bytes(c.details || ''),
          proof: ethers.utils.toUtf8Bytes(c.proof || ''),
        })),
      );
    },
    {
      onSuccess: async result => {
        /* Failed writes/updates to db are included in result. */
        const { results: minted, errors: failedToMint } = result;

        if (minted.length > 0) {
          queryClient.invalidateQueries(['contributionList']);
          queryClient.invalidateQueries(['contributionInfiniteList']);

          toast.success({
            title: 'Contribution Successfully Minted',
            description: `${pluralize(
              'Contribution',
              minted.length,
              true,
            )} has been minted.`,
          });
        }

        if (failedToMint.length > 0) {
          toast.error({
            title: 'Failed to Mint Some Contribution',
            description: `${pluralize(
              'Contribution',
              failedToMint.length,
              true,
            )} failed to mint.`,
          });
        }
      },
      onError: (error: unknown) => {
        /* error is related only to minting operation */
        console.log('error', error);

        toast.error({
          title: 'Unable to Mint Contribution',
          description: 'Something went wrong minting. Please try again.',
        });
      },
    },
  );

  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useContributionBulkMint;
