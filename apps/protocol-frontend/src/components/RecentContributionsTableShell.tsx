import { Box, Stack, Text } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useContributionInfiniteList } from '../hooks/useContributionList';
import { SortOrder } from '@govrn/protocol-client';
import RecentContributionsTable from './RecentContributionsTable';
import EmptyContributions from './EmptyContributions';
import fetch from 'node-fetch';

interface RecentContributionTableShellProps {
  daoId: number;
}

const RecentContributionsTableShell = ({
  daoId,
}: RecentContributionTableShellProps) => {
  const {
    isFetching,
    data: recentContributions,
    hasNextPage,
    fetchNextPage,
  } = useContributionInfiniteList({
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
    },
    orderBy: { date_of_engagement: SortOrder.Desc },
  });

  console.log('recentContributions', recentContributions?.pages);

  if (isFetching) {
    return <GovrnSpinner />;
  }

  return (
    <Box
      paddingY={{ base: '4' }}
      paddingX={{ base: '0', md: '4' }}
      color="gray.700"
      width="100%"
      maxWidth="100vw"
      overflowX="auto"
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'md' }}
    >
      {recentContributions && recentContributions.pages.length > 0 ? (
        <Stack spacing="5">
          <RecentContributionsTable
            contributionsData={recentContributions.pages}
            nextPage={fetchNextPage}
            hasMoreItems={hasNextPage || false}
          />
        </Stack>
      ) : (
        <EmptyContributions />
      )}
    </Box>
  );
};

export default RecentContributionsTableShell;
