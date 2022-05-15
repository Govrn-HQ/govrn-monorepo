import { useCallback } from 'react';
import {
  Container,
  Stack,
  Flex,
  Text,
  Box,
  useBreakpointValue,
  Button,
  StackDivider,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { useTable, useSortBy } from 'react-table';
import ContributionsTable from './ContributionsTable';
import { mockContributions } from '../utils/mockData';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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

  return (
    // <Container paddingY={{ base: 2, md: 4 }}>

    <form onSubmit={handleSubmit(submitProfile)}>
      <Flex direction="column" align="flex-end" marginTop={4}>
        <Input
          name="username"
          label="Govrn Username"
          tip="Enter your username for the Govrn protocol"
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

      <Flex direction="column" align="flex-end" marginTop={4}>
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
      <Flex direction="column" align="flex-end" marginTop={4}>
        <Input
          name="userWalletAddress"
          label="Wallet Address"
          tip="Enter your wallet address (not ENS)."
          placeholder="0x..."
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
      <Flex direction="column" align="flex-end" marginTop={4}>
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
    </form>

    // </Container>
  );
};

export default ProfileForm;
