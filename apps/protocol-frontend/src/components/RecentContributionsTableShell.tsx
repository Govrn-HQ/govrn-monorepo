import { Box, Stack } from '@chakra-ui/react';
import RecentContributionsTable from './RecentContributionsTable';
import EmptyContributions from './EmptyContributions';
import { UIContribution } from '@govrn/ui-types';

interface RecentContributionTableShellProps {
  data: UIContribution[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

const RecentContributionsTableShell = ({
  data: recentContributions,
  fetchNextPage,
  hasNextPage,
}: RecentContributionTableShellProps) => {
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
      {recentContributions.length > 0 ? (
        <Stack spacing="5">
          <RecentContributionsTable
            data={recentContributions}
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
