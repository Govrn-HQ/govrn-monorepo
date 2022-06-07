import React, {
  useContext,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useWallet } from '@raidguild/quiver';
import { GovrnProtocol } from '@govrn/protocol-client';
import { ChainName } from '../utils/definitions';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

export const UserContext: any = createContext(null);
interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { isConnected, address, chainId } = useWallet();
  const govrn = new GovrnProtocol(protocolUrl);
  const [userAddress, setUserAddress] = useState<any>(null);
  const [userDataByAddress, setUserDataByAddress] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [userContributions, setUserContributions] = useState<any>(null);
  const [userAttestations, setUserAttestations] = useState<any>(null);
  const [userActivityTypes, setUserActivityTypes] = useState<any>(null);

  useEffect(() => {
    setUserAddress(address);
  }, [isConnected, address, userAddress]);

  useEffect(() => {
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
    if (address) {
      getUserByAddress();
    }
  }, [address]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDataResponse = await govrn.user.get(userDataByAddress.id);
        setUserData(userDataResponse);
        return userDataResponse;
      } catch (error) {
        console.error(error);
      }
    };
    if (userDataByAddress) {
      getUser();
    }
  }, [userDataByAddress]);

  const getUserContributions = async () => {
    try {
      const userContributionsResponse = await govrn.contribution.list({
        where: {
          user_id: { equals: userAddress?.id },
        },
      });
      setUserContributions(userContributionsResponse);
      return userContributionsResponse;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getUserContributions = async () => {
      console.log('fetching contributions');
      try {
        const userContributionsResponse = await govrn.contribution.list({
          where: {
            user_id: { equals: userAddress?.id },
          },
        });
        setUserContributions(userContributionsResponse);
        return userContributionsResponse;
      } catch (error) {
        console.error(error);
      }
    };
    getUserContributions();
  }, [userData]);

  useEffect(() => {
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
    getUserActivityTypes();
  }, [userData]);

  useEffect(() => {
    const getUserAttestations = async () => {
      try {
        const userAttestationsResponse = await govrn.attestation.list(
          userData?.id
        );
        setUserAttestations(userAttestationsResponse);
        return userAttestationsResponse;
      } catch (error) {
        console.error(error);
      }
    };
    getUserAttestations();
  }, [userData]);

  const createContribution = async (values: any) => {
    try {
      const response = await govrn.contribution.create({
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
      console.log('contribution response', response);
      getUserContributions();
    } catch (error) {
      console.log(error);
    }
  };

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
        userAttestations,
        setUserAttestations,
        userActivityTypes,
        setUserActivityTypes,
        createContribution,
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
    userAttestations,
    setUserAttestations,
    userActivityTypes,
    setUserActivityTypes,
    createContribution,
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
    userAttestations,
    setUserAttestations,
    userActivityTypes,
    setUserActivityTypes,
    createContribution,
  };
};
