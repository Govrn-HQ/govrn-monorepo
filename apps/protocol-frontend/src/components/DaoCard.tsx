import { Flex, Heading, Text } from '@chakra-ui/react';

type DaoRoles = 'admin' | 'contributor' | 'recruit';

type Dao = {
  id: number;
  name: string;
  role: DaoRoles;
  isFavorited: boolean;
};

interface DaoCardProps {
  dao: Dao;
}

const daoBgGradient = {
  admin: 'linear-gradient(180deg, #5100E4 0%, #9766EF 100%)',
  contributor: 'linear-gradient(180deg, #DCCCFA 0%, #F8F4FF 100%)',
  recruit: 'linear-gradient(180deg, #E2E8F0 0%, #F7FAFC 100%)',
};

const daoNameColor = {
  admin: 'white',
  contributor: 'brand.purple',
  recruit: 'gray.700',
};

const DaoCard = ({ dao }: DaoCardProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={daoBgGradient[dao.role]}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={dao.role === 'recruit' ? 'gray.200' : 'brand.purple'}
      minWidth="14rem"
      borderRadius="md"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="6rem"
      >
        <Heading
          as="h4"
          color={daoNameColor[dao.role]}
          fontWeight="600"
          fontSize="md"
        >
          {dao.name}
        </Heading>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        borderTopRadius="none"
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderTopColor={dao.role === 'recruit' ? 'gray.200' : 'brand.purple'}
        borderBottomRadius="inherit"
        paddingY={3}
        paddingX={5}
        bg="white"
      >
        <Text
          fontWeight="semibold"
          fontSize="md"
          color={dao.role === 'recruit' ? 'gray.700' : 'brand.purple'}
        >
          {dao.role}
        </Text>
      </Flex>
    </Flex>
  );
};

export default DaoCard;
