import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GovrnProtocol } from '@govrn/protocol-client';
import { useWallet } from '@raidguild/quiver';
import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createUserFormValidation } from '../utils/validations';
import { CreateUserFormValues } from '../types/forms';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

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

const CreateUserForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(createUserFormValidation),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = localForm;
  const { address } = useWallet();
  const { createUser } = useUser();

  const createUserHandler: SubmitHandler<CreateUserFormValues> = async (
    values: CreateUserFormValues
  ) => {
    createUser(values, address);
  };

  return (
    <Stack spacing="4" width="100%" color="gray.700">
      <form onSubmit={handleSubmit(createUserHandler)}>
        <Input
          name="username"
          label="Username"
          tip="What would you like your username to be?"
          placeholder="DAOContributor"
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
            Create
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default CreateUserForm;
