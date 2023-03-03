import { useState } from 'react';
import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerificationFrameworkFormValues } from '../types/forms';
import { verificationFrameworkFormValidation } from '../utils/validations';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useUser } from '../contexts/UserContext';

interface VerificationFrameworkFormProps {
  // daoId: number;
}

const VerificationFrameworkForm = ({}: VerificationFrameworkFormProps) => {
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
          alignItems="flex-end"
          marginTop={
            !errors['daoMemberAddresses'] ||
            touchedFields['daoMemberAddresses'] === false
              ? 4
              : 0
          }
        >
          <Button
            variant="secondary"
            type="submit"
            disabled={importing || errors['daoMemberAddresses'] !== undefined}
          >
            Apply Verification Settings
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default VerificationFrameworkForm;
