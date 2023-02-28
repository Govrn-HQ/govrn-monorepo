import { Box, Stack, Text } from '@chakra-ui/react';
import RecentContributionsTable from './RecentContributionsTable';
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
        <Stack spacing="5">
          <Box
            paddingX={{ base: '4', md: '6' }}
            width="fit-content"
            paddingY={4}
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing="4"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="lg" fontWeight="medium">
                No Contributions Yet!{' '}
                <span
                  role="img"
                  aria-labelledby="eyes emoji showcasing that there are not any contributions submitted yet"
                >
                  👀
                </span>
              </Text>
            </Stack>
            <Stack direction="column" spacing="4" paddingTop={8}>
              <Text fontSize="md" fontWeight="regular" color="gray.900">
                Get started by adding your first contribution. Click the button
                below or the "+" in the bottom right corner of the page.
              </Text>
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default RecentContributionsTableShell;
