import { useState, useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { NumberInput, Select } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerificationFrameworkFormValues } from '../types/forms';
import { verificationFrameworkFormValidation } from '../utils/validations';
import useVerificationSettingCreate from '../hooks/useVerificationSettingCreate';
import useVerificationSettingUpdate from '../hooks/useVerificationSettingUpdate';
import { useDaoUpdate } from '../hooks/useDaoUpdate';

const VerificationFrameworkForm = ({
  verificationSettingId,
  daoId,
  numberOfAttestations,
}: {
  verificationSettingId?: number | null;
  daoId: number;
  numberOfAttestations?: number | null;
}) => {
  const [submitting, setSubmitting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(verificationFrameworkFormValidation),
  });

  const { mutateAsync: updateVerificationSetting } =
    useVerificationSettingUpdate();

  const { mutateAsync: createVerificationSetting } =
    useVerificationSettingCreate();

  const { mutateAsync: updateDao } = useDaoUpdate();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields },
  } = localForm;

  useEffect(() => {
    setValue(
      'verificationFramework',
      verificationSettingId === null ? 'none' : 'numberOfAttestors',
    );
    setValue('numberOfAttestors', numberOfAttestations);
    setValue(
      'numberOfAttestors',
      watch('verificationFramework') !== 'none' ? numberOfAttestations : 0,
    );
  }, [verificationSettingId, numberOfAttestations, setValue, watch]);

  const verificationFrameworkOptions = [
    { label: 'None', value: 'none' },
    { label: 'Number of Attestors', value: 'numberOfAttestors' },
  ]; // will match these to the backend data structure

  const verificationFrameworkHandler: SubmitHandler<
    VerificationFrameworkFormValues
  > = async values => {
    setSubmitting(true);
    if (
      values.numberOfAttestors === null ||
      values.numberOfAttestors === undefined
    ) {
      return;
    }
    if (
      verificationSettingId === null &&
      values.verificationFramework !== 'none'
    ) {
      await createVerificationSetting({
        daoId: daoId,
        numberOfAttestations: values.numberOfAttestors,
      }).then(data => {
        updateDao({
          daoUpdateValues: {
            verificationSettingId: data.id,
            guildId: daoId,
          },
          showToast: false,
        });
      });
    }

    if (verificationSettingId !== null) {
      await updateVerificationSetting({
        id: verificationSettingId,
        daoId: daoId,
        numberOfAttestations: values.numberOfAttestors,
      });
    }

    if (
      verificationSettingId !== null &&
      values.verificationFramework === 'none'
    ) {
      updateDao({
        daoUpdateValues: {
          verificationSettingId: null,
          guildId: daoId,
        },
        showToast: false,
      });
    }

    setSubmitting(false); // will be on success
  };

  const noFrameworkSet =
    verificationSettingId === null && watch('verificationFramework') === 'none';

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
              value:
                verificationSettingId === null ? 'none' : 'numberOfAttestors',
              label:
                verificationSettingId === null ? 'None' : 'Number of Attestors',
            }}
            options={verificationFrameworkOptions}
            isSearchable={false}
            isClearable
            localForm={localForm}
          />
          {watch('verificationFramework') === 'none' ? (
            <>
              {noFrameworkSet ? (
                <Text>
                  Select a framework and then click{' '}
                  <Text as="i">Apply Verification Settings</Text> button to
                  select.
                </Text>
              ) : null}
              <Text marginBottom={4}>
                This setting is optional, and the default is{' '}
                <Text as="i">None</Text>.
              </Text>
            </>
          ) : (
            <NumberInput
              name="numberOfAttestors"
              label="Choose the Number of Attestors"
              isRequired={watch('verificationFramework') !== 'none'}
              defaultValue={numberOfAttestations || 0}
              min={0}
              max={10}
              localForm={localForm}
            />
          )}
          <Button
            variant="secondary"
            type="submit"
            disabled={
              submitting || Object.keys(errors).length !== 0 || noFrameworkSet
            }
          >
            Apply Verification Settings
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default VerificationFrameworkForm;
