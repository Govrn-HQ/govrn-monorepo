import { useMutation, useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { ethers } from 'ethers';
import { useNetwork, useSigner } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import useGovrnToast from '../components/toast';
import { ContributionTableType } from '../types/table';

type ContributionData = ContributionTableType & {
  proof: string;
  details: string;
  ipfsContentUri: string;
};

const useContributionMint = () => {
  const toast = useGovrnToast();
  const queryClient = useQueryClient();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { userData, govrnProtocol: govrn } = useUser();

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation(
    ['mint-contribution'],
    async (data: ContributionData) => {
      if (!(signer && chain?.id && userData)) {
        throw new Error('What should the message be!?');
      }

      const {
        activityTypeId,
        date_of_submission,
        details,
        engagementDate,
        id,
        ipfsContentUri,
        name,
        proof,
      } = data;

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
          detailsUri: ethers.utils.toUtf8Bytes(ipfsContentUri),
          dateOfSubmission: new Date(date_of_submission).getTime(),
          dateOfEngagement: new Date(engagementDate).getTime(),
        },
        ethers.utils.toUtf8Bytes(name),
        ethers.utils.toUtf8Bytes(details),
        ethers.utils.toUtf8Bytes(proof),
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);

        toast.success({
          title: 'Contribution Successfully Minted',
          description: 'Your Contribution has been minted.',
        });
      },
      onError: error => {
        console.log('error', error);

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
