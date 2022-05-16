import { useCallback } from 'react';
import {
  Container,
  Stack,
  Flex,
  Text,
  Box,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { useTable, useSortBy } from 'react-table';
import ContributionsTable from './ContributionsTable';
import { mockContributions } from '../utils/mockData';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { attestationFormValidation } from '../utils/validations';

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

const createAttestation = async (values: any) => {
  try {
    console.log('createAttestation', values);
  } catch (error) {
    console.log(error);
  }
};

const AttestationForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(attestationFormValidation),
  });
  const { handleSubmit } = localForm;

  return (
    <Stack spacing="4" width="100%">
      <form onSubmit={handleSubmit(createAttestation)}>
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
          >
            Create
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default AttestationForm;
