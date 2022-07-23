import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useWallet } from '@raidguild/quiver';
import { createSiweMessage } from '../utils/siwe';
import { VERIFY_URL, SIWE_ACTIVE_URL } from '../utils/constants';

export type AuthContextType = {
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  checkExistingCreds: boolean;
  authFlow: () => void;
  authenticateAddress: () => void;
};

type ProviderProps = {
  children?: React.ReactNode;
};

const initialContext = {
  isAuthenticating: false,
  isAuthenticated: false,
  checkExistingCreds: false,
  authFlow: () => {
    return;
  },
  authenticateAddress: () => {
    return;
  },
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [checkExistingCreds, setCheckExistingCreds] = useState(false);

  const { chainId, provider, isConnected, address } = useWallet();
  const checkAuthentication = async () => {
    setIsAuthenticating(true);
    try {
      const resp = await fetch(SIWE_ACTIVE_URL, { credentials: 'include' });
      setIsAuthenticating(false);
      if (resp.status >= 400) {
        return false;
      }
      setIsAuthenticated(true);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const authenticateAddress = useCallback(async () => {
    if (!chainId || !provider || !address) {
      return;
    }
    setIsAuthenticating(true);
    const message = await createSiweMessage(
      address,
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
  }, [address, provider, chainId]);

  const authFlow = useCallback(async () => {
    const existing = await checkAuthentication();
    setCheckExistingCreds(true);
    // non redirect route
    const noRedirect = ['/'].find((el) => el === window.location.hash);
    if (noRedirect) {
      // redirect
      return true;
    }
    if (!existing) {
      await authenticateAddress();
    }
  }, [authenticateAddress]);

  useEffect(() => {
    const unauthenticatedRoutes = ['#/linear'];
    const publicRoute = unauthenticatedRoutes.find(
      (el) => el === window.location.hash
    );
    if (isConnected && !isAuthenticated && !publicRoute) {
      authFlow();
    }
  }, [isConnected, isAuthenticated, authFlow]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAuthenticating,
        checkExistingCreds,
        authFlow,
        authenticateAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    isAuthenticated,
    isAuthenticating,
    authFlow,
    checkExistingCreds,
    authenticateAddress,
  } = useContext(AuthContext);
  return {
    isAuthenticated,
    isAuthenticating,
    authFlow,
    checkExistingCreds,
    authenticateAddress,
  };
};
