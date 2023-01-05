import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { ethers } from 'ethers';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useGovrnToast } from '@govrn/protocol-ui';
import useContributionMetadataStore from './useContributionMetadataStore';
import { UIContribution } from '@govrn/ui-types';

type MintContributionOptions = UIContribution & {
  activityTypeName: string;
};

const useContributionMint = () => {
  const toast = useGovrnToast();
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { userData, govrnProtocol: govrn } = useUser();
  const { mutateAsync: storeContributionMetadata } =
    useContributionMetadataStore();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['MintContribution'],
    async (data: MintContributionOptions) => {
      if (!(signer && chain?.id && userData)) {
        throw new Error('Not signed in, unable to mint');
      }

      const {
        activity_type,
        date_of_submission,
        details,
        date_of_engagement,
        id,
        name,
        proof,
        activityTypeName,
      } = data;

      const ipfsUri = await storeContributionMetadata({
        name,
        details: details ?? '',
        proof: proof ?? '',
        image: '',
        activityName: activityTypeName,
      });
      if (!ipfsUri) {
        throw Error('Failed to store contribution metadata in IPFS');
      }

      return await govrn.contribution.mint(
        {
          address: networks[chain?.id].govrnContract,
          chainId: chain?.id,
          name: networks[chain?.id].name,
        },
        signer,
        userData.address,
        id,
        activity_type.id,
        userData.id,
        {
          detailsUri: ethers.utils.toUtf8Bytes(ipfsUri),
          dateOfSubmission: new Date(date_of_submission).getTime(),
          dateOfEngagement: new Date(date_of_engagement).getTime(),
        },
        ethers.utils.toUtf8Bytes(name),
        ethers.utils.toUtf8Bytes(details ?? ''),
        ethers.utils.toUtf8Bytes(proof ?? ''),
      );
    },
    {
      onSuccess: (data, contribution) => {
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries(['contributionGet', contribution.id]);

        toast.success({
          title: 'Contribution Successfully Minted',
          description: 'Your contribution has been minted.',
        });
      },
      onError: error => {
        console.error(error);

        toast.error({
          title: 'Unable to Mint Contribution',
          description: `Something went wrong. Please try again: ${error}`,
        });
      },
    },
  );

  return { mutateAsync, isLoading, isError, isSuccess };
};

export default useContributionMint;
