import { Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { HiOutlineCog, HiStar, HiOutlineStar } from 'react-icons/hi';

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
      borderColor={dao.role === 'recruit' ? 'gray.700' : 'brand.purple'}
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
        alignItems="space-apart"
        justifyContent="center"
        width="100%"
        borderTopRadius="none"
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderTopColor={dao.role === 'recruit' ? 'gray.700' : 'brand.purple'}
        borderBottomRadius="inherit"
        paddingY={3}
        paddingX={5}
        bg="white"
      >
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            fontWeight="semibold"
            fontSize="md"
            color={dao.role === 'recruit' ? 'gray.700' : 'brand.purple'}
          >
            {dao.role.charAt(0).toUpperCase() + dao.role.slice(1)}
          </Text>
          {dao.role === 'admin' ? (
            <IconButton
              aria-label="Click on the gear icon to open this DAO's settings."
              bg="transparent"
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              icon={<HiOutlineCog color="#5100E4" size={24} />}
            />
          ) : (
            <IconButton
              aria-label="Click on the star to favorite this DAO."
              bg="transparent"
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              icon={
                dao.isFavorited === true ? (
                  <HiStar
                    fill={dao.role === 'recruit' ? 'gray.700' : '#5100E4'}
                    size={24}
                  />
                ) : (
                  <HiOutlineStar
                    color={dao.role === 'recruit' ? 'gray.700' : '#5100E4'}
                    size={24}
                  />
                )
              }
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DaoCard;
