import { useState } from 'react';
import { Box, Flex, Heading, Text, Icon, Button } from '@chakra-ui/react';
import { Input, Textarea } from '@govrn/protocol-ui';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHeading from './PageHeading';
import { AiFillCheckCircle } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  daoNameFormValidation,
  daoTextareaFormValidation,
} from '../utils/validations';
import { DaoTextareaFormValues } from '../types/forms';
import { splitEntriesByComma } from '../utils/arrays';
import { useDaoUsersList } from '../hooks/useDaoUsersList';
import { useDaoUpdate } from '../hooks/useDaoUpdate';
import DaoSettingsMembersTable from './DaoSettingsMembersTable';

type DaoNameUpdateFormValues = {
  daoName: string;
};

// interface DaoSettinsgsLayoutProps {
//   daoId: number;
// }

const DaoSettingsLayout = () => {
  const localForm = useForm<DaoNameUpdateFormValues>({
    mode: 'all',
    resolver: yupResolver(daoNameFormValidation),
  });
  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = localForm;
  const { guildId } = useParams();
  const [importing, setImporting] = useState(false);
  console.log('guildId', guildId);

  const { isLoading: daoUsersListLoading, data: daosUsersListData } =
    useDaoUsersList({
      where: { guild_id: { equals: parseInt(guildId ? guildId : '') } },
    });

  const { mutateAsync: updateDao, isLoading: updateDaoLoading } =
    useDaoUpdate();

  console.log('daoUsersList', daosUsersListData);
  const handleUpdateDaoName: SubmitHandler<DaoNameUpdateFormValues> = async (
    values: DaoNameUpdateFormValues,
  ) => {
    if (guildId === undefined) return;
    await updateDao({
      name: values.daoName,
      guildId: parseInt(guildId),
    });
  };

  const daoTextareaImportHandler: SubmitHandler<
    DaoTextareaFormValues
  > = async values => {
    const { daoMemberAddresses } = values;
    setImporting(true);
    if (daoMemberAddresses !== undefined) {
      const parsedDaoMemberAddresses = splitEntriesByComma(daoMemberAddresses);
      const uniqueParsedDaoMemberAddresses = [
        ...new Set(parsedDaoMemberAddresses),
      ];
      console.log(
        'uniqueParsedDaoMemberAddresses',
        uniqueParsedDaoMemberAddresses,
      ); // TODO: replace with the DAO creation logic
      setImporting(false);
    }
  };

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
        <Heading
          as="h3"
          fontWeight="600"
          fontSize="md"
          marginTop={0}
          marginBottom={4}
        >
          Set Your DAO's Name
        </Heading>
        <form onSubmit={handleSubmit(handleUpdateDaoName)}>
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            width={{ base: '100%', lg: '50%' }}
            gap={4}
          >
            <Input name="daoName" localForm={localForm} />
            <Button variant="secondary" type="submit">
              Save Name
            </Button>
          </Flex>
        </form>
        <Flex direction="column" width="80%">
          <form onSubmit={handleSubmit(daoTextareaImportHandler)}>
            <Heading
              as="h3"
              fontWeight="600"
              fontSize="md"
              marginTop={0}
              marginBottom={4}
            >
              Add Member Wallet Addresses
            </Heading>
            <Textarea
              name="daoMemberAddresses"
              tip='Enter a comma-separated list of Ethereum addresses. For example: "0x..., 0x...'
              placeholder="0x..., 0x..."
              onChange={addresses => setValue('daoMemberAddresses', addresses)}
              localForm={localForm}
            />
            {!errors['daoMemberAddresses'] &&
              touchedFields['daoMemberAddresses'] === true && (
                <Flex direction="row" alignItems="center" marginY={4}>
                  <Icon
                    as={AiFillCheckCircle}
                    color="brand.purple"
                    width="16px"
                    height="16px"
                    marginRight={2}
                  />
                  <Text fontSize="sm" color="brand.purple">
                    Address list meets formatting requirements.
                  </Text>
                </Flex>
              )}
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
                disabled={
                  importing || errors['daoMemberAddresses'] !== undefined
                }
              >
                Add
              </Button>
            </Flex>
          </form>
          <DaoSettingsMembersTable daoId={parseInt(guildId ? guildId : '')} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoSettingsLayout;
