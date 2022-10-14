import React, { createContext, useContext, useState } from 'react';
import { useNetwork, useSigner } from 'wagmi';
import { useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { GovrnProtocol } from '@govrn/protocol-client';
import { AttestationTableType } from '../types/table';
import { UserContext } from './UserContext';
import { PROTOCOL_URL } from '../utils/constants';
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

  const mintAttestation = async (contribution: AttestationTableType) => {
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
          userData.id,
          {
            contribution: contribution.onChainId,
            confidence: 0,
          },
          chain.id,
        );
        queryClient.invalidateQueries(['useContributionInfiniteList']);
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

  return (
    <ContributionContext.Provider
      value={{
        getUserContributionsCount,
        mintAttestation,
        setUserContributionsDateRangeCount,
        userContributionsDateRangeCount,
      }}
    >
      {children}
    </ContributionContext.Provider>
  );
};

type ContributionContextType = {
  getUserContributionsCount: (
    startDate: string | Date,
    endDate: string | Date,
    guildIds?: number[] | null | undefined,
    excludeUnassigned?: boolean[] | undefined,
  ) => Promise<UserContributionsDateRangeCountType[] | undefined>;
  mintAttestation: (contribution: AttestationTableType) => Promise<void>;
  setUserContributionsDateRangeCount: (
    data: UserContributionsDateRangeCountType[],
  ) => void;
  userContributionsDateRangeCount: UserContributionsDateRangeCountType[];
};

export const useContributions = (): ContributionContextType =>
  useContext(ContributionContext);
