import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NavigateFunction } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { UIUser } from '@govrn/ui-types';
import {
  ContributionFormValues,
  CreateUserFormValues,
  ProfileFormValues,
} from '../types/forms';
import { useAuth } from './AuthContext';
import { GovrnProtocol } from '@govrn/protocol-client';
import { PROTOCOL_URL } from '../utils/constants';
import { useGovrnToast } from '@govrn/protocol-ui';

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
  });

  const toast = useGovrnToast();
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
  }, [isConnected, address]);

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

  const userDaos = new Map<
    number,
    {
      id: number;
      user_id: number;
      guild_id: number;
      guild: {
        id: number;
        name?: string | null;
      };
    }
  >();
  if (userData?.guild_users) {
    userData?.guild_users.forEach(guildUser => {
      userDaos.set(guildUser.guild_id, guildUser);
    });
  }

  const isUserDaoMember = (daoId: string): boolean => {
    return userDaos.has(parseInt(daoId));
  };

  const createUser = async (
    values: CreateUserFormValues,
    address: string,
    navigate?: NavigateFunction,
  ) => {
    try {
      if (!values.username) {
        throw new Error('User has no username');
      }
      const resp = await govrn.user.create({
        // active: false,
        address: address,
        username: values.username,
      });
      setUserData(resp);
      toast.success({
        title: 'User Created',
        description: `Your username has been created with your address: ${address}. Let's report your first contribution!`,
      });
      if (navigate) {
        navigate('/report');
      }
    } catch (error) {
      toast.error({
        title: 'Unable to Create User',
        description: `Something went wrong. Please try again: ${error}`,
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
      toast.success({
        title: 'Successfully Joined Waitlist',
        description: `Thank you for your interest in Govrn! We'll reach out when we open to new users.`,
      });
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      toast.error({
        title: 'Unable to Join Waitlist',
        description: `Something went wrong. Please try again: ${error}`,
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
      toast.success({
        title: 'User Profile Updated',
        description: 'Your profile has been updated',
      });
    } catch (error) {
      console.error(error);
      toast.error({
        title: 'Unable to Update Profile',
        description: `Something went wrong. Please try again: ${error}`,
      });
    }
  };

  const disconnectLinear = async (args: {
    linearUserId: number;
    userId: number;
    username: string;
  }) => {
    try {
      // deactivate linear id
      await govrn.custom.updateUser({
        name: args.username,
        id: args.userId,
        disconnectLinearId: args.linearUserId,
      });
      await getUser();
      toast.success({
        title: 'Disconnected linear user',
        description: 'Your linear user has been disconnected',
      });
    } catch (error) {
      console.error(error);
      toast.error({
        title: 'Failed to disconnect linear user',
        description: `Something went wrong. Please try again: ${error}`,
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
        isUserDaoMember,
        govrnProtocol: govrn,
        isUserLoading,
        setUserAddress,
        setUserData,
        setUserDataByAddress,
        updateProfile,
        userAddress,
        userDaos,
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
  isUserDaoMember: (daoId: string) => boolean;
  setUserAddress: (arg0: string) => void;
  setUserData: (arg0: UIUser) => void;
  setUserDataByAddress: (arg0: UIUser) => void;
  updateProfile: (arg0: ContributionFormValues) => void;
  userAddress: string | null;
  userDaos: Map<
    number | string,
    {
      id: number;
      user_id: number;
      guild_id: number;
      guild: {
        id: number;
        name?: string | null;
      };
    }
  >;
  userData: UIUser | null;
  userDataByAddress: UIUser | null;
};

export const useUser = (): UserContextType => useContext(UserContext);
