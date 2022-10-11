import { Dispatch, SetStateAction } from 'react';
import { ethers } from 'ethers';
import React, { createContext, useContext, useState } from 'react';
import { useNetwork, useSigner } from 'wagmi';
import { UIAttestations, UIContribution } from '@govrn/ui-types';
import { useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { GovrnProtocol } from '@govrn/protocol-client';
import { MintContributionType } from '../types/mint';
import { UserContext } from './UserContext';
import { PROTOCOL_URL } from '../utils/constants';
import { ChainIdError } from '@govrn/protocol-client';
import pluralize from 'pluralize';
import useGovrnToast from '../components/toast';

export const ContributionContext = createContext<ContributionContextType>(
  {} as ContributionContextType,
);

type UserContributionsDateRangeCountType = {
  count: number;
  date: string;
  guildIds?: number[] | null | undefined;
  name?: string | null | undefined;
};

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

interface ContributionContextProps {
  children: React.ReactNode;
}

export const ContributionsContextProvider: React.FC<
  ContributionContextProps
> = ({ children }: ContributionContextProps) => {
  const { userData } = useContext(UserContext);
  const toast = useGovrnToast();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const queryClient = useQueryClient();

  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const [contribution, setContribution] = useState<UIContribution>(
    {} as UIContribution,
  );

  const [userAttestations, setUserAttestations] =
    useState<UIAttestations | null>(null);

  const [userContributionsDateRangeCount, setUserContributionsDateRangeCount] =
    useState<UserContributionsDateRangeCountType[]>([]);

  const getUserContributionsCount = async (
    startDate: Date | string,
    endDate: Date | string,
    guildIds?: number[] | null | undefined,
    excludeUnassigned?: boolean[] | undefined,
  ) => {
    try {
      if (!userData?.id) {
        throw new Error('getUserContributionsCount has no userData.id');
      }
      const getUserContributionsCountResponse =
        await govrn.custom.getContributionCountByDateForUserInRange({
          id: userData?.id,
          startDate: startDate,
          endDate: endDate,
          guildIds: guildIds,
          excludeUnassigned: excludeUnassigned,
        });

      setUserContributionsDateRangeCount(getUserContributionsCountResponse);
      return getUserContributionsCountResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const mintContribution = async (
    contribution: MintContributionType['original'],
    ipfsContentUri: string,
    setMintProgress: Dispatch<SetStateAction<number>>,
  ) => {
    try {
      if (signer && chain?.id && userData) {
        await govrn.contribution.mint(
          {
            address: networks[chain?.id].govrnContract,
            chainId: chain?.id,
            name: networks[chain?.id].name,
          },
          signer,
          userData.address,
          contribution.id,
          contribution.activityTypeId,
          userData.id,
          {
            detailsUri: ethers.utils.toUtf8Bytes(ipfsContentUri),
            dateOfSubmission: new Date(
              contribution.date_of_submission,
            ).getTime(),
            dateOfEngagement: new Date(contribution.engagementDate).getTime(),
          },
          ethers.utils.toUtf8Bytes(contribution.name),
          ethers.utils.toUtf8Bytes(contribution.details),
          ethers.utils.toUtf8Bytes(contribution.proof),
        );
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries(['contributionGet', contribution.id]);
        setMintProgress((prevState: number) => prevState + 1);
        toast.success({
          title: 'Contribution Successfully Minted',
          description: 'Your Contribution has been minted.',
        });
      }
    } catch (error) {
      console.log('error', error);
      toast.error({
        title: 'Unable to Mint Contribution',
        description: `Something went wrong. Please try again: ${error}`,
      });
    }
  };

  const bulkMintContributions = async (contributions: BulkMintOptions[]) => {
    try {
      if (signer && chain?.id && userData) {
        const result = await govrn.contribution.bulkMint(
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
        await queryClient.invalidateQueries(['contributionList']);
        await queryClient.invalidateQueries(['contributionInfiniteList']);

        const minted = result.filter(i => i.status === 'fulfilled');
        const failedToMint = result
          .filter((i): i is PromiseRejectedResult => i.status === 'rejected')
          .filter(i => i.reason instanceof ChainIdError);

        if (minted.length > 0) {
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
      }
    } catch (error) {
      console.log('error', error);
      toast.error({
        title: 'Unable to Mint Contribution',
        description: 'Something went wrong minting. Please try again.',
      });
    }
  };

  const deleteContribution = async (id: number) => {
    try {
      if (signer && chain?.id) {
        await govrn.contribution.delete(
          {
            address: networks[chain?.id].govrnContract,
            chainId: chain?.id,
            name: networks[chain?.id].name,
          },
          signer,
          id,
        );
        queryClient.invalidateQueries(['contributionList']);
        queryClient.invalidateQueries(['contributionInfiniteList']);
        queryClient.invalidateQueries(['contributionGet', id]);

        toast.success({
          title: 'Contribution Successfully deleted',
          description: 'Your Contribution has been deleted.',
        });
      }
    } catch (e) {
      console.log('error', e);
      toast.error({
        title: 'Unable to delete contribution',
        description: `Something went wrong. Please try again: ${e}`,
      });
    }
  };

  const mintAttestation = async (
    contribution: MintContributionType['original'],
  ) => {
    try {
      if (!contribution?.onChainId) {
        throw new Error('No onChainId for contribution');
      }
      if (signer && chain?.id && userData) {
        await govrn.contribution.attest(
          {
            address: networks[chain?.id].govrnContract,
            chainId: chain?.id,
            name: networks[chain?.id].name,
          },
          signer,
          0,
          contribution.activityTypeId,
          userData.id,
          {
            contribution: contribution.onChainId,
            confidence: 0,
          },
        );
        // await getDaoContributions();
        toast.success({
          title: 'Attestation Successfully Minted',
          description: 'Your Attestation has been minted.',
        });
      }
    } catch (error) {
      console.log('error', error);
      toast.error({
        title: 'Unable to Mint Attestation',
        description: `Something went wrong. Please try again: ${error}`,
      });
    }
  };

  const createAttestation = async (contribution: UIContribution) => {
    try {
      if (userData) {
        await govrn.custom.createUserAttestation({
          address: userData.address,
          chainName: 'ethereum',
          userId: userData.id,
          confidenceName: '0',
          contributionId: contribution.id,
        });
        toast.success({
          title: 'Attestation Successfully Added',
          description: 'Your Attestation has been added.',
        });
        // await getDaoContributions();
      }
    } catch (error) {
      console.log(error);
      toast.error({
        title: 'Unable to Add Attestation',
        description: `Something went wrong. Please try again: ${error}`,
      });
    }
  };

  return (
    <ContributionContext.Provider
      value={{
        contribution,
        createAttestation,
        deleteContribution,
        getUserContributionsCount,
        mintAttestation,
        bulkMintContributions,
        mintContribution,
        setContribution,
        setUserAttestations,
        setUserContributionsDateRangeCount,
        userAttestations,
        userContributionsDateRangeCount,
      }}
    >
      {children}
    </ContributionContext.Provider>
  );
};

type ContributionContextType = {
  contribution: UIContribution;
  createAttestation: (arg0: UIContribution) => void;
  getUserContributionsCount: (
    startDate: string | Date,
    endDate: string | Date,
    guildIds?: number[] | null | undefined,
    excludeUnassigned?: boolean[] | undefined,
  ) => Promise<UserContributionsDateRangeCountType[] | undefined>;
  mintAttestation: (
    contribution: MintContributionType['original'],
  ) => Promise<void>;
  bulkMintContributions: (contributions: BulkMintOptions[]) => void;
  mintContribution: (
    contribution: MintContributionType['original'],
    ipfsContentUri: string,
    setMintProgress: Dispatch<SetStateAction<number>>,
  ) => void;

  setContribution: (data: UIContribution) => void;

  setUserContributionsDateRangeCount: (
    data: UserContributionsDateRangeCountType[],
  ) => void;
  setUserAttestations: (arg0: UIAttestations) => void;
  deleteContribution: (id: number) => void;
  userAttestations: UIAttestations | null;
  userContributionsDateRangeCount: UserContributionsDateRangeCountType[];
};

export const useContributions = (): ContributionContextType =>
  useContext(ContributionContext);
