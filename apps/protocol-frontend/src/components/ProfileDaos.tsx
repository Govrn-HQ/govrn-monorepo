import { Button, Flex, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
import { ControlledSelect } from '@govrn/protocol-ui';
import DaoCard from './DaoCard';

// only here for mocking purposes, will replace
type DaoRoles = 'admin' | 'contributor' | 'recruit';

type Dao = {
  id: number;
  name: string;
  role: DaoRoles;
  isFavorited: boolean;
};

interface ProfileDaoProps {
  daos: Dao[];
}

const ProfileDaos = ({ daos }: ProfileDaoProps) => {
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
            width="40%"
            gap={4}
          >
            <ControlledSelect
              label="Select a DAO to Join"
              isSearchable={true}
              onChange={value => console.log(value)}
              options={[
                { value: '1', label: 'DAO 1' },
                { value: '2', label: 'DAO 2' },
              ]}
            />
            <Button variant="primary">Join</Button>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 4 }} spacing={4}>
            {daos.map(dao => (
              <DaoCard dao={dao} key={dao.id} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileDaos;
