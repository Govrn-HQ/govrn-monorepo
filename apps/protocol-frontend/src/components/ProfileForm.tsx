import { useEffect } from 'react';
import { Flex, Heading, Button, Divider, Text } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../contexts/UserContext';

import { profileFormValidation } from '../utils/validations';
import { ProfileFormValues } from '../types/forms';
import { BASE_URL } from '../utils/constants';

import useDisplayName from '../hooks/useDisplayName';
import useLinearUserDisconnect from '../hooks/useLinearUserDisconnect';
import useUserCustomUpdate from '../hooks/useUserCustomUpdate';
import ProfileDaos from './ProfileDaos';
import { CgLinear, SiDiscord } from 'react-icons/all';
import useDiscordUserDisconnect from '../hooks/useDiscordUserDisconnect';
import { UIUser } from '@govrn/ui-types';

const LINEAR_CLIENT_ID = import.meta.env.VITE_LINEAR_CLIENT_ID;
const LINEAR_REDIRECT_URI = import.meta.env.VITE_LINEAR_REDIRECT_URI;
const BACKEND_ADDR = `${BASE_URL}`;

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

const isDiscordConnected = (userData?: UIUser | null) =>
  userData?.discord_users?.length && userData.discord_users[0].active_token;

const isLinearConnected = (userData?: UIUser | null) =>
  userData?.linear_users?.length && userData.linear_users[0].active_token;

const ProfileForm = () => {
  const { userData } = useUser();
  const { mutateAsync: disconnectLinearUser } = useLinearUserDisconnect();
  const { mutateAsync: disconnectDiscordUser } = useDiscordUserDisconnect();
  const { displayName } = useDisplayName();
  const { mutateAsync: updateProfile } = useUserCustomUpdate();

  const localForm = useForm<ProfileFormValues>({
    mode: 'all',
    resolver: yupResolver(profileFormValidation),
  });
  const { handleSubmit, setValue } = localForm;

  useEffect(() => {
    setValue('name', userData?.name ?? '');
  }, [setValue, userData]);

  const updateProfileHandler: SubmitHandler<ProfileFormValues> = async (
    values: ProfileFormValues,
  ) => {
    if (values.name && userData) {
      updateProfile({
        name: values.name,
        id: userData.id,
      });
    }
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

  const handleDiscordAuth = async () => {
    const res = await fetch(`${BACKEND_ADDR}/discord_nonce`, {
      method: 'GET',
      credentials: 'include',
    });
    const state = await res.text();

    const params = new URLSearchParams();
    params.append('client_id', DISCORD_CLIENT_ID);
    params.append('redirect_uri', DISCORD_REDIRECT_URI);
    params.append('response_type', 'code');
    params.append('scope', 'identify guilds.join');
    params.append('state', `${state}/${userData?.address}`); // generate string to prevent crsf attack
    params.append('prompt', 'consent');
    window.location.href = `https://discord.com/oauth2/authorize?${params.toString()}`;
  };

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
      <ProfileDaos userId={userData?.id} userAddress={userData?.address} />
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
            <Divider marginY={2} bgColor="gray.300" />
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
              {isLinearConnected(userData) ? (
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={async () => await disconnectLinearUser()}
                >
                  Disconnect Linear
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleLinearOauth}
                  leftIcon={<CgLinear />}
                >
                  Connect Linear
                </Button>
              )}
            </Flex>
            <Flex
              direction="column"
              align="flex-start"
              marginTop={4}
              marginBottom={4}
              gap="20px"
              width={{ base: '100%', lg: '50%' }}
            >
              <Heading as="h4" size="sm" fontWeight="medium" color="gray.700">
                Discord
              </Heading>
              {isDiscordConnected(userData) ? (
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={async () => await disconnectDiscordUser()}
                >
                  Disconnect Discord
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleDiscordAuth}
                  leftIcon={<SiDiscord />}
                >
                  Connect Discord
                </Button>
              )}
            </Flex>
          </Flex>
          <Flex justify="space-between" direction="column" wrap="wrap">
            <Flex
              direction="column"
              align="flex-start"
              marginTop={4}
              marginBottom={{ base: 8, lg: 0 }}
              width={{ base: '100%', lg: '50%' }}
            >
              <Heading
                as="h4"
                size="sm"
                fontWeight="medium"
                color="gray.700"
                mb="1rem"
              >
                Twitter Handle (Coming Soon)
              </Heading>
              <Input
                name="userTwitterHandle"
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
