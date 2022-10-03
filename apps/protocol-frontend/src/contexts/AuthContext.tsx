import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import useLogout from '../hooks/useLogout';
import { useAccount, useSignMessage, useNetwork, Connector } from 'wagmi';
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

  const { isConnected, address, connector } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { logout } = useLogout();

  const checkAuthentication = async () => {
    setIsAuthenticating(true);
    try {
      const resp = await fetch(`${SIWE_ACTIVE_URL}?address=${address}`, {
        credentials: 'include',
      });
      setIsAuthenticating(false);
      if (resp.status >= 400) {
        setIsAuthenticated(false);
        return false;
      }
      setIsAuthenticated(true);
      return true;
    } catch (e) {
      console.error(e);
      setIsAuthenticated(false);
      return false;
    }
  };
  const authenticateAddress = useCallback(async () => {
    if (!chain?.id || !address) {
      return;
    }
    setIsAuthenticating(true);
    try {
      const message = await createSiweMessage(
        address,
        'Sign in with Ethereum to the app.',
        chain?.id.toString(16),
      );

      const signature = await signMessageAsync({
        message: message || '',
      });
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
      logout();
      console.error(e);
    }
    setIsAuthenticating(false);
  }, [address, chain?.id]);

  const authFlow = useCallback(async () => {
    const existing = await checkAuthentication();
    setCheckExistingCreds(true);
    // non redirect route
    const noRedirect = ['/'].find(el => el === window.location.hash);
    if (noRedirect) {
      return true;
    }
    if (!existing) {
      await authenticateAddress();
    }
  }, [authenticateAddress]);

  useEffect(() => {
    const unauthenticatedRoutes = ['#/linear'];
    const publicRoute = unauthenticatedRoutes.find(
      el => el === window.location.hash,
    );
    if (isConnected && !isAuthenticated && !publicRoute) {
      authFlow();
    }
  }, [isConnected, isAuthenticated, authFlow]);

  // Add account and chain listeners
  useEffect(() => {
    const listeners = async (connector: Connector) => {
      const provider = await connector?.getProvider();
      // call logout
      provider.on('accountsChanged', async () => {
        setIsAuthenticated(false);
        await logout();
      });
      // logout;
      provider.on('disconnect', async () => {
        setIsAuthenticated(false);
        await logout();
      });
    };
    if (connector) {
      listeners(connector);
    }
  }, [connector, logout]);

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
