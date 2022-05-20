import { useCallback } from 'react';
import { Stack, Flex, Button } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { reportFormValidation } from '../utils/validations';

const useYupValidationResolver = (reportValidationSchema: any) =>
  useCallback(
    async (data) => {
      try {
        const values = await reportFormValidation.validate(data, {
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
    [reportFormValidation]
  );

const createReport = async (values: any) => {
  try {
    console.log('createReport', values);
  } catch (error) {
    console.log(error);
  }
};

const ReportForm = () => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(reportFormValidation),
  });
  const { handleSubmit } = localForm;

  return (
    <Stack spacing="4" width="100%">
      <form onSubmit={handleSubmit(createReport)}>
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

export default ReportForm;
