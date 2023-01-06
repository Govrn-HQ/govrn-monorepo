import { useCallback, useEffect } from 'react';
import {
  Flex,
  Heading,
  Button,
  Divider,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../contexts/UserContext';
import { profileFormValidation } from '../utils/validations';
import { ProfileFormValues } from '../types/forms';
import { BASE_URL } from '../utils/constants';
import useDisplayName from '../hooks/useDisplayName';
import FeatureFlagWrapper from './FeatureFlagWrapper';
import DaoCard from './DaoCard';

type DaoRoles = 'admin' | 'contributor' | 'recruit';

type Dao = {
  id: number;
  name: string;
  role: DaoRoles;
  isFavorited: boolean;
};

const LINEAR_CLIENT_ID = import.meta.env.VITE_LINEAR_CLIENT_ID;
const LINEAR_REDIRECT_URI = import.meta.env.VITE_LINEAR_REDIRECT_URI;
const BACKEND_ADDR = `${BASE_URL}`;

const mockDaos: Dao[] = [
  {
    id: 1,
    name: 'Govrn',
    role: 'admin',
    isFavorited: true,
  },
  {
    id: 2,
    name: 'Boys Club',
    role: 'contributor',
    isFavorited: true,
  },
  {
    id: 3,
    name: 'Seed Club',
    role: 'recruit',
    isFavorited: false,
  },
  {
    id: 3,
    name: 'Raid Guild',
    role: 'recruit',
    isFavorited: false,
  },
];

const ProfileForm = () => {
  const { userData, updateProfile, disconnectLinear } = useUser();
  const { displayName } = useDisplayName();

  const localForm = useForm<ProfileFormValues>({
    mode: 'all',
    resolver: yupResolver(profileFormValidation),
  });
  const { handleSubmit, setValue } = localForm;

  useEffect(() => {
    setValue('name', userData?.name ?? '');
  }, [userData]);

  const updateProfileHandler: SubmitHandler<ProfileFormValues> = async (
    values: ProfileFormValues,
  ) => {
    updateProfile(values);
  };

  const handleLinearOauth = async () => {
    const params = new URLSearchParams();
    const res = await fetch(`${BACKEND_ADDR}/linear_nonce`, {
      method: 'GET',
      credentials: 'include',
    });
    const state = await res.text();

    params.append('client_id', LINEAR_CLIENT_ID);
    params.append('redirect_uri', LINEAR_REDIRECT_URI);

    params.append('response_type', 'code');
    params.append('scope', 'read');
    params.append('state', `${state}/${userData?.address}`); // generate string to prevent crsf attack
    params.append('prompt', 'consent');
    window.location.href = `https://linear.app/oauth/authorize?${params.toString()}`;
  };

  const disconnectLinearOnClick = useCallback(async () => {
    if (!userData?.id || !userData?.name) {
      return;
    }
    await disconnectLinear({
      userId: userData?.id,
      username: userData?.name || '',
      linearUserId: userData?.linear_users[0].id,
    });
  }, [userData, disconnectLinear]);

  return (
    <>
      <form onSubmit={handleSubmit(updateProfileHandler)}>
        <Flex
          justify="space-between"
          direction="column"
          wrap="wrap"
          width="100%"
          paddingX={4}
          paddingTop={4}
          background="white"
          boxShadow="sm"
          borderRadius={{ base: 'none', md: 'lg' }}
          marginBottom={4}
        >
          <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
            Hi,{' '}
            <Text
              as="span"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              {displayName}
            </Text>
            <span role="img" aria-labelledby="Wave emoji next to user name">
              {'!'} 👋
            </span>
          </Heading>

          <Flex
            direction="column"
            alignItems="flex-start"
            marginY={8}
            width={{ base: '100%', lg: '50%' }}
          >
            <Input
              name="name"
              label="Govrn Username"
              tip="Enter your username for the Govrn protocol."
              placeholder="govrn-user"
              defaultValue={userData?.name ?? ''}
              localForm={localForm}
            />
            <Button variant="primary" type="submit">
              Save Username
            </Button>
          </Flex>
        </Flex>
      </form>
      <FeatureFlagWrapper>
        <Flex
          justify="space-between"
          direction="column"
          wrap="wrap"
          width="100%"
          paddingX={4}
          paddingY={8}
          background="white"
          boxShadow="sm"
          marginBottom={4}
        >
          <Flex justify="space-between" direction="column" wrap="wrap">
            <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
              My DAOs
            </Heading>
            <Divider marginY={8} bgColor="gray.300" />
            <Flex
              direction="column"
              justifyContent="space-apart"
              gap={8}
              width="100%"
            >
              <SimpleGrid columns={4} spacing={4}>
                {mockDaos.map(dao => (
                  <DaoCard dao={dao} key={dao.id} />
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </FeatureFlagWrapper>
      <form>
        <Flex
          justify="space-between"
          direction="column"
          wrap="wrap"
          width="100%"
          paddingX={4}
          paddingTop={4}
          background="white"
          boxShadow="sm"
          marginBottom={4}
        >
          <Flex justify="space-between" direction="column" wrap="wrap">
            <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
              Integrations
            </Heading>
            <Divider marginY={8} bgColor="gray.300" />
            <Flex
              direction="column"
              align="flex-start"
              marginTop={4}
              marginBottom={4}
              gap="20px"
              width={{ base: '100%', lg: '50%' }}
            >
              <Heading as="h4" size="sm" fontWeight="medium" color="gray.700">
                Linear
              </Heading>
              {userData?.linear_users && userData.linear_users.length > 0 ? (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={disconnectLinearOnClick}
                >
                  Disconnect Linear
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleLinearOauth}
                >
                  Connect Linear
                </Button>
              )}
            </Flex>
            {/* <Divider bgColor="gray.300" /> */}
          </Flex>
          <Flex justify="space-between" direction="column" wrap="wrap">
            <Flex
              direction="column"
              align="flex-start"
              marginTop={4}
              marginBottom={{ base: 8, lg: 0 }}
              width={{ base: '100%', lg: '50%' }}
            >
              <Input
                name="userTwitterHandle"
                label="Twitter Handle (Coming Soon)"
                placeholder="govrn"
                localForm={localForm}
                isDisabled
              />
              <Button variant="primary" type="submit" isDisabled>
                Connect Twitter
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default ProfileForm;
