import React, {
  useContext,
  createContext,
  useEffect,
  useRef,
  // useState,
} from 'react';
import { useWallet } from '@raidguild/quiver';

export const UserContext: any = createContext(null);
interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  return (
    <UserContext.Provider
      value={
        {
          // userData,
          // setUserData,
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { userData, setUserData } = useContext(UserContext);
  return {
    userData,
    setUserData,
  };
};
