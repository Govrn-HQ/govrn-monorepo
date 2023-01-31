import { Link } from 'react-router-dom';
import {
  Flex,
  Heading,
  IconButton,
  Text,
  LinkBox,
  LinkOverlay,
  Box,
} from '@chakra-ui/react';
import { HiOutlineCog, HiStar, HiOutlineStar } from 'react-icons/hi';
import { useDaoUserUpdate } from '../hooks/useDaoUserUpdate';

type DaoUser = {
  id: number;
  user_id: number;
  favorite: boolean;
  guild: {
    id: number;
    name?: string | null;
  };
  membershipStatus?:
    | {
        name: string;
      }
    | null
    | undefined;
};

interface DaoCardProps {
  userId: number | undefined;
  daoUser: DaoUser;
}

const DaoCard = ({ userId, daoUser }: DaoCardProps) => {
  const daoBgGradient = (daoRole: string | undefined) =>
    daoRole === 'Recruit'
      ? 'linear-gradient(180deg, #E2E8F0 0%, #F7FAFC 100%)'
      : daoRole === 'Contributor'
      ? 'linear-gradient(180deg, #DCCCFA 0%, #F8F4FF 100%)'
      : 'linear-gradient(180deg, #5100E4 0%, #9766EF 100%)';

  const daoIconColor = (daoRole: string | undefined) =>
    daoRole === 'Recruit' ? 'gray.700' : '#5100E4';

  const daoNameColor = (daoRole: string | undefined) =>
    daoRole === 'Recruit'
      ? 'gray.700'
      : daoRole === 'Contributor'
      ? 'brand.purple'
      : 'white';

  const { mutateAsync: updateDaoUserFavorite } = useDaoUserUpdate();

  const handleUpdateFavorite = async () => {
    if (userId === undefined || daoUser.guild === undefined) return;
    await updateDaoUserFavorite({
      userId: userId,
      guildId: daoUser.guild.id,
      favorite: !daoUser.favorite,
    });
  };

  return (
    <LinkBox>
      <Flex
        direction="column"
        bg={daoBgGradient(daoUser.membershipStatus?.name ?? 'white')}
        borderWidth="1px"
        borderStyle="solid"
        borderColor={
          daoUser.membershipStatus?.name === 'Recruit'
            ? 'gray.700'
            : 'brand.purple'
        }
        minWidth="14rem"
        borderRadius="md"
      >
        <Link to={`/dao/${daoUser.id}`}>
          <LinkOverlay>
            <Box height="100%" width="100%">
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                minHeight="6rem"
                width="100%"
                height="100%"
              >
                <Heading
                  as="h4"
                  color={daoNameColor(
                    daoUser.membershipStatus?.name ?? 'white',
                  )}
                  fontWeight="600"
                  fontSize="md"
                >
                  {daoUser.guild.name}
                </Heading>
              </Flex>
            </Box>
          </LinkOverlay>
        </Link>
        <Flex
          direction="column"
          alignItems="space-apart"
          justifyContent="center"
          width="100%"
          borderTopRadius="none"
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor={
            daoUser.membershipStatus?.name === 'Recruit'
              ? 'gray.700'
              : 'brand.purple'
          }
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
              color={daoIconColor(daoUser.membershipStatus?.name ?? 'gray.600')}
            >
              {daoUser.membershipStatus?.name}
            </Text>
            {daoUser.membershipStatus?.name === 'Admin' ? (
              <Link to={`/dao/${daoUser.id}/settings`}>
                <IconButton
                  aria-label="Click on the gear icon to open this DAO's settings."
                  bg="transparent"
                  _hover={{ bg: 'transparent' }}
                  _active={{ bg: 'transparent' }}
                  icon={<HiOutlineCog color="#5100E4" size={24} />}
                />
              </Link>
            ) : (
              <IconButton
                aria-label="Click on the star to favorite this DAO."
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}
                onClick={handleUpdateFavorite}
                icon={
                  daoUser.favorite === true ? (
                    <HiStar
                      fill={daoIconColor(
                        daoUser.membershipStatus?.name ?? 'gray.600',
                      )}
                      size={24}
                    />
                  ) : (
                    <HiOutlineStar
                      color={daoIconColor(
                        daoUser.membershipStatus?.name ?? 'gray.600',
                      )}
                      size={24}
                    />
                  )
                }
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};

export default DaoCard;
