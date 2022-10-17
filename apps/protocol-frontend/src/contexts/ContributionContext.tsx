import React, { createContext, useContext, useState } from 'react';
import { useNetwork, useSigner } from 'wagmi';
import { UIAttestations, UIContribution } from '@govrn/ui-types';
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

  const [contribution, setContribution] = useState<UIContribution>(
    {} as UIContribution,
  );

  const [userAttestations, setUserAttestations] =
    useState<UIAttestations | null>(null);

  const [userContributionsDateRangeCount, setUserContributionsDateRangeCount] =
    useState<UserContributionsDateRangeCountType[]>([]);

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
        contribution,
        deleteContribution,
        mintAttestation,
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
  mintAttestation: (contribution: AttestationTableType) => Promise<void>;
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
