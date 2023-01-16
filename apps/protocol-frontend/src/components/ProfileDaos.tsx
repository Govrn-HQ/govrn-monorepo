import { Button, Flex, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import { ControlledSelect, GovrnSpinner } from '@govrn/protocol-ui';
import { useDaosList } from '../hooks/useDaosList';
import DaoCard from './DaoCard';

//TODO: add the Join function

// only here for mocking purposes, will replace
type DaoRoles = 'admin' | 'contributor' | 'recruit';

type Dao = {
  id: number;
  name: string;
  role: DaoRoles;
  favorite: boolean;
};

interface ProfileDaoProps {
  userId: number | undefined;
}

// this is mock data for the user's DAOs with their role and whether or not it is favorited
// TODO: replace this with data coming from a guildUsers query that includes these fields

const mockDaos: Dao[] = [
  {
    id: 1,
    name: 'Govrn',
    role: 'admin',
    favorite: true,
  },
  {
    id: 2,
    name: 'Boys Club',
    role: 'contributor',
    favorite: true,
  },
  {
    id: 3,
    name: 'Seed Club',
    role: 'recruit',
    favorite: false,
  },
  {
    id: 3,
    name: 'Raid Guild',
    role: 'recruit',
    favorite: false,
  },
];

const ProfileDaos = ({ userId }: ProfileDaoProps) => {
  // data fetching within this component so the loading states dont block the entire profile's render -- we can show a spinner for this part of the UI only similar to how we handle the fetches on the DaoDashboard page
  const { isLoading: daosListIsLoading, data: joinableDaosListData } =
    useDaosList({
      where: { users: { none: { user_id: { equals: userId } } } }, // show daos user isn't in and can join
    });

  const daoListOptions =
    joinableDaosListData?.map(dao => ({
      value: dao.id,
      label: dao.name ?? '',
    })) || [];

  if (daosListIsLoading) return <GovrnSpinner />;

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
              isSearchable={false}
              onChange={value => console.log(value)}
              options={daoListOptions}
            />
            <Button variant="primary">Join</Button>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={4}>
            {mockDaos.map(dao => (
              <DaoCard dao={dao} key={dao.id} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileDaos;
