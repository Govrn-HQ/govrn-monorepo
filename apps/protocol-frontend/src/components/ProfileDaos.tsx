import { useState, useMemo, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Button,
  Flex,
  Heading,
  Link,
  Divider,
  Grid,
  Text,
} from '@chakra-ui/react';
import {
  ControlledSelect,
  GovrnSpinner,
  SelectOption as Option,
} from '@govrn/protocol-ui';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useDaoUserUpdate } from '../hooks/useDaoUserUpdate';
import { useDaosList } from '../hooks/useDaosList';
import { useDaoUsersInfiniteList } from '../hooks/useDaoUsersList';
import DaoCard from './DaoCard';
import { SortOrder } from '@govrn/protocol-client';
import { mergeMemberPages } from '../utils/arrays';
import { UIGuildUsers } from '@govrn/ui-types';
import { LEFT_MEMBERSHIP_NAME } from '../utils/constants';
import useUserGet from '../hooks/useUserGet';

interface ProfileDaoProps {
  userId: number | undefined;
  userAddress: string | undefined;
}

const ProfileDaos = ({ userId, userAddress }: ProfileDaoProps) => {
  const [selectedDao, setSelectedDao] = useState<Option<number> | null>(null);

  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  const { data: userDaosData } = useUserGet({ userId: userId });
  const userDaos = userDaosData?.userDaos;

  const userDaoIds = new Map();
  userDaos?.forEach(dao => {
    userDaoIds.set(dao.guild_id, dao.guild_id);
  });

  const { data: joinableDaosListData, isLoading: joinableDaosListLoading } =
    useDaosList({
      where: {
        users: {
          every: {
            OR: [
              { user_id: { not: { equals: userId || 0 } } },
              {
                AND: [
                  {
                    user_id: { equals: userId || 0 },
                  },
                  {
                    membershipStatus: {
                      is: { name: { equals: LEFT_MEMBERSHIP_NAME } },
                    },
                  },
                ],
              },
            ],
          },
        },
        status: { equals: 'VALIDATED' },
      },
      first: 1000,
      orderBy: {
        name: SortOrder.Asc,
      },
    });

  const {
    data: daoUsersData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useDaoUsersInfiniteList(
    {
      where: {
        user_id: { equals: userId },
        membershipStatus: { isNot: { name: { equals: LEFT_MEMBERSHIP_NAME } } },
      },

      orderBy: [
        { membershipStatus: { name: SortOrder.Asc } },
        { favorite: SortOrder.Desc },
      ],
    },
    8, // page size
  );

  const daoListOptions =
    joinableDaosListData?.map(dao => ({
      label: dao.name ?? '',
      value: dao.id,
    })) || [];

  const { mutateAsync: createDaoUser, isLoading: createDaoUserLoading } =
    useDaoUserCreate();

  const {
    mutateAsync: updateDaoMemberStatus,
    isLoading: updateDaoMemberLoading,
  } = useDaoUserUpdate();

  const handleDaoJoin = async () => {
    if (!selectedDao || userId === undefined) return;

    if (userDaoIds.has(selectedDao?.value)) {
      const updateResult = await updateDaoMemberStatus({
        userId: userId,
        guildId: selectedDao?.value,
        membershipStatus: 'Recruit',
        rejoining: true,
      });
      if (updateResult) {
        setSelectedDao(null);
      }
    }

    if (!userDaoIds.has(selectedDao?.value)) {
      const createResult = await createDaoUser({
        newDaoUser: {
          userId: userId,
          userAddress: userAddress,
          guildId: selectedDao?.value,
          membershipStatus: 'Recruit',
        },
        creatingNewDao: false,
      });
      if (createResult) {
        setSelectedDao(null);
      }
    }
  };

  const data = useMemo<UIGuildUsers[]>(() => {
    return mergeMemberPages(
      daoUsersData && daoUsersData.pages.length > 0 ? daoUsersData.pages : [],
    );
  }, [daoUsersData]);

  if (joinableDaosListLoading) return <GovrnSpinner />;

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
      <Flex
        justifyContent="space-between"
        direction="column"
        wrap="wrap"
        id="myDaos"
      >
        <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
          My DAOs
        </Heading>
        {data && data.length === 0 ? (
          <Flex
            direction="column"
            maxWidth={{ base: '100%', xl: '50%' }}
            fontSize="md"
          >
            <Text>You'll need other collaborators to be part of a DAO!</Text>
            <Text>
              Select a DAO to join below or press create DAO and make your own.
            </Text>
          </Flex>
        ) : null}
        <Divider marginY={{ base: 4, lg: 4 }} bgColor="gray.300" />
        <Flex
          direction="column"
          justifyContent="space-apart"
          gap={8}
          width="100%"
        >
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'flex-start', lg: 'flex-end' }}
            gap={4}
          >
            <Flex
              direction="column"
              alignSelf="flex-start"
              width={{ base: '100%', lg: '40%' }}
            >
              <ControlledSelect
                label="Select a DAO to Join"
                isMulti={false}
                onChange={dao => {
                  if (dao instanceof Array || !dao) {
                    return;
                  }
                  setSelectedDao(dao);
                }}
                value={selectedDao ?? null}
                options={daoListOptions}
                isSearchable={false}
                isClearable
              />
            </Flex>
            <Button
              variant="primary"
              onClick={handleDaoJoin}
              disabled={createDaoUserLoading || updateDaoMemberLoading}
              width={{ base: '100%', lg: 'auto' }}
            >
              Join
            </Button>

            <Link
              as={RouterLink}
              to="/dao/create"
              width={{ base: '100%', lg: 'auto' }}
              textDecoration="none"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                variant="secondary"
                disabled={createDaoUserLoading}
                width={{ base: '100%', lg: 'auto' }}
              >
                Create DAO
              </Button>
            </Link>
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
            {data?.map(daoUser => (
              <DaoCard userId={userId} daoUser={daoUser} key={daoUser.id} />
            ))}
          </Grid>
          {hasNextPage && (
            <Flex direction="column" alignItems="flex-start">
              <Button
                variant="secondary"
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileDaos;
