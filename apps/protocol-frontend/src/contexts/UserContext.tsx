import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NavigateFunction } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { UIGuild, UIUser, UIGuilds } from '@govrn/ui-types';
import {
  ContributionFormValues,
  CreateUserFormValues,
  ProfileFormValues,
} from '../types/forms';
import { useAuth } from './AuthContext';
import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = ({
  children,
}: UserContextProps) => {
  const { isAuthenticated, authFlow } = useAuth();
  const { isConnected, address } = useAccount({
    onConnect: () => authFlow(),
    // onDisconnect:
  });

  const toast = useToast();
  const govrn = new GovrnProtocol(PROTOCOL_URL, { credentials: 'include' });

  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [userDataByAddress, setUserDataByAddress] = useState<UIUser | null>(
    null,
  );
  const [isUserLoading, setUserLoading] = useState(false);

  const [userData, setUserData] = useState<UIUser | null>(null);

  useEffect(() => {
    if (address) {
      setUserAddress(address);
    }
  }, [isConnected, address, userAddress]);

  const getUser = async () => {
    try {
      if (!userDataByAddress?.id) {
        throw new Error('No address for user');
      }
      const userDataResponse = await govrn.user.get(userDataByAddress?.id);
      setUserData(userDataResponse);
      return userDataResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserByAddress = useCallback(async () => {
    setUserLoading(true);
    if (!address) {
      return;
    }
    try {
      const userDataByAddressResponse = await govrn.custom.listUserByAddress(
        address,
      );

      if (userDataByAddressResponse.length > 0) {
        setUserDataByAddress(userDataByAddressResponse[0]);
        return userDataByAddressResponse[0];
      }
      setUserDataByAddress(null);
      return [];
    } catch (error) {
      console.error(error);
    } finally {
      setUserLoading(false);
    }
  }, [address]);

  const createUser = async (
    values: CreateUserFormValues,
    address: string,
    navigate?: NavigateFunction,
  ) => {
    try {
      if (!values.username) {
        throw new Error('User has no username');
      }
      await govrn.user.create({
        // active: false,
        address: address,
        username: values.username,
      });
      toast({
        title: 'User Created',
        description: `Your username has been created with your address: ${address}. Let's report your first Contribution!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      if (navigate) {
        navigate('/report');
      }
    } catch (error) {
      toast({
        title: 'Unable to Create User',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const createWaitlistUser = async (
    values: CreateUserFormValues,
    address: string,
    navigate: NavigateFunction,
  ) => {
    try {
      await govrn.user.create({
        address: address,
        email: values.email || '',
        username: values.username || '',
      });
      toast({
        title: 'Successfully Joined Waitlist',
        description: `Thank you for your interest in Govrn! We'll reach out when we open to new users.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Unable to Join Waitlist',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const updateProfile = async (values: ProfileFormValues) => {
    try {
      await govrn.custom.updateUser({
        name: values.name || '',
        // eslint-disable-next-line
        id: userData?.id!,
      });
      await getUser();
      toast({
        title: 'User Profile Updated',
        description: 'Your Profile has been updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Unable to Update Profile',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const disconnectLinear = async (args: {
    linearUserId: number;
    userId: number;
    username: string;
  }) => {
    try {
      await govrn.custom.updateUser({
        name: args.username,
        id: args.userId,
        disconnectLinearId: args.linearUserId,
      });
      await getUser();
      toast({
        title: 'Disconnected linear user',
        description: 'Your linear user has been disconnected',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Failed to disconnect linear user',
        description: `Something went wrong. Please try again: ${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    if (address && isAuthenticated) {
      getUserByAddress();
    }
  }, [address, isAuthenticated, getUserByAddress]);

  useEffect(() => {
    if (userDataByAddress && isAuthenticated) {
      getUser();
    }
  }, [userDataByAddress, isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        createUser,
        createWaitlistUser,
        disconnectLinear,
        govrnProtocol: govrn,
        isUserLoading,
        setUserAddress,
        setUserData,
        setUserDataByAddress,
        updateProfile,
        userAddress,
        userData,
        userDataByAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

type UserContextType = {
  createUser: (values: CreateUserFormValues, address: string) => void;
  createWaitlistUser: (
    values: CreateUserFormValues,
    address: string,
    navigate: NavigateFunction,
  ) => void;
  disconnectLinear: (args: {
    linearUserId: number;
    userId: number;
    username: string;
  }) => Promise<void>;
  govrnProtocol: GovrnProtocol;
  isUserLoading: boolean;
  setUserAddress: (arg0: string) => void;
  setUserData: (arg0: UIUser) => void;
  setUserDataByAddress: (arg0: UIUser) => void;
  updateProfile: (arg0: ContributionFormValues) => void;
  userAddress: string | null;
  userData: UIUser | null;
  userDataByAddress: UIUser | null;
};

export const useUser = (): UserContextType => useContext(UserContext);
