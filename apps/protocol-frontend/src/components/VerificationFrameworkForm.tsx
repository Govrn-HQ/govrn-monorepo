import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { NumberInput } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerificationFrameworkFormValues } from '../types/forms';
import { verificationFrameworkFormValidation } from '../utils/validations';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useUser } from '../contexts/UserContext';

// interface VerificationFrameworkFormProps {
//   // daoId: number;
// }

const VerificationFrameworkForm = () => {
  const { userData } = useUser();
  const [importing, setImporting] = useState(false);
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(verificationFrameworkFormValidation),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
    reset,
  } = localForm;

  const { mutateAsync: createDaoUser } = useDaoUserCreate();

  const verificationFrameworkHandler: SubmitHandler<
    VerificationFrameworkFormValues
  > = async values => {
    console.log('form values', values);
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
          <NumberInput
            localForm={localForm}
            name="numberOfAttestors"
            defaultValue={0}
            min={0}
            max={2}
          />
          <Button
            variant="secondary"
            type="submit"
            // disabled={importing || errors['numberOfAttestors'] !== undefined}
          >
            Apply Verification Settings
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default VerificationFrameworkForm;
