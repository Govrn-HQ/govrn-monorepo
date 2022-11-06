import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { ethers } from 'ethers';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import useGovrnToast from '../components/toast';
import { MintContributionType } from '../types/mint';
import useContributionMetadataStore from './useContributionMetadataStore';

type ContributionData = MintContributionType['original'] & {
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
    async (data: ContributionData) => {
      if (!(signer && chain?.id && userData)) {
        throw new Error('Not signed in, unable to mint');
      }

      const {
        activityTypeId,
        date_of_submission,
        details,
        engagementDate,
        id,
        name,
        proof,
        activityTypeName,
      } = data;

      const ipfsUri = await storeContributionMetadata({
        name,
        details,
        proof,
        image: '',
        activityName: activityTypeName,
        govrn: {
          id,
          activityTypeId,
        },
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
        activityTypeId,
        userData.id,
        {
          detailsUri: ethers.utils.toUtf8Bytes(ipfsUri),
          dateOfSubmission: new Date(date_of_submission).getTime(),
          dateOfEngagement: new Date(engagementDate).getTime(),
        },
        ethers.utils.toUtf8Bytes(name),
        ethers.utils.toUtf8Bytes(details),
        ethers.utils.toUtf8Bytes(proof),
      );
    },
    {
      onSuccess: (data, contribution) => {
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries(['contributionGet', contribution.id]);

        toast.success({
          title: 'Contribution Successfully Minted',
          description: 'Your Contribution has been minted.',
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
