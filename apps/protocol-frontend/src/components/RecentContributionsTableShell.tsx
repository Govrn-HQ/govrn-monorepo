import { Box, Stack, Text } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useContributionList } from '../hooks/useContributionList';
import { SortOrder } from '@govrn/protocol-client';
import RecentContributionsTable from './RecentContributionsTable';
import EmptyContributions from './EmptyContributions';

interface RecentContributionTableShellProps {
  daoId: number;
  displayNumber?: number;
}

const RecentContributionsTableShell = ({
  daoId,
  displayNumber = 10,
}: RecentContributionTableShellProps) => {
  const {
    isFetching,
    data: recentContributions,
    isLoading,
    isError,
  } = useContributionList({
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
    },
    first: displayNumber,
    orderBy: { date_of_engagement: SortOrder.Desc },
  });

  console.log('recentContributions', recentContributions);

  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  return (
    <Box
      paddingY={{ base: '4' }}
      paddingX={{ base: '0', md: '4' }}
      color="gray.700"
      maxWidth="1200px"
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'md' }}
    >
      {recentContributions && recentContributions.length > 0 ? (
        <Stack spacing="5">
          <RecentContributionsTable contributionsData={recentContributions} />
        </Stack>
      ) : (
        <EmptyContributions />
      )}
    </Box>
  );
};

export default RecentContributionsTableShell;
