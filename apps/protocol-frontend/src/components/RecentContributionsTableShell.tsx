import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import AttestationsTable from './AttestationsTable';
import EmptyContributions from './EmptyContributions';
import MyAttestationsTable from './MyAttestationsTable';
import { GovrnSpinner } from '@govrn/protocol-ui';
import {
  useContributionInfiniteList,
  useContributionList,
} from '../hooks/useContributionList';
import { mergePages } from '../utils/arrays';
import { useUser } from '../contexts/UserContext';

interface RecentContributionTableShellProps {
  daoId: number;
}

const RecentContributionsTableShell = ({
  daoId,
}: RecentContributionTableShellProps) => {
  const { userData } = useUser();

  const {
    isFetching,
    data: recentContributions,
    isLoading,
    isError,
  } = useContributionList({
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
    },
  });

  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  console.log('recent contributions', recentContributions);
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      {/* {contributions && contributions.pages.length > 0 ? (
        <Stack spacing="5">
          <RecentContributionsTable
            contributionsData={mergePages(contributions.pages)}
            hasMoreItems={hasNextPage}
            nextPage={fetchNextPage}
          />
          ) : (
          <EmptyContributions />
        </Stack>
      ) : (
        <EmptyContributions />
      )} */}
    </Box>
  );
};

export default RecentContributionsTableShell;
