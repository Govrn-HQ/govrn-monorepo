import { useState } from 'react';
import { Button, Flex, Heading, Divider, Grid } from '@chakra-ui/react';
import { ControlledSelect, GovrnSpinner } from '@govrn/protocol-ui';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useDaosList } from '../hooks/useDaosList';
import { useDaoUsersList } from '../hooks/useDaoUsersList';
import DaoCard from './DaoCard';

interface ProfileDaoProps {
  userId: number | undefined;
}

const ProfileDaos = ({ userId }: ProfileDaoProps) => {
  const [selectedDao, setSelectedDao] = useState<{
    value: number;
    label: string;
  } | null>(null);
  // data fetching within this component so the loading states dont block the entire profile's render -- we can show a spinner for this part of the UI only similar to how we handle the fetches on the DaoDashboard page
  const { isLoading: daosListLoading, data: joinableDaosListData } =
    useDaosList({
      where: { users: { none: { user_id: { equals: userId } } } },
    });

  const { isLoading: daoUsersListLoading, data: daosUsersListData } =
    useDaoUsersList({
      where: { user_id: { equals: userId } },
      orderBy: [{ membershipStatus: { name: 'asc' } }, { favorite: 'desc' }],
    });

  const daoListOptions =
    joinableDaosListData?.map(dao => ({
      value: dao.id,
      label: dao.name ?? '',
    })) || [];

  const { mutateAsync: createDaoUser, isLoading: createDaoUserLoading } =
    useDaoUserCreate();

  const handleDaoJoin = async () => {
    if (!selectedDao || userId === undefined) return;
    const result = await createDaoUser({
      userId: userId,
      guildId: selectedDao?.value,
    });
    if (result) {
      setSelectedDao(null);
    }
  };

  if (daosListLoading || daoUsersListLoading) return <GovrnSpinner />;

  return (
    <Flex
      justify="space-between"
      direction="column"
      wrap="wrap"
      width="100%"
      paddingX={4}
      paddingY={8}
      background="white"
      boxShadow="sm"
      marginBottom={4}
    >
      <Flex justifyContent="space-between" direction="column" wrap="wrap">
        <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
          My DAOs
        </Heading>
        <Divider marginY={8} bgColor="gray.300" />
        <Flex
          direction="column"
          justifyContent="space-apart"
          gap={8}
          width="100%"
        >
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            width={{ base: '100%', lg: '40%' }}
            gap={4}
          >
            <ControlledSelect
              label="Select a DAO to Join"
              onChange={dao => setSelectedDao(dao)}
              value={selectedDao ?? null}
              options={daoListOptions}
              isSearchable={false}
              isClearable
            />
            <Button
              variant="primary"
              onClick={handleDaoJoin}
              disabled={createDaoUserLoading}
            >
              Join
            </Button>
          </Flex>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
            }}
            gap={4}
            justifyContent="space-between"
          >
            {daosUsersListData?.map(daoUser => (
              <DaoCard daoUser={daoUser} key={daoUser.id} />
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileDaos;
