import { useCallback } from 'react';
import { formatAddress, useWallet } from '@raidguild/quiver';
import {
  Flex,
  Heading,
  Button,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { profileFormValidation } from '../utils/validations';

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
          errors: errors.inner.reduce(
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

const submitProfile = async (values: any) => {
  try {
    console.log('submitProfile', values);
  } catch (error) {
    console.log(error);
  }
};

const ProfileForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(profileFormValidation),
  });
  const { handleSubmit, setValue, getValues } = localForm;
  const { isConnected, address } = useWallet();

  return (
    // <Container paddingY={{ base: 2, md: 4 }}>

    <form onSubmit={handleSubmit(submitProfile)}>
      <Flex
        justify="space-between"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={4}
        paddingTop={4}
        background="white"
        boxShadow="sm"
        borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
        marginBottom={4}
      >
        <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
          Your Details
        </Heading>
        <Flex direction="column" align="flex-end" marginY={8} width="50%">
          <Input
            name="username"
            label="Govrn Username"
            tip="Enter your username for the Govrn protocol."
            placeholder="govrn-user"
            localForm={localForm} //TODO: resolve this type issue -- need to investigate this
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
        <Divider bgColor="gray.300" />
        <Flex justify="space-between" direction="column" wrap="wrap">
          <Flex direction="column" align="flex-end" marginTop={4} width="50%">
            <Input
              name="userWalletAddress"
              label="Wallet Address"
              tip="Enter your wallet address (not ENS)."
              placeholder="0x..."
              defaultValue={isConnected ? formatAddress(address) : '0x...'}
              localForm={localForm} //TODO: resolve this type issue -- need to investigate this
            />
            <Button
              type="submit"
              width="100%"
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.100' }}
            >
              Link Address
            </Button>
          </Flex>
        </Flex>
      </Flex>
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
          <Flex direction="column" align="flex-end" marginTop={4} width="50%">
            <Input
              name="userLinearEmail"
              label="Linear Email Address"
              tip="Enter the email address you used with Linear for the integration."
              placeholder="user@govrn.io"
              localForm={localForm} //TODO: resolve this type issue -- need to investigate this
            />
            <Button
              type="submit"
              width="100%"
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              _hover={{ bgColor: 'brand.primary.100' }}
            >
              Link Email
            </Button>
          </Flex>
          <Divider bgColor="gray.300" />
        </Flex>
        <Flex justify="space-between" direction="column" wrap="wrap">
          <Flex direction="column" align="flex-end" marginTop={4} width="50%">
            <Input
              name="userTwitterHandle"
              label="Twitter Handle (Coming Soon!)"
              tip="Enter your Twitter handle for the upcoming Twitter integration."
              placeholder="govrn"
              localForm={localForm} //TODO: resolve this type issue -- need to investigate this
              disabled
            />
            <Button
              type="submit"
              width="100%"
              color="brand.primary.600"
              backgroundColor="brand.primary.50"
              transition="all 100ms ease-in-out"
              disabled
              _hover={{ bgColor: 'brand.primary.100' }}
            >
              Link Twitter
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
};

export default ProfileForm;
