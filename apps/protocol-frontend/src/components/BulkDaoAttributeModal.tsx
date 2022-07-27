import { useState, useCallback } from 'react';
import { Select } from '@govrn/protocol-ui';
import { Stack, Flex, Button, Text, Progress } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useUser } from '../contexts/UserContext';
import { editContributionFormValidation } from '../utils/validations';

interface BulkDaoAttributeModalProps {
  contributions: any;
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

const BulkDaoAttributeModal = ({
  contributions,
}: BulkDaoAttributeModalProps) => {
  const { updateContribution, allDaos } = useUser();
  const [attributing, setAttributing] = useState(false);
  const [currentAttribution, setCurrentAttribution] = useState(1);
  const localForm = useForm({
    mode: 'all',
    resolver: useYupValidationResolver(editContributionFormValidation),
  });
  const { handleSubmit, setValue, reset } = localForm;

  // const actualContributions = contributions.map((c) => c.original);

  console.log('contributions in modal', contributions);

  const bulkAttributeDaoHandler = async (values: any) => {
    setAttributing(true);
    contributions.map((contribution, idx) => {
      updateContribution(contribution, values, contributions.length);
    });

    setAttributing(false);
  };

  const daoListOptions = allDaos.map((dao) => ({
    value: dao.id,
    label: dao.name,
  }));

  const daoReset = [
    {
      value: null,
      label: 'No DAO',
    },
  ];

  const combinedDaoListOptions = [...new Set([...daoReset, ...daoListOptions])];

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(bulkAttributeDaoHandler)}>
        <Text paddingBottom={2}>
          Attributing {contributions.length}{' '}
          {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Text>
        {attributing ? (
          <Progress
            color="brand.primary"
            value={currentAttribution % contributions.length}
          />
        ) : null}

        <Select
          name="daoId"
          label="DAO"
          tip="Please select a DAO to associate this Contribution with. This is optional."
          placeholder="Select a DAO to associate this Contribution with."
          onChange={(dao) => {
            setValue('daoId', dao.value);
          }}
          options={combinedDaoListOptions}
          localForm={localForm}
        />
        <Button
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          // onClick={() => bulkAttributeDaoHandler(contributions)}
          isLoading={attributing}
        >
          Attribute{' '}
          {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </form>
    </Stack>
  );
};

export default BulkDaoAttributeModal;
