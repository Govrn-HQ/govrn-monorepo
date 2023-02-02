import React, { createContext, useContext } from 'react';
import { useAccount } from 'wagmi';
import { UIUser } from '@govrn/ui-types';
import { useAuth } from './AuthContext';
import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import useUserByAddress from '../hooks/useUserByAddress';
import useUserGet from '../hooks/useUserGet';

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
    useUserByAddress({ address });
  const { data: userData } = useUserGet({ userId: userDataByAddress?.id });

  return (
    <UserContext.Provider
      value={{
        govrnProtocol: govrn,
        isUserLoading,
        userData,
        userDataByAddress,
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
