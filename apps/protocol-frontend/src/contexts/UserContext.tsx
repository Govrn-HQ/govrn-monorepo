import { ethers } from 'ethers';
import React, {
  createContext,
  Provider,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useToast } from '@chakra-ui/react';
import { useOverlay } from './OverlayContext';
import { useAccount, useNetwork, useSigner } from 'wagmi';
import {
  UIActivityType,
  UIContribution,
  UIGuild,
  UIUser,
} from '@govrn/ui-types';
import type { Signer } from 'ethers';
import { createSiweMessage } from '../utils/siwe';
import { networks } from '../utils/networks';
import { formatDate } from '../utils/date';
import { useAuth } from './AuthContext';
import { GovrnProtocol } from '@govrn/protocol-client';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const { isAuthenticated, authFlow } = useAuth();
  const { isConnected, address } = useAccount({
    onConnect: () => authFlow(),
    // onDisconnect:
  });

  const toast = useToast();
  const govrn = new GovrnProtocol(protocolUrl, { credentials: 'include' });
  const { setModals } = useOverlay();

  const [userAddress, setUserAddress] = useState<any>(null);
  const [userDataByAddress, setUserDataByAddress] = useState<any>(null);
  const [isUserLoading, setUserLoading] = useState(false);

  const [userData, setUserData] = useState<UIUser>({} as UIUser);
  const [contribution, setContribution] = useState<UIContribution>(
    {} as UIContribution,
  );
  const [userContributions, setUserContributions] = useState<UIContribution[]>(
    [],
  );
  const [daoContributions, setDaoContributions] = useState<UIContribution[]>(
    [],
  );
  const [userAttestations, setUserAttestations] = useState<any>(null);
  const [userActivityTypes, setUserActivityTypes] = useState<UIActivityType[]>(
    [],
  );
  const [allDaos, setAllDaos] = useState<UIGuild[]>([]);

  useEffect(() => {
    setUserAddress(address);
    // const x = async (idx) => {
    //     const y = await deleteContribution(idx)
    // }

    //x(idx)
  }, [isConnected, address, userAddress]);

  const getUser = async () => {
    try {
      const userDataResponse = await govrn.user.get(userDataByAddress.id);

      setUserData(userDataResponse);
      return userDataResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserByAddress = useCallback(async () => {
    setUserLoading(true);
    if (!address) {
      return;
    }
    try {
      const userDataByAddressResponse = await govrn.custom.listUserByAddress(
        address,
      );

      if (userDataByAddressResponse.length > 0) {
        setUserDataByAddress(userDataByAddressResponse[0]);
      }

      return userDataByAddress;
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  }, [address]);

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
    } catch (error) {
      console.error(error);
    }
  };

  const getUserContributions = async () => {
    try {
      if (!userData?.id) {
        throw new Error('getUserContributions has no userData.id');
      }
      const userContributionsResponse = await govrn.contribution.list({
        where: {
          user_id: { equals: userData?.id },
        },
        first: 1000,
      });
      setUserContributions(
        userContributionsResponse.map(c => ({
          ...c,
          date_of_engagement: formatDate(c.date_of_engagement),
          date_of_submission: formatDate(c.date_of_submission),
        })),
      );
      return userContributionsResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const getDaoContributions = async () => {
    try {
      const daoContributionsResponse = await govrn.contribution.list({
        first: 1000,
      });
      setDaoContributions(
        daoContributionsResponse.map(c => ({
          ...c,
          date_of_engagement: formatDate(c.date_of_engagement),
          date_of_submission: formatDate(c.date_of_submission),
          updatedAt: formatDate(c.updatedAt),
        })),
      );
      return daoContributionsResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserAttestations = async () => {
    try {
      if (!userData?.id) {
        throw new Error('getUserActivityTypes has no userData.id');
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

  const getUserActivityTypes = async () => {
    try {
      if (!userData?.id) {
        throw new Error('getUserActivityTypes has no userData.id');
      }
      const userActivityTypesResponse = await govrn.activity_type.list({
        where: {
          users: {
            every: {
              user_id: { equals: userData?.id },
            },
          },
        },
        first: 1000,
      });
      setUserActivityTypes(userActivityTypesResponse);

      return userActivityTypesResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllDaos = async () => {
    try {
      const allDaosResponse = await govrn.guild.list({ first: 100 });
      setAllDaos(allDaosResponse);
      return allDaosResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (values: any, address: string, navigate?: any) => {
    try {
      await govrn.user.create({
        // active: false,
        address: address,
        username: values.username,
      });
      toast({
        title: 'User Created',
        description: `Your username has been created with your address: ${address}. Let's report your first Contribution!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      navigate('/report');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Unable to Create User',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const createWaitlistUser = async (
    values: any,
    address: string,
    navigate: any,
  ) => {
    try {
      await govrn.user.create({
        address: address,
        email: values.email,
        username: values.username,
      });
      toast({
        title: 'Successfully Joined Waitlist',
        description: `Thank you for your interest in Govrn! We'll reach out when we open to new users.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Unable to Join Waitlist',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const createContribution = async (values: any, reset: any, navigate: any) => {
    try {
      const resp = await govrn.custom.createUserContribution({
        address: userData.address,
        chainName: 'ethereum',
        userId: userData.id,
        name: values.name,
        details: values.details,
        proof: values.proof,
        activityTypeName: values.activityType,
        dateOfEngagement: new Date(values.engagementDate).toISOString(),
        status: 'staging',
        guildId: values.daoId,
      });
      toast({
        title: 'Contribution Report Added',
        description:
          'Your Contribution report has been recorded. Add another Contribution report or check out your Contributions.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      await getUserActivityTypes();
      await getUserContributions();
      await getDaoContributions();
      reset({
        name: '',
        details: '',
        proof: '',
        activityType: values.activityType,
        date_of_engagement: values.engagementDate,
      });
      navigate('/contributions');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Unable to Report Contribution',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const mintContribution = async (
    contribution: any,
    ipfsContentUri: string,
    setMintProgress: any,
  ) => {
    console.log(signer);
    console.log(chain?.id);
    try {
      if (signer && chain?.id) {
        await govrn.contribution.mint(
          {
            address: networks[chain?.id].govrnContract,
            chainId: chain?.id,
            name: networks[chain?.id].name,
          }, // network config
          signer, // provider/signer
          userData.address, // user address
          contribution.id, // contribution id
          contribution.activityTypeId, // contribution activity type id
          userData.id, // user id
          {
            detailsUri: ethers.utils.toUtf8Bytes(ipfsContentUri),
            dateOfSubmission: new Date(
              contribution.date_of_submission,
            ).getTime(),
            dateOfEngagement: new Date(contribution.engagementDate).getTime(),
          }, // details uri
          ethers.utils.toUtf8Bytes(contribution.name), // contribution name
          ethers.utils.toUtf8Bytes(contribution.details), // contribution details
          ethers.utils.toUtf8Bytes(contribution.proof), // contribution proof
        );
        await getUserContributions();
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
        await getUserContributions();

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

  const mintAttestation = async (contribution: any) => {
    try {
      if (signer && chain?.id) {
        await govrn.contribution.attest(
          {
            address: networks[chain?.id].govrnContract,
            chainId: chain?.id,
            name: networks[chain?.id].name,
          }, //network config
          signer, // signer/provider
          0, // attestation id
          contribution.activityTypeId, //activity type id
          userData.id, // user id
          {
            contribution: contribution.onChainId,
            confidence: 0,
          }, // attest args
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

  const createAttestation = async (contribution: any, values: any) => {
    try {
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
    values: any,
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
        guildId: values.daoId,
        contributionId: contribution.id,
        currentGuildId: contribution.guilds[0]?.guild?.id || undefined,
      });
      await getUserActivityTypes();
      await getUserContributions();
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

  const updateProfile = async (values: any) => {
    try {
      await govrn.custom.updateUser({
        name: values.name,
        // eslint-disable-next-line
        id: userData?.id!,
      });
      await getUser();
      toast({
        title: 'User Profile Updated',
        description: 'Your Profile has been updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Unable to Update Profile',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const disconnectLinear = async (args: {
    linearUserId: number;
    userId: number;
    username: string;
  }) => {
    try {
      await govrn.custom.updateUser({
        name: args.username,
        id: args.userId,
        disconnectLinearId: args.linearUserId,
      });
      await getUser();
      toast({
        title: 'Disconnected linear user',
        description: 'Your linear user has been disconnected',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Failed to disconnect linear user',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const updateLinearEmail = async (values: any) => {
    const linearAssignee = {
      active: userData.active,
      displayName: userData.name,
      email: values.userLinearEmail,
      user: {
        connect: {
          id: userData.id,
        },
      },
      linear_id: userData.id.toString(), // linear_id exists outside of our db
      name: userData.name,
    };
    try {
      // TODO: maybe we should hide linear because
      // it won't work without some dao configuration
      // or setup on the workspace side
      await govrn.linear.user.upsert({
        create: linearAssignee,
        update: { email: { set: values.userLinearEmail } },
        where: { linear_id: userData.id.toString() },
      });
      toast({
        title: 'Linear Email Linked',
        description: 'Linear Email Address has been linked.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Unable to Link Linear Email Address',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    if (address && isAuthenticated) {
      getUserByAddress();
    }
  }, [address, isAuthenticated]);

  useEffect(() => {
    if (userDataByAddress && isAuthenticated) {
      getUser();
    }
  }, [userDataByAddress, isAuthenticated]);

  useEffect(() => {
    if (userData !== null && isAuthenticated) {
      getUserContributions();
    }
  }, [userData, isAuthenticated]);

  useEffect(() => {
    if (userData !== null && isAuthenticated) {
      getDaoContributions();
    }
  }, [userData, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      getUserActivityTypes();
    }
  }, [userData, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      getUserAttestations();
    }
  }, [userData, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      getAllDaos();
    }
  }, [userData, isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        allDaos,
        contribution,
        createAttestation,
        createContribution,
        createUser,
        createWaitlistUser,
        daoContributions,
        disconnectLinear,
        isUserLoading,
        getAllDaos,
        getContribution,
        mintAttestation,
        mintContribution,
        setAllDaos,
        setContribution,
        setDaoContributions,
        setUserActivityTypes,
        setUserAddress,
        setUserAttestations,
        setUserData,
        setUserDataByAddress,
        updateContribution,
        deleteContribution,
        updateLinearEmail,
        updateProfile,
        userActivityTypes,
        userAddress,
        userAttestations,
        userContributions,
        userData,
        userDataByAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

type UserContextType = {
  allDaos: UIGuild[];
  contribution: UIContribution;
  createAttestation: any;
  createContribution: any;
  createUser: any;
  createWaitlistUser: any;
  daoContributions: UIContribution[];
  disconnectLinear: any;
  isUserLoading: boolean;
  getAllDaos: any;
  getContribution: any;
  mintAttestation: any;
  mintContribution: any;
  setAllDaos: (data: UIGuild[]) => void;
  setContribution: (data: UIContribution) => void;
  setDaoContributions: (data: UIContribution[]) => void;
  setUserActivityTypes: (data: UIActivityType[]) => void;
  setUserAddress: any;
  setUserAttestations: any;
  setUserData: any;
  setUserDataByAddress: any;
  updateContribution: any;
  deleteContribution: any;
  updateLinearEmail: any;
  updateProfile: any;
  userActivityTypes: UIActivityType[];
  userAddress: any;
  userAttestations: any;
  userContributions: UIContribution[];
  userData: UIUser;
  userDataByAddress: any;
};

export const useUser = (): UserContextType => useContext(UserContext);
