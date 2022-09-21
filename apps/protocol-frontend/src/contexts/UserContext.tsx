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
import { UIActivityType, UIGuild, UIUser, UIGuilds } from '@govrn/ui-types';
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

  const [userActivityTypes, setUserActivityTypes] = useState<UIActivityType[]>(
    [],
  );
  const [isUserActivityTypesLoading, setUserActivityTypesLoading] =
    useState(true);

  const [allDaos, setAllDaos] = useState<UIGuild[]>([]);
  const [userDaos, setUserDaos] = useState<UIGuild[]>([]);

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

  const getUserActivityTypes = async () => {
    setUserActivityTypesLoading(true);
    try {
      if (!userData?.id) {
        throw new Error('getUserActivityTypes has no userData.id');
      }
      const activityTypesByUser = await govrn.custom.listActivityTypesByUser(
        {},
      );

      setUserActivityTypes(activityTypesByUser);

      return activityTypesByUser;
    } catch (error) {
      console.error(error);
    } finally {
      setUserActivityTypesLoading(false);
    }
  };

  const getAllDaos = async () => {
    try {
      const allDaosResponse = await govrn.guild.list({ first: 100 });
      setAllDaos(allDaosResponse);
      return allDaosResponse;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getUserDaos = async () => {
    try {
      if (!userData?.id) {
        throw new Error('getUserDaos has no userData.id');
      }
      const userDaosResponse = await govrn.guild.list({
        first: 100,
        where: {
          users: {
            some: {
              user_id: {
                equals: userData?.id,
              },
            },
          },
        },
      });
      setUserDaos(userDaosResponse);
      return userDaosResponse;
    } catch (error) {
      console.error(error);
      return [];
    }
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

  useEffect(() => {
    if (isAuthenticated) {
      getUserActivityTypes();
      getAllDaos();
      getUserDaos();
    }
  }, [userData, isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        allDaos,
        createUser,
        createWaitlistUser,
        disconnectLinear,
        getAllDaos,
        isUserActivityTypesLoading,
        isUserLoading,
        getUserDaos,
        setAllDaos,
        setUserActivityTypes,
        setUserAddress,
        setUserDaos,
        setUserData,
        setUserDataByAddress,
        updateProfile,
        userActivityTypes,
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
  allDaos: UIGuild[];
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
  getAllDaos: () => Promise<UIGuilds>;
  getUserDaos: () => Promise<UIGuilds>;
  isUserActivityTypesLoading: boolean;
  isUserLoading: boolean;
  setAllDaos: (data: UIGuild[]) => void;
  setUserActivityTypes: (data: UIActivityType[]) => void;
  setUserAddress: (arg0: string) => void;
  setUserData: (arg0: UIUser) => void;
  setUserDataByAddress: (arg0: UIUser) => void;
  setUserDaos: (data: UIGuild[]) => void;
  updateProfile: (arg0: ContributionFormValues) => void;
  userActivityTypes: UIActivityType[];
  userAddress: string | null;
  userDaos: UIGuild[];
  userData: UIUser | null;
  userDataByAddress: UIUser | null;
};

export const useUser = (): UserContextType => useContext(UserContext);
