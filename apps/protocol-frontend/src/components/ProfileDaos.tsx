import { Flex, Heading, Divider, SimpleGrid } from '@chakra-ui/react';
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
      <Flex justify="space-between" direction="column" wrap="wrap">
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
