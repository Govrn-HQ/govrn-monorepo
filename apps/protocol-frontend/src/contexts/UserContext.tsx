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
        setUserDataByAddress(userDataByAddressResponse);
        setUserData(userDataByAddressResponse);
        return userDataByAddress;
      } catch (error) {
        console.error(error);
      }
    };
    getUserByAddress();
  }, [userAddress]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDataResponse = await govrn.user.get(1);
        setUserData(userDataResponse);
        return userDataResponse;
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [userDataByAddress]);

  useEffect(() => {
    const getUserContributions = async () => {
      try {
        const userContributionsResponse = await govrn.contribution.list({
          where: {
            user_id: { equals: userAddress.id },
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
          userData.id
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
          userData.id
        );
        setUserAttestations(userAttestationsResponse);
        return userAttestationsResponse;
      } catch (error) {
        console.error(error);
      }
    };
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
        userAttestations,
        setUserAttestations,
        userActivityTypes,
        setUserActivityTypes,
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
  };
};
