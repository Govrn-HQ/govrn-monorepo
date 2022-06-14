import React, { useContext, createContext, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useOverlay } from './OverlayContext';
import { useWallet } from '@raidguild/quiver';
import { GovrnProtocol } from '@govrn/protocol-client';

// TODO: Clean up the Context -- there are some duplicate function definitions inside the useEffects that can be removed and called

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

export const UserContext: any = createContext(null);
interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { isConnected, address } = useWallet();
  const toast = useToast();
  const govrn = new GovrnProtocol(protocolUrl);
  const { setModals } = useOverlay();

  const [userAddress, setUserAddress] = useState<any>(null);
  const [userDataByAddress, setUserDataByAddress] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [userContributions, setUserContributions] = useState<any>(null);
  const [daoContributions, setDaoContributions] = useState<any>(null);
  const [userAttestations, setUserAttestations] = useState<any>(null);
  const [userActivityTypes, setUserActivityTypes] = useState<any>(null);

  useEffect(() => {
    setUserAddress(address);
  }, [isConnected, address, userAddress]);

  const getUser = async () => {
    try {
      const userDataResponse = await govrn.user.get(userDataByAddress.id);

      setUserData(userDataResponse);
      return userDataResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserByAddress = async () => {
    try {
      const userDataByAddressResponse = await govrn.user.list({
        where: { address: { equals: address } },
      });

      if (userDataByAddressResponse.length > 0) {
        setUserDataByAddress(userDataByAddressResponse[0]);
      }

      return userDataByAddress;
    } catch (error) {
      console.error(error);
    }
  };

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
      const userActivityTypesResponse = await govrn.activity_type.list(
        userData?.id
      );
      setUserActivityTypes(userActivityTypesResponse);

      return userActivityTypesResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const createContribution = async (values: any, reset: any, navigate: any) => {
    try {
      await govrn.contribution.create({
        data: {
          user: {
            connectOrCreate: {
              create: {
                address: userData.address,
                chain_type: {
                  create: {
                    name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                  },
                },
              },
              where: {
                id: userData.id,
              },
            },
          },
          name: values.name,
          details: values.details,
          proof: values.proof,
          activity_type: {
            connectOrCreate: {
              create: {
                name: values.activityType,
              },
              where: {
                name: values.activityType,
              },
            },
          },
          date_of_engagement: new Date(values.engagementDate).toISOString(),
          status: {
            connectOrCreate: {
              create: {
                name: 'staging',
              },
              where: {
                name: 'staging',
              },
            },
          },
        },
      });
      toast({
        title: 'Contribution Report Added',
        description: 'Your Contribution report has been recorded.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      getUserContributions();
      reset();
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

  const createAttestation = async (contribution: any, values: any) => {
    try {
      const response = await govrn.attestation.create({
        data: {
          user: {
            connectOrCreate: {
              create: {
                address: userData.address,
                chain_type: {
                  create: {
                    name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                  },
                },
              },
              where: {
                id: userData.id,
              },
            },
          },
          date_of_attestation: new Date(Date.now()).toISOString(),
          contribution: {
            connect: {
              id: contribution.id,
            },
          },
          confidence: {
            connectOrCreate: {
              create: {
                name: '0',
              },
              where: {
                name: '0',
              },
            },
          },
        },
      });
      toast({
        title: 'Contribution Report Updated',
        description: 'Your Contribution report has been updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      console.log('response', response);
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
      await govrn.contribution.update({
        data: {
          user: {
            connectOrCreate: {
              create: {
                address: userData.address,
                chain_type: {
                  create: {
                    name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                  },
                },
              },
              where: {
                id: userData.id,
              },
            },
          },
          name: {
            set: values.name,
          },
          details: {
            set: values.details,
          },
          proof: {
            set: values.proof,
          },
          activity_type: {
            connectOrCreate: {
              create: {
                name: values.activityType,
              },
              where: {
                name: values.activityType,
              },
            },
          },
          date_of_engagement: {
            set: new Date(values.engagementDate).toISOString(),
          },
          status: {
            connectOrCreate: {
              create: {
                name: 'staging',
              },
              where: {
                name: 'staging',
              },
            },
          },
        },
        where: {
          id: contribution.id,
        },
      });
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
      await govrn.user.update(
        { name: { set: values.name } },
        { id: userData.id }
      );
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
    if (address) {
      getUserByAddress();
    }
  }, [address]);

  useEffect(() => {
    if (userDataByAddress) {
      getUser();
    }
  }, [userDataByAddress]);

  useEffect(() => {
    if (userData !== null) {
      getUserContributions();
    }
  }, [userData]);

  useEffect(() => {
    if (userData !== null) {
      getDaoContributions();
    }
  }, [userData]);

  useEffect(() => {
    getUserActivityTypes();
  }, [userData]);

  useEffect(() => {
    getUserAttestations();
  }, [userData]);

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
        createContribution,
        createAttestation,
        updateContribution,
        updateProfile,
        updateLinearEmail,
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
    createAttestation,
    createContribution,
    updateContribution,
    updateProfile,
    updateLinearEmail,
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
    createAttestation,
    createContribution,
    updateContribution,
    updateProfile,
    updateLinearEmail,
  };
};
