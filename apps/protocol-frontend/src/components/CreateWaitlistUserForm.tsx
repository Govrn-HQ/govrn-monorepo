import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button, Text } from '@chakra-ui/react';
import PageHeading from './PageHeading';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { createWaitlistFormValidation } from '../utils/validations';
import { ValidationError } from 'yup';
import { CreateUserFormValues } from '../types/forms';

const useYupValidationResolver = (userValidationSchema: any) =>
  useCallback(
    async data => {
      try {
        const values = await userValidationSchema.validate(data, {
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
            {},
          ),
        };
      }
    },
    [userValidationSchema],
  );

const CreateWaitlistUserForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(createWaitlistFormValidation),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = localForm;
  const { address } = useAccount();
  const navigate = useNavigate();
  const { createWaitlistUser } = useUser();

  const createUserHandler = async (values: CreateUserFormValues) => {
    if (address) {
      createWaitlistUser(values, address, navigate);
    }
  };

  return (
    <Stack
      spacing="4"
      width="100%"
      color="gray.700"
      bgColor="whiteAlpha.800"
      padding={8}
      rounded="lg"
      boxShadow="sm"
    >
      <PageHeading as="h2" fontSize="xl" textAlign="center">
        {' '}
        <span
          role="img"
          aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
        >
          🌞
        </span>{' '}
        We're Currently in Limited Release{' '}
        <span
          role="img"
          aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
        >
          🌞
        </span>{' '}
      </PageHeading>
      <Text>
        Enter your email and username to join the waitlist. We'll reach out as
        soon as we open more spots!{' '}
      </Text>
      <form onSubmit={handleSubmit(createUserHandler)}>
        <Input
          name="username"
          label="Username"
          tip="What would you like your username to be?"
          placeholder="DAOContributor"
          localForm={localForm}
          dataTestId="createWaitlistUserForm-username"
        />
        <Input
          name="email"
          label="Email Address"
          tip="What is your preferred email address for us to contact you?"
          placeholder="daocontributor@dao.gg"
          localForm={localForm}
          dataTestId="createWaitlistUserForm-email"
        />
        <Flex align="flex-end" marginTop={4}>
          <Button
            type="submit"
            width="100%"
            color="brand.primary.600"
            backgroundColor="brand.primary.100"
            transition="all 100ms ease-in-out"
            _hover={{ bgColor: 'brand.primary.100' }}
            isLoading={isSubmitting}
            data-cy="join-waitlist"
          >
            Join Waitlist
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default CreateWaitlistUserForm;
