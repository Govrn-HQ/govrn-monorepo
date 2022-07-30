import { useCallback } from 'react';
import { Stack, Flex, Button, Text } from '@chakra-ui/react';
import { Select } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';
import { GovrnProtocol } from '@govrn/protocol-client';
import { useUser } from '../contexts/UserContext';
import { addAttestationFormValidation } from '../utils/validations';
import { ValidationError } from 'yup';

const protocolUrl = import.meta.env.VITE_PROTOCOL_URL;

interface AddAttestationFormProps {
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

const confidenceLevels = [
  'witnessed',
  'verified_proof',
  'hearsay',
  'implicit',
  'unsure',
];

const confidenceLevelOptions = confidenceLevels.map((confidence) => ({
  value: confidence,
  label: confidence,
}));

const AddAttestationForm = ({
  contribution,
  onClose,
}: AddAttestationFormProps) => {
  const govrn = new GovrnProtocol(protocolUrl, { credentials: 'include' });

  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(addAttestationFormValidation),
  });
  const { handleSubmit, setValue } = localForm;
  const { userData } = useUser();

  const addAttestation = async (values: any) => {
    try {
      await govrn.custom.createUserAttestation({
        address: userData.address,
        chainName: 'ethereum',
        confidenceName: `${values.confidenceLevel}: ${userData.name}`,
        contributionId: contribution.id,
        userId: userData.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(addAttestation)}>
        <Text paddingBottom={2}>Attesting as: {userData.name}</Text>
        <Text paddingBottom={2}>{contribution.name}</Text>
        <Select
          name="confidenceLevel"
          label="Confidence Level"
          onChange={(confidence) => {
            setValue(
              'confidenceLevel',
              (Array.isArray(confidence) ? confidence[0] : confidence).value
            );
          }}
          options={confidenceLevelOptions}
          localForm={localForm}
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
            Add Attestation
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default AddAttestationForm;
