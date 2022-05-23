import { useCallback } from 'react';
import { Stack, Flex, Button, Text } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { editContributionFormValidation } from '../utils/validations';

interface EditContributionFormProps {
  contribution: any;
  onClose?: () => void;
}

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

const editContribution = async (values: any) => {
  try {
    console.log('editContribution', values);
  } catch (error) {
    console.log(error);
  }
};

const EditContributionForm = ({
  contribution,
  onClose,
}: EditContributionFormProps) => {
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(editContributionFormValidation),
  });
  const { handleSubmit } = localForm;
  console.log('contribution', contribution);
  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(editContribution)}>
        <Text paddingBottom={2}>{contribution.name}</Text>
        <Input
          name="name"
          label="Contribution Name"
          tip="What is the name of this Contribution?"
          placeholder="DAOContributor"
          defaultValue={contribution.name}
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
            Update Contribution
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default EditContributionForm;
