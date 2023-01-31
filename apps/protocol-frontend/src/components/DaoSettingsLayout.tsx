import { useState } from 'react';
import { Box, Flex, Heading, Text, Icon, Button } from '@chakra-ui/react';
import { Input, Textarea, GovrnSpinner } from '@govrn/protocol-ui';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeading from './PageHeading';
import { yupResolver } from '@hookform/resolvers/yup';
import { daoNameFormValidation } from '../utils/validations';
import { useDaoGet } from '../hooks/useDaoGet';
import DaoSettingsMembersTable from './DaoSettingsMembersTable';
import { useUser } from '../contexts/UserContext';
import DaoNameUpdateForm from './DaoNameUpdateForm';
import DaoSettingsMemberUpdateForm from './DaoSettingsMemberUpdateForm';

const DaoSettingsLayout = () => {
  const { userData } = useUser();
  const daoNameUpdateForm = useForm({
    mode: 'all',
    resolver: yupResolver(daoNameFormValidation),
  });
  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = daoNameUpdateForm;

  const daoMemberAddressesUpdateForm = useForm({
    mode: 'all',
    // resolver: yupResolver(daoTextareaUpdateFormValidation),
  });
  const {
    handleSubmit: handleSubmitDaoMemberAddressesUpdate,
    setValue: setValueDaoMemberAddressesUpdate,
    formState: {
      errors: errorsDaoMemberAddressesUpdate,
      touchedFields: touchedFieldsDaoMemberAddressesUpdate,
    },
  } = daoMemberAddressesUpdateForm;

  const { guildId } = useParams();

  const {
    isLoading: daoLoading,
    isError: daoError,
    data: daoData,
  } = useDaoGet({ id: parseInt(guildId ?? '') });

  if (daoLoading) {
    return <GovrnSpinner />;
  }

  if (daoError) {
    return <Text>An error occurred fetching the DAO.</Text>;
  }

  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <PageHeading>DAO Settings [{daoData?.name}]</PageHeading>
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
        <Heading
          as="h3"
          fontWeight="600"
          fontSize="md"
          marginTop={0}
          marginBottom={4}
        >
          Set Your DAO's Name
        </Heading>
        <DaoNameUpdateForm
          daoId={parseInt(guildId ? guildId : '')}
          daoName={daoData?.name}
        />
        <Flex direction="column" width="80%">
          <DaoSettingsMemberUpdateForm
            daoId={parseInt(guildId ? guildId : '')}
          />
          <DaoSettingsMembersTable daoId={parseInt(guildId ? guildId : '')} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoSettingsLayout;