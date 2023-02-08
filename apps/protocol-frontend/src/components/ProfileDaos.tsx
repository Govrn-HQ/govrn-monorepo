import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, Heading, Divider, Grid } from '@chakra-ui/react';
import { ControlledSelect, GovrnSpinner } from '@govrn/protocol-ui';
import { useDaoUserCreate } from '../hooks/useDaoUserCreate';
import { useDaosList } from '../hooks/useDaosList';
import { useDaoUsersInfiniteList } from '../hooks/useDaoUsersList';
import DaoCard from './DaoCard';
import { SortOrder } from '@govrn/protocol-client';
import { mergeMemberPages } from '../utils/arrays';
import { UIGuildUsers } from '@govrn/ui-types';

interface ProfileDaoProps {
  userId: number | undefined;
  userAddress: string | undefined;
}

const ProfileDaos = ({ userId, userAddress }: ProfileDaoProps) => {
  const [selectedDao, setSelectedDao] = useState<{
    value: number;
    label: string;
  } | null>(null);

  const { isLoading: joinableDaosListLoading, data: joinableDaosListData } =
    useDaosList({
      where: {
        users: { none: { user_id: { equals: userId || 0 } } },
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
      where: { user_id: { equals: userId } },
      orderBy: [
        { membershipStatus: { name: SortOrder.Asc } },
        { favorite: SortOrder.Desc },
      ],
    },
    8, // page size
  );

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
      newDaoUser: {
        userId: userId,
        userAddress: userAddress,
        guildId: selectedDao?.value,
      },
      creatingNewDao: false,
    });
    if (result) {
      setSelectedDao(null);
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
          <Flex direction="row" alignItems="flex-end" gap={4}>
            <Flex direction="column" width="40%" alignSelf="flex-start">
              <ControlledSelect
                label="Select a DAO to Join"
                onChange={dao => setSelectedDao(dao)}
                value={selectedDao ?? null}
                options={daoListOptions}
                isSearchable={false}
                isClearable
              />
            </Flex>
            <Button
              variant="primary"
              onClick={handleDaoJoin}
              disabled={createDaoUserLoading}
            >
              Join
            </Button>
            <Link to="/dao/create">
              <Button variant="secondary" disabled={createDaoUserLoading}>
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
