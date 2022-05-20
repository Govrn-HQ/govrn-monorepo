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
  const [userAddress, setUserAddress] = useState<any>(null);

  const { isConnected, address } = useWallet();

  useEffect(() => {
    setUserAddress(address);
  }, [isConnected, address, userAddress]);

  return (
    <UserContext.Provider
      value={{
        userAddress,
        setUserAddress,
        // userData,
        // setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { userAddress, setUserAddress, userData, setUserData } =
    useContext(UserContext);
  return {
    userAddress,
    setUserAddress,
    // userData,
    // setUserData,
  };
};
