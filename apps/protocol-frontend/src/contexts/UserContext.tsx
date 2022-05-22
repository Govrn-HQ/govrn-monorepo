import React, {
  useContext,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useWallet } from '@raidguild/quiver';
import { GovrnProtocol } from '@govrn/protocol-client';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

export const UserContext: any = createContext(null);
interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { isConnected, address } = useWallet();
  const govrn = new GovrnProtocol(protocolUrl);
  const [userAddress, setUserAddress] = useState<any>(null);
  const [userDataByAddress, setUserDataByAddress] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);

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
        return userDataByAddress;
      } catch (error) {
        console.error(error);
      }
    };
    getUserByAddress();
  }, [address]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDataResponse = await govrn.user.get(userDataByAddress[0].id);
        setUserData(userDataResponse);
        return userDataResponse;
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [userDataByAddress]);

  return (
    <UserContext.Provider
      value={{
        userAddress,
        setUserAddress,
        userData,
        setUserData,
        userDataByAddress,
        setUserDataByAddress,
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
  } = useContext(UserContext);
  return {
    userAddress,
    setUserAddress,
    userDataByAddress,
    setUserDataByAddress,
    userData,
    setUserData,
  };
};
