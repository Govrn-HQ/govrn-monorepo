import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GovrnProtocol } from '@govrn/protocol-client';
import { formatAddress, useWallet } from '@raidguild/quiver';
import { Stack, Flex, Button } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { createUserFormValidation } from '../utils/validations';

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
  const govrn = new GovrnProtocol(protocolUrl);
  const { isConnected, address, chainId } = useWallet();

  const navigate = useNavigate();

  const createUser = async (values: any) => {
    try {
      await govrn.user.create({
        data: {
          name: values.username,
          address: address as string,
          chain_type: {
            create: {
              name: 'Ethereum Mainnet',
              // id: parseInt(chainId as string), // create map for this
            },
          },
        },
      });
      navigate('/contributions');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.700">
      <form onSubmit={handleSubmit(createUser)}>
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
