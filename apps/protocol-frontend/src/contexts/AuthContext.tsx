import React, { createContext, useCallback, useState } from 'react';
import { useWallet } from '@raidguild/quiver';
import { createSiweMessage } from '../utils/siwe';
import { VERIFY_URL, SIWE_ACTIVE_URL } from '../utils/constants';

export type AuthContextType = {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  checkExistingCreds: boolean;
};

type ProviderProps = {
  children?: React.ReactNode;
};

const initialContext = {
  isAuthenticating: false,
  isAuthenticated: false,
  checkExistingCreds: false,
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const { chainId, provider } = useWallet();
  const checkAuthentication = async () => {
    setIsAuthenticating(true);
    try {
      await fetch(SIWE_ACTIVE_URL, { credentials: 'include' });
      setIsAuthenticated(true);
      setIsAuthenticating(false);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };
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
      await fetch(VERIFY_URL, {
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

  // redirect to authenticate unless
  // route is whitelisted

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAuthenticating }}>
      {children}
    </AuthContext.Provider>
  );
};
