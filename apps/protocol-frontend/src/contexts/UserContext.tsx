import { ethers } from 'ethers';
import React, {
  useCallback,
  useContext,
  createContext,
  useEffect,
  useState,
} from 'react';
import { useToast } from '@chakra-ui/react';
import { useOverlay } from './OverlayContext';
import { useWallet } from '@raidguild/quiver';
import { GovrnProtocol } from '@govrn/protocol-client';
import { createSiweMessage } from '../utils/siwe';
import { Navigate } from 'react-router-dom';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;
const verifyURL = `${import.meta.env.VITE_PROTOCOL_BASE_URL}/verify`;

export const UserContext: any = createContext(null);
interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { isConnected, address, chainId, provider } = useWallet();
  const signer = provider?.getSigner();
  const toast = useToast();
  const govrn = new GovrnProtocol(protocolUrl, { credentials: 'include' });
  const { setModals } = useOverlay();

  const [userAddress, setUserAddress] = useState<any>(null);
  const [userDataByAddress, setUserDataByAddress] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [userContributions, setUserContributions] = useState<any>(null);
  const [daoContributions, setDaoContributions] = useState<any>(null);
  const [userAttestations, setUserAttestations] = useState<any>(null);
  const [userActivityTypes, setUserActivityTypes] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    setUserAddress(address);
  }, [isConnected, address, userAddress]);

  const authenticateAddress = useCallback(async () => {
    if (!chainId || !provider) {
      return;
    }
    setIsAuthenticating(true);
    const message = await createSiweMessage(
      userAddress,
      'Sign in with Ethereum to the app.',
      chainId
    );
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    try {
      await fetch(verifyURL, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ message, signature }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsAuthenticated(true);
    } catch (e) {
      console.error(e);
    }
    setIsAuthenticating(false);
  }, [userAddress, provider, chainId]);

  useEffect(() => {
    if (isConnected && !isAuthenticated && userAddress) {
      authenticateAddress();
    }
  }, [isConnected, isAuthenticated, authenticateAddress, userAddress]);

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
    if (!address) {
      return;
    }
    try {
      console.log(govrn);
      const userDataByAddressResponse = await govrn.custom.listUserByAddress(
        address
      );
      console.log('response', userDataByAddressResponse);
      if (userDataByAddressResponse.length > 0) {
        setUserDataByAddress(userDataByAddressResponse[0]);
      }

      return userDataByAddress;
    } catch (error) {
      console.error(error);
    }
  }, [address]);

  const getUserContributions = async () => {
    try {
      const userContributionsResponse = await govrn.contribution.list({
        where: {
          user_id: { equals: userData?.id },
        },
        first: 1000,
      });
      setUserContributions(userContributionsResponse);
      return userContributionsResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const getDaoContributions = async () => {
    try {
      const daoContributionsResponse = await govrn.contribution.list({
        // where: {
        //   user_id: { equals: userData?.id },
        // },
        first: 1000,
      });
      setDaoContributions(daoContributionsResponse);
      return daoContributionsResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserAttestations = async () => {
    try {
      const userAttestationsResponse = await govrn.attestation.list({
        where: {
          user_id: { equals: userAddress?.id },
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
      const userActivityTypesResponse = await govrn.activity_type.list({
        where: {
          users: {
            every: {
              user_id: { equals: userAddress?.id },
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
    navigate: any
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
      await govrn.custom.createUserContribution({
        address: userData.address,
        chainName: 'ethereum',
        userId: userData.id,
        name: values.name,
        details: values.details,
        proof: values.proof,
        activityTypeName: values.activityType,
        dateOfEngagement: new Date(values.engagementDate).toISOString(),
        status: 'staging',
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
      getUserActivityTypes();
      getUserContributions();
      getDaoContributions();
      reset({
        name: '',
        details: '',
        proof: '',
        activityType: values.activityType,
        engagementDate: values.engagementDate,
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
    setMintProgress: any
  ) => {
    try {
      if (provider) {
        await govrn.contribution.mint(
          {
            address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
            chainId: 31337,
            name: 'Localhost',
          }, // network config
          signer, // provider/signer
          userData.address, // user address
          contribution.id, // contribution id
          contribution.activityTypeId, // contribution activity type id
          userData.id, // user id
          {
            detailsUri: ethers.utils.toUtf8Bytes(ipfsContentUri),
            dateOfSubmission: new Date(contribution.submissionDate).getTime(),
            dateOfEngagement: new Date(contribution.engagementDate).getTime(),
          }, // details uri
          ethers.utils.toUtf8Bytes(contribution.name), // contribution name
          ethers.utils.toUtf8Bytes(contribution.details), // contribution details
          ethers.utils.toUtf8Bytes(contribution.proof) // contribution proof
        );
        getUserContributions();
        setMintProgress((prevState) => prevState + 1);
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

  const mintAttestation = async (contribution: any) => {
    try {
      if (provider) {
        await govrn.contribution.attest(
          {
            address: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
            chainId: 31337,
            name: 'Localhost',
          }, //network config
          signer, // signer/provider
          contribution.id, // contribution id
          contribution.activityTypeId, //activity type id
          userData.id, // user id
          {
            contribution: contribution.id,
            confidence: 0,
          } // attest args
        );
        getDaoContributions();
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
        title: 'Contribution Report Updated',
        description: 'Your Contribution report has been updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      getDaoContributions();
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

  const updateContribution = async (contribution: any, values: any) => {
    try {
      if (userData.id !== contribution.user.id) {
        throw new Error('You can only edit your own Contributions.');
      }

      if (contribution.status.name !== 'staging') {
        throw new Error(
          'You can only edit Contributions with a Staging status.'
        );
      }
      await govrn.custom.updateUserContribution({
        address: userData.address,
        chainName: 'ethereum',
        userId: userData.id,
        name: values.name,
        details: values.details,
        proof: values.proof,
        activityTypeName: values.activityType,
        dateOfEngagement: new Date(values.engagementDate).toISOString(),
        status: 'staging',
        contributionId: contribution.id,
      });
      getUserActivityTypes();
      getUserContributions();
      toast({
        title: 'Contribution Report Updated',
        description: 'Your Contribution report has been updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
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
        id: userData.id,
      });
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
      url: userData.url || '',
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

  return (
    <UserContext.Provider
      value={{
        userAddress,
        setUserAddress,
        userData,
        setUserData,
        userDataByAddress,
        setUserDataByAddress,
        userContributions,
        setUserContributions,
        daoContributions,
        setDaoContributions,
        userAttestations,
        setUserAttestations,
        userActivityTypes,
        setUserActivityTypes,
        createUser,
        createWaitlistUser,
        createContribution,
        createAttestation,
        mintContribution,
        mintAttestation,
        updateContribution,
        updateProfile,
        updateLinearEmail,
        isAuthenticated,
        isAuthenticating,
        authenticateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const {
    userAddress,
    setUserAddress,
    userDataByAddress,
    setUserDataByAddress,
    userData,
    setUserData,
    userContributions,
    setUserContributions,
    daoContributions,
    setDaoContributions,
    userAttestations,
    setUserAttestations,
    userActivityTypes,
    setUserActivityTypes,
    createUser,
    createWaitlistUser,
    createAttestation,
    createContribution,
    mintContribution,
    mintAttestation,
    updateContribution,
    updateProfile,
    updateLinearEmail,

    isAuthenticated,
    isAuthenticating,
    authenticateAddress,
  } = useContext(UserContext);
  return {
    userAddress,
    setUserAddress,
    userDataByAddress,
    setUserDataByAddress,
    userData,
    setUserData,
    userContributions,
    setUserContributions,
    daoContributions,
    setDaoContributions,
    userAttestations,
    setUserAttestations,
    userActivityTypes,
    setUserActivityTypes,
    createUser,
    createWaitlistUser,
    createAttestation,
    createContribution,
    mintContribution,
    mintAttestation,
    updateContribution,
    updateProfile,
    updateLinearEmail,
    isAuthenticated,
    isAuthenticating,
    authenticateAddress,
  };
};
