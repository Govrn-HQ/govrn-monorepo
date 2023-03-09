import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { NumberInput, Select } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerificationFrameworkFormValues } from '../types/forms';
import { verificationFrameworkFormValidation } from '../utils/validations';

const VerificationFrameworkForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(verificationFrameworkFormValidation),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = localForm;

  const verificationFrameworkOptions = [
    { label: 'Number of Attestors', value: 'numberOfAttestors' },
  ]; // will match this to the backend data structure

  const verificationFrameworkHandler: SubmitHandler<
    VerificationFrameworkFormValues
  > = async values => {
    setSubmitting(true);
    console.log('form values', values); // placeholder for the hook call
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
            defaultValue={verificationFrameworkOptions[0]} // will set this to the currently selected verification framework
            options={verificationFrameworkOptions}
            isSearchable={false}
            isClearable
            localForm={localForm}
          />
          <NumberInput
            name="numberOfAttestors"
            label="Choose the Number of Attestors"
            defaultValue={1}
            min={1}
            max={10}
            localForm={localForm}
          />

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
