import { useState, useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { NumberInput, Select } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerificationFrameworkFormValues } from '../types/forms';
import { verificationFrameworkFormValidation } from '../utils/validations';
import useVerificationSettingCreate from '../hooks/useVerificationSettingCreate';
import useVerificationSettingUpdate from '../hooks/useVerificationSettingUpdate';

const VerificationFrameworkForm = ({
  id,
  daoId,
  numberOfAttestations,
}: {
  id: number;
  daoId: number;
  numberOfAttestations: number | null;
}) => {
  const [submitting, setSubmitting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(verificationFrameworkFormValidation),
  });

  const {
    mutateAsync: updateVerificationSetting,
    isLoading: updateVerificationSettingLoading,
  } = useVerificationSettingUpdate();

  const {
    mutateAsync: createVerificationSetting,
    isLoading: createVerificationSettingLoading,
  } = useVerificationSettingCreate();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields },
  } = localForm;

  useEffect(() => {
    setValue(
      'verificationFramework',
      id === null ? 'none' : 'numberOfAttestors',
    );
    setValue('numberOfAttestors', numberOfAttestations || '');
  }, [id, setValue]);

  const verificationFrameworkOptions = [
    { label: 'None', value: 'none' },
    { label: 'Number of Attestors', value: 'numberOfAttestors' },
  ]; // will match these to the backend data structure

  const verificationFrameworkHandler: SubmitHandler<
    VerificationFrameworkFormValues
  > = async values => {
    setSubmitting(true);
    console.log('form values', values); // placeholder for the hook call

    // await createVerificationSetting({
    //   daoId: daoId,
    //   numberOfAttestations: values.numberOfAttestors,
    // });
    await updateVerificationSetting({
      id: id,
      daoId: daoId,
      numberOfAttestations: values.numberOfAttestors,
    });
    setSubmitting(false); // will be on success
  };

  return (
    <Flex direction="column" width="100%" color="gray.800">
      <form onSubmit={handleSubmit(verificationFrameworkHandler)}>
        <Flex
          direction="column"
          width="60%"
          alignItems="flex-start"
          marginTop={
            !errors['numberOfAttestors'] ||
            touchedFields['numberOfAttestors'] === false
              ? 4
              : 0
          }
        >
          <Select
            name="verificationFramework"
            label="Choose a Verification Framework"
            onChange={verificationFramework => {
              if (
                verificationFramework instanceof Array ||
                !verificationFramework
              ) {
                return;
              }
              setValue('verificationFramework', verificationFramework.value);
            }}
            defaultValue={{
              value: id === null ? 'none' : 'numberOfAttestors',
              label: id === null ? 'None' : 'Number of Attestors',
            }}
            options={verificationFrameworkOptions}
            isSearchable={false}
            isClearable
            localForm={localForm}
          />
          {watch('verificationFramework') === 'none' ? (
            <Text marginBottom={4}>
              No verification framework selected. Any contribution will be
              considered verified even with 0 attestations.
            </Text>
          ) : (
            <NumberInput
              name="numberOfAttestors"
              label="Choose the Number of Attestors"
              defaultValue={numberOfAttestations || 1}
              min={1}
              max={10}
              localForm={localForm}
            />
          )}
          <Button
            variant="secondary"
            type="submit"
            disabled={submitting || Object.keys(errors).length !== 0}
          >
            Apply Verification Settings
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default VerificationFrameworkForm;
