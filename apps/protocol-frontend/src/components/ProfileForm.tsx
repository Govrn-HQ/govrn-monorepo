import { useCallback, useEffect } from 'react';
import { Flex, Heading, Button, Divider } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';

import { useUser } from '../contexts/UserContext';
import {
  profileFormValidation,
  linearFormValidation,
} from '../utils/validations';
import { ValidationError } from 'yup';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import { InputLocalFormType } from '../../../../libs/protocol-ui/src/components/molecules/Input/Input';

const LINEAR_CLIENT_ID = import.meta.env.VITE_LINEAR_CLIENT_ID;
const LINEAR_REDIRECT_URI = import.meta.env.VITE_LINEAR_REDIRECT_URI;

const useYupValidationResolver = (profileValidationSchema: any) =>
  useCallback(
    async (data) => {
      try {
        const values = await profileValidationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as ValidationError).inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [profileValidationSchema]
  );

const useYupValidationResolverLinear = (linearFormValidationSchema: any) =>
  useCallback(
    async (data) => {
      try {
        const values = await linearFormValidationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as ValidationError).inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [linearFormValidationSchema]
  );

const ProfileForm = () => {
  const { userData, updateProfile, updateLinearEmail, disconnectLinear } =
    useUser();

  const localForm = useForm<{ name: string; address: string }>({
    mode: 'all',
    resolver: useYupValidationResolver(profileFormValidation),
  });
  const localFormLinear = useForm<{ name: string; address: string }>({
    mode: 'all',
    resolver: useYupValidationResolverLinear(linearFormValidation),
  });
  const { handleSubmit, setValue } = localForm;
  const { handleSubmit: handleSubmitLinear, setValue: setValueLinear } =
    localFormLinear;

  useEffect(() => {
    setValue('name', userData?.name ?? '');
    setValue('address', userData?.address);
  }, [userData]);

  console.log(userData);
  const updateProfileHandler = async (values: any) => {
    updateProfile(values);
  };

  const updateLinearEmailHandler = async (values: any) => {
    updateLinearEmail(values);
  };

  const handleLinearOauth = () => {
    const params = new URLSearchParams();
    params.append('client_id', LINEAR_CLIENT_ID);
    params.append('redirect_uri', LINEAR_REDIRECT_URI);
    params.append('response_type', 'code');
    params.append('scope', 'read');
    params.append('state', ''); // generate string to prevent crsf attack
    params.append('prompt', 'consent');
    window.location.href = `https://linear.app/oauth/authorize?${params.toString()}`;
  };

  const disconnectLinearOnClick = useCallback(async () => {
    await disconnectLinear({
      userId: userData.id,
      username: userData.name,
      linearUserId: userData.linear_users[0].id,
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
            align="flex-end"
            marginY={8}
            width={{ base: '100%', lg: '50%' }}
          >
            <Input
              name="name"
              label="Govrn Username"
              tip="Enter your username for the Govrn protocol."
              placeholder="govrn-user"
              defaultValue={userData?.name ?? ''}
              localForm={
                localForm as unknown as InputLocalFormType<{
                  [key: string]: any;
                }>
              }
            />
            <Button
              type="submit"
              width="100%"
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.100' }}
            >
              Save Username
            </Button>
          </Flex>
          {/* <Divider bgColor="gray.300" />
          <Flex justify="space-between" direction="column" wrap="wrap">
            <Flex direction="column" align="flex-end" marginTop={4} width="50%">
              <Input
                name="userWalletAddress"
                label="Wallet Address"
                tip="Enter your wallet address (not ENS)."
                placeholder="0x..."
                defaultValue={formatAddress(userData?.address) || '0x...'}
                isDisabled={userData?.address}
                localForm={localForm} //TODO: resolve this type issue -- need to investigate this
              />
              <Button
                type="submit"
                width="100%"
                color="brand.primary.600"
                backgroundColor="brand.primary.50"
                transition="all 100ms ease-in-out"
                isDisabled={userData?.address}
                _hover={{ bgColor: 'brand.primary.100' }}
              >
                Link Address
              </Button>
            </Flex>
          </Flex> */}
        </Flex>
      </form>
      <form onSubmit={handleSubmitLinear(updateLinearEmailHandler)}>
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
              <Heading as="h5" size="sm" fontWeight="medium" color="gray.700">
                Linear
              </Heading>
              {userData?.linear_users && userData.linear_users.length > 0 ? (
                <Button
                  type="submit"
                  width="100%"
                  color="brand.primary.600"
                  backgroundColor="brand.primary.50"
                  transition="all 100ms ease-in-out"
                  _hover={{ bgColor: 'brand.primary.100' }}
                  onClick={disconnectLinearOnClick}
                >
                  Disconnect Linear
                </Button>
              ) : (
                <Button
                  type="submit"
                  width="100%"
                  color="brand.primary.600"
                  backgroundColor="brand.primary.50"
                  transition="all 100ms ease-in-out"
                  _hover={{ bgColor: 'brand.primary.100' }}
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
              align="flex-end"
              marginTop={4}
              marginBottom={{ base: 8, lg: 0 }}
              width={{ base: '100%', lg: '50%' }}
            >
              <Input
                name="userTwitterHandle"
                label="Twitter Handle (Coming Soon!)"
                tip="Enter your Twitter handle for the upcoming Twitter integration."
                placeholder="govrn"
                localForm={
                  localForm as unknown as InputLocalFormType<{
                    [key: string]: any;
                  }>
                }
                isDisabled
              />
              <Button type="submit" width="100%" variant="disabled" isDisabled>
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
