import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useParams } from 'react-router-dom';
import { useDaoGet } from '../hooks/useDaoGet';
import PageHeading from './PageHeading';
import DaoNameUpdateForm from './DaoNameUpdateForm';
import DaoSettingsMemberUpdateForm from './DaoSettingsMemberUpdateForm';
import DaoSettingsMembersTable from './DaoSettingsMembersTable';

const DaoSettingsLayout = () => {
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
        <Flex direction="column" width={{ base: '100%', lg: '80%' }}>
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
