import React, { createContext, useContext, useState } from 'react';
import { useNetwork, useSigner } from 'wagmi';
import { UIAttestations, UIContribution } from '@govrn/ui-types';
import { useQueryClient } from '@tanstack/react-query';
import { networks } from '../utils/networks';
import { GovrnProtocol } from '@govrn/protocol-client';
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

  return (
    <ContributionContext.Provider
      value={{
        contribution,
        deleteContribution,
        getUserContributionsCount,
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
  getUserContributionsCount: (
    startDate: string | Date,
    endDate: string | Date,
    guildIds?: number[] | null | undefined,
    excludeUnassigned?: boolean[] | undefined,
  ) => Promise<UserContributionsDateRangeCountType[] | undefined>;
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
