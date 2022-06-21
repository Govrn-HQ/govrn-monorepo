import { useCallback } from 'react';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button, Text } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { createWaitlistFormValidation } from '../utils/validations';

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
  const { createUser } = useUser();

  const createUserHandler = async (values: any) => {
    createUser(values, address);
  };

  return (
    <Stack spacing="4" width="100%" color="gray.700">
      <Text>
        Enter your email to join the waitlist. We'll reach out as soon as we
        open more spots!
        <span
          role="img"
          aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
        >
          🌞
        </span>{' '}
      </Text>
      <form onSubmit={handleSubmit(createUserHandler)}>
        {/* <Input
          name="username"
          label="Username"
          tip="What would you like your username to be?"
          placeholder="DAOContributor"
          localForm={localForm} //TODO: resolve this type issue -- need to investigate this
        /> */}
        <Input
          name="email"
          label="Email Address"
          tip="What is your preferrred email address for us to contact you?"
          placeholder="daocontributor@dao.gg"
          localForm={localForm} //TODO: resolve this type issue -- need to investigate this
        />
        <Flex align="flex-end" marginTop={4}>
          <Button
            type="submit"
            width="100%"
            color="brand.primary.600"
            backgroundColor="brand.primary.50"
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
