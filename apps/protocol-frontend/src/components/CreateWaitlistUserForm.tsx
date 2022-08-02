import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button, Text } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { createWaitlistFormValidation } from '../utils/validations';
import { ValidationError } from 'yup';

const useYupValidationResolver = (userValidationSchema: any) =>
  useCallback(
    async (data) => {
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
            {}
          ),
        };
      }
    },
    [userValidationSchema]
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
  const { address } = useWallet();
  const navigate = useNavigate();
  const { createWaitlistUser } = useUser();

  const createUserHandler = async (values: any) => {
    createWaitlistUser(values, address, navigate);
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
      <Text>
        <span
          role="img"
          aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
        >
          🌞
        </span>{' '}
        Enter your email and username to join the waitlist. We'll reach out as
        soon as we open more spots!{' '}
        <span
          role="img"
          aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
        >
          🌞
        </span>
      </Text>
      <form onSubmit={handleSubmit(createUserHandler)}>
        <Input
          name="username"
          label="Username"
          tip="What would you like your username to be?"
          placeholder="DAOContributor"
          localForm={localForm}
        />
        <Input
          name="email"
          label="Email Address"
          tip="What is your preferred email address for us to contact you?"
          placeholder="daocontributor@dao.gg"
          localForm={localForm}
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
          >
            Join Waitlist
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default CreateWaitlistUserForm;
