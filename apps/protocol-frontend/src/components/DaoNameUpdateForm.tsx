import { Button, Flex } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { daoNameFormValidation } from '../utils/validations';
import { DaoNameUpdateFormValues } from '../types/forms';
import { useDaoUpdate } from '../hooks/useDaoUpdate';
import { Input } from '@govrn/protocol-ui';

interface DaoNameUpdateFormProps {
  daoId: number;
  daoName: string | null | undefined;
}

const DaoNameUpdateForm = ({ daoId, daoName }: DaoNameUpdateFormProps) => {
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(daoNameFormValidation),
  });

  const { mutateAsync: updateDao, isLoading: updateDaoLoading } =
    useDaoUpdate();

  const {
    handleSubmit,
    formState: { errors },
  } = localForm;

  const daoNameUpdateHandler: SubmitHandler<
    DaoNameUpdateFormValues
  > = async values => {
    const { daoName } = values;
    if (daoId === undefined) return;
    await updateDao({
      daoUpdateValues: {
        name: daoName,
        guildId: daoId,
      },
      showToast: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(daoNameUpdateHandler)}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        alignItems="baseline"
        width={{ base: '100%', lg: '50%' }}
        gap={{ base: 0, lg: 4 }}
      >
        <Input
          name="daoName"
          defaultValue={daoName ?? ''}
          localForm={localForm}
        />
        <Button
          variant="secondary"
          type="submit"
          marginBottom={{ base: 4, lg: 0 }}
          disabled={updateDaoLoading || errors['daoName'] !== undefined}
        >
          Save Name
        </Button>
      </Flex>
    </form>
  );
};

export default DaoNameUpdateForm;
