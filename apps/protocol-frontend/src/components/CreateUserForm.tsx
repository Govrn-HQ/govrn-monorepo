import { useUser } from '../contexts/UserContext';
import { Stack, Flex, Button } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserFormValidation } from '../utils/validations';
import { CreateUserFormValues } from '../types/forms';
import { useAccount } from 'wagmi';

const CreateUserForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(createUserFormValidation),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = localForm;
  const { address } = useAccount();
  const { createUser } = useUser();

  const createUserHandler: SubmitHandler<
    CreateUserFormValues
  > = async values => {
    if (address) {
      createUser(values, address);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.700">
      <FormProvider {...localForm}>
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
      </FormProvider>
    </Stack>
  );
};

export default CreateUserForm;
