import React, { createContext, useContext } from 'react';
import { useAccount } from 'wagmi';
import { UIUser } from '@govrn/ui-types';
import { useAuth } from './AuthContext';
import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import useUserByAddress from '../hooks/useUserByAddress';

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { authFlow } = useAuth();
  const { address } = useAccount({
    onConnect: () => authFlow(),
  });

  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const { data: userDataByAddress, isLoading: isUserLoading } =
    useUserByAddress({ address: address || '' });
  let user;
  if (userDataByAddress) {
    user = userDataByAddress[0];
  }

  return (
    <UserContext.Provider
      value={{
        govrnProtocol: govrn,
        isUserLoading,
        userData: user,
        userDataByAddress: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

type UserContextType = {
  govrnProtocol: GovrnProtocol;
  isUserLoading: boolean;
  userData?: UIUser | null;
  userDataByAddress?: UIUser | null;
};

export const useUser = (): UserContextType => useContext(UserContext);
