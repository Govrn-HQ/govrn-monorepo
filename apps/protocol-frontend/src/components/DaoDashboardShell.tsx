import { Box, Flex, Heading } from '@chakra-ui/react';
import PageHeading from '../components/PageHeading';
import ContributionTypesPieShell from './ContributionTypesPieShell';
import RecentContributionsTableShell from './RecentContributionsTableShell';
interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}

const startDate = new Date('7/1/2022');
const endDate = new Date('8/1/2022');

const DaoDashboardShell = ({ daoName, daoId }: DaoDashboardShellProps) => {
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      width="100%"
    >
      <PageHeading>{daoName}</PageHeading>
      <Flex direction="column" gap={4}>
        <Flex direction={{ base: 'column' }} gap={2}>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributions By Date
            </Heading>
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributions By Member
            </Heading>
          </Flex>
          <Flex
            direction={{ base: 'column', lg: 'column' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={2}
            justifyContent="center"
          >
            <Flex direction="column" gap={2}>
              <ContributionTypesPieShell
                daoId={daoId}
                startDate={startDate}
                endDate={endDate}
              />
            </Flex>
          </Flex>
          <Flex direction="column" gap={2} padding={2}>
            <RecentContributionsTableShell daoId={daoId} />
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Active Members
            </Heading>
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributors This Month
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoDashboardShell;
