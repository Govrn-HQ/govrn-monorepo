import { useCallback, useEffect } from 'react';
import { Flex, Heading, Button, Divider } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../contexts/UserContext';
import { profileFormValidation } from '../utils/validations';
import { ProfileFormValues } from '../types/forms';
import { BASE_URL } from '../utils/constants';

const LINEAR_CLIENT_ID = import.meta.env.VITE_LINEAR_CLIENT_ID;
const LINEAR_REDIRECT_URI = import.meta.env.VITE_LINEAR_REDIRECT_URI;
const BACKEND_ADDR = `${BASE_URL}`;

const ProfileForm = () => {
  const { userData, updateProfile, disconnectLinear } = useUser();

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
          <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
            Your Details
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
            <Flex
              direction="column"
              align="flex-start"
              marginTop={4}
              marginBottom={4}
              gap="20px"
              width={{ base: '100%', lg: '50%' }}
            >
              <Heading as="h4" size="sm" fontWeight="medium" color="gray.700">
                Connect Linear
              </Heading>
              <Button variant="secondary">Secondary</Button>
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
            <Divider bgColor="gray.300" />
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
                label="Twitter Handle (Coming Soon!)"
                tip="Enter your Twitter handle for the upcoming Twitter integration."
                placeholder="govrn"
                localForm={localForm}
                isDisabled
              />
              <Button variant="primary" type="submit" isDisabled>
                Link Twitter
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default ProfileForm;
