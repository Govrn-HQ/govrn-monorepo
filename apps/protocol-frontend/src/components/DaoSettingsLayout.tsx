import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Input } from '@govrn/protocol-ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeading from './PageHeading';
import { yupResolver } from '@hookform/resolvers/yup';
import { daoNameFormValidation } from '../utils/validations';

type DaoNameUpdateFormValues = {
  daoName: string;
};

const handleUpdateDaoName: SubmitHandler<DaoNameUpdateFormValues> = async (
  values: DaoNameUpdateFormValues,
) => {
  console.log('values', values);
};

const DaoSettingsLayout = () => {
  const localForm = useForm<DaoNameUpdateFormValues>({
    mode: 'all',
    resolver: yupResolver(daoNameFormValidation),
  });
  const { handleSubmit, setValue } = localForm;

  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <PageHeading>DAO Settings</PageHeading>
      <Flex
        justify="space-between"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={4}
        paddingTop={4}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginBottom={4}
      >
        <Heading as="h3" fontWeight="600" fontSize="md" marginY={4}>
          Set Your DAO's Name
        </Heading>
        <form onSubmit={handleSubmit(handleUpdateDaoName)}>
          <Flex
            direction="column"
            alignItems="flex-start"
            marginY={8}
            width={{ base: '100%', lg: '50%' }}
          >
            <Input
              name="name"
              label="Govrn Username"
              tip="Enter your username for the Govrn protocol."
              placeholder="govrn-user"
              defaultValue={userData?.name ?? ''}
              localForm={localForm}
            />
            <Button variant="primary" type="submit">
              Save Username
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default DaoSettingsLayout;
