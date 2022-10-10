import { Dispatch, SetStateAction } from 'react';
import { ethers } from 'ethers';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useOverlay } from './OverlayContext';
import { useNetwork, useSigner } from 'wagmi';
import { UIAttestations, UIContribution } from '@govrn/ui-types';
import { useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { formatDate } from '../utils/date';
import { ContributionFormValues } from '../types/forms';
import { GovrnProtocol } from '@govrn/protocol-client';
import { MintContributionType } from '../types/mint';
import { UserContext } from './UserContext';
import { Pagination } from './utils';
import { PROTOCOL_URL } from '../utils/constants';
import { ChainIdError } from '@govrn/protocol-client';
import pluralize from 'pluralize';

const ITEMS_PER_PAGE = 20;

export const ContributionContext = createContext<ContributionContextType>(
  {} as ContributionContextType,
);

type UserContributionsDateRangeCountType = {
  count: number;
  date: string;
  guildIds?: number[] | null | undefined;
  name?: string | null | undefined;
};

interface ContributionContextProps {
  children: React.ReactNode;
}

export const ContributionsContextProvider: React.FC<
  ContributionContextProps
> = ({ children }: ContributionContextProps) => {
  const { userData } = useContext(UserContext);
  const toast = useToast();
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const queryClient = useQueryClient();

  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });
  const { setModals } = useOverlay();

  const [contribution, setContribution] = useState<UIContribution>(
    {} as UIContribution,
  );

  const [daoContributionPage, setDaoContributionPage] = useState(0);
  const [isDaoContributionLoading, setDaoContributionLoading] = useState(true);
  const [isDaoContributionsHaveMore, setDaoContributionHasMore] =
    useState(true);
  const [daoContributions, setDaoContributions] = useState<UIContribution[]>(
    [],
  );

  const [userAttestations, setUserAttestations] =
    useState<UIAttestations | null>(null);

  const [userContributionsDateRangeCount, setUserContributionsDateRangeCount] =
    useState<UserContributionsDateRangeCountType[]>([]);

  const userId = userData?.id;

  useEffect(() => {
    getDaoContributions(daoContributionPage);
  }, [daoContributionPage, userData?.id]);

  const getContribution = async (id: number) => {
    try {
      const contributionResponse = await govrn.contribution.get(id);
      if (contributionResponse) {
        const formattedResponse = {
          ...contributionResponse,
          date_of_engagement: formatDate(
            contributionResponse.date_of_engagement,
          ),
          date_of_submission: formatDate(
            contributionResponse.date_of_submission,
          ),
        };
        setContribution(formattedResponse);
        return formattedResponse;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const loadNextDaoContributionsPage = () => {
    setDaoContributionPage(daoContributionPage + 1);
  };

  const getDaoContributions = async (page = 0): Promise<UIContribution[]> => {
    setDaoContributionLoading(page === 0);
    try {
      const daoContributionsResponse = (
        await govrn.contribution.list({
          first: ITEMS_PER_PAGE,
          skip: page * ITEMS_PER_PAGE,
        })
      ).result;

      const mappedValues = daoContributionsResponse.map(c => ({
        ...c,
        date_of_engagement: formatDate(c.date_of_engagement),
        date_of_submission: formatDate(c.date_of_submission),
        updatedAt: formatDate(c.updatedAt),
      }));

      setDaoContributions([...daoContributions, ...mappedValues]);
      setDaoContributionHasMore(
        daoContributionsResponse.length === ITEMS_PER_PAGE,
      );

      return daoContributions;
    } catch (error) {
      console.error(error);
    } finally {
      setDaoContributionLoading(false);
    }
    return [];
  };

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

  const getUserAttestations = async () => {
    try {
      if (!userData?.id) {
        throw new Error('getUserAttestations has no userData.id');
      }
      const userAttestationsResponse = await govrn.attestation.list({
        where: {
          user_id: { equals: userData?.id },
        },
        first: 1000,
      });
      setUserAttestations(userAttestationsResponse);
      return userAttestationsResponse;
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
        setMintProgress((prevState: number) => prevState + 1);
        toast({
          title: 'Contribution Successfully Minted',
          description: 'Your Contribution has been minted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (error) {
      console.log('error', error);
      toast({
        title: 'Unable to Mint Contribution',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const bulkMintContributions = async (
    contributions: (MintContributionType['original'] & {
      ipfsContentUri: string;
    })[],
  ) => {
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

        const minted = result.filter(i => i.status === 'fulfilled');
        const failedToMint = result
          .filter((i): i is PromiseRejectedResult => i.status === 'rejected')
          .filter(i => i.reason instanceof ChainIdError);

        if (minted.length > 0) {
          toast({
            title: 'Contribution Successfully Minted',
            description: `${pluralize(
              'Contribution',
              minted.length,
              true,
            )} has been minted.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        }

        if (failedToMint.length > 0) {
          toast({
            title: 'Failed to Mint Some Contribution',
            description: `${pluralize(
              'Contribution',
              failedToMint.length,
              true,
            )} failed to mint.`,
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: 'top-right',
          });
        }
      }
    } catch (error) {
      console.log('error', error);
      toast({
        title: 'Unable to Mint Contribution',
        description: 'Something went wrong minting. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
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

        toast({
          title: 'Contribution Successfully deleted',
          description: 'Your Contribution has been deleted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (e) {
      console.log('error', e);
      toast({
        title: 'Unable to delete contribution',
        description: `Something went wrong. Please try again: ${e}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
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
        await getDaoContributions();
        toast({
          title: 'Attestation Successfully Minted',
          description: 'Your Attestation has been minted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (error) {
      console.log('error', error);
      toast({
        title: 'Unable to Mint Attestation',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
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
        toast({
          title: 'Attestation Successfully Added',
          description: 'Your Attestation has been added.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        await getDaoContributions();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Unable to Add Attestation',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const updateContribution = async (
    contribution: UIContribution,
    values: ContributionFormValues,
    bulkItemCount?: number,
  ) => {
    const toastUpdateContributionId = 'toast-update-contribution';
    try {
      if (userData?.id !== contribution.user.id) {
        throw new Error('You can only edit your own Contributions.');
      }

      if (contribution.status.name !== 'staging') {
        throw new Error(
          'You can only edit Contributions with a Staging status.',
        );
      }
      await govrn.custom.updateUserContribution({
        address: userData.address,
        chainName: 'ethereum',
        userId: userData.id,
        name: values.name ?? contribution.name,
        details: values.details ?? contribution.details,
        proof: values.proof ?? contribution.proof,
        activityTypeName:
          values.activityType ?? contribution.activity_type.name,
        dateOfEngagement: new Date(
          values.engagementDate ?? contribution.date_of_engagement,
        ).toISOString(),
        status: 'staging',
        guildId: values.daoId === null ? null : Number(values.daoId),
        contributionId: contribution.id,
        currentGuildId: contribution.guilds[0]?.guild?.id || undefined,
      });
      queryClient.invalidateQueries(['contributionList']);
      queryClient.invalidateQueries(['contributionInfiniteList']);
      if (!toast.isActive(toastUpdateContributionId)) {
        toast({
          id: toastUpdateContributionId,
          title: `Contribution ${
            bulkItemCount && bulkItemCount > 0 ? 'Reports' : 'Report'
          } Updated`,
          description: `Your Contribution ${
            bulkItemCount && bulkItemCount > 0 ? 'Reports have' : 'Report has'
          } been updated.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
      setModals({ editContributionFormModal: false });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Unable to Update Contribution',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <ContributionContext.Provider
      value={{
        contribution,
        createAttestation,
        daoContributions,
        daoContributionPagination: {
          next: loadNextDaoContributionsPage,
          hasMore: isDaoContributionsHaveMore,
        },
        deleteContribution,
        getContribution,
        getDaoContributions,
        getUserContributionsCount,
        isDaoContributionLoading,
        mintAttestation,
        bulkMintContributions,
        mintContribution,
        setContribution,
        setDaoContributions,
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
  daoContributions: UIContribution[];
  daoContributionPagination: Pagination;
  getUserContributionsCount: (
    startDate: string | Date,
    endDate: string | Date,
    guildIds?: number[] | null | undefined,
    excludeUnassigned?: boolean[] | undefined,
  ) => Promise<UserContributionsDateRangeCountType[] | undefined>;
  getContribution: (id: number) => Promise<UIContribution | null>;
  getDaoContributions(page: number): Promise<UIContribution[]>;
  isDaoContributionLoading: boolean;
  mintAttestation: (
    contribution: MintContributionType['original'],
  ) => Promise<void>;
  bulkMintContributions: (
    contributions: (MintContributionType['original'] & {
      ipfsContentUri: string;
    })[],
  ) => void;
  mintContribution: (
    contribution: MintContributionType['original'],
    ipfsContentUri: string,
    setMintProgress: Dispatch<SetStateAction<number>>,
  ) => void;

  setContribution: (data: UIContribution) => void;
  setDaoContributions: (data: UIContribution[]) => void;

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
