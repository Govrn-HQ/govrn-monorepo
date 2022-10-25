import { Box, Flex, Heading } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';

import PageHeading from '../components/PageHeading';
import ContributionTypesPie from './ContributionTypesPie';
import RecentContributionsTableShell from './RecentContributionsTableShell';
interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}

const mockData = [
  {
    id: 1,
    type: 'Proposal',
    label: 'Proposal',
    count: 10,
  },
  {
    id: 2,
    type: 'Pull Request',
    label: 'Pull Request',
    count: 20,
  },
  {
    id: 3,
    type: 'Note Taking',
    label: 'Note Taking',
    count: 15,
  },
  {
    id: 4,
    type: 'Testing',
    label: 'Testing',
    count: 50,
  },
];

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
          {/* <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributions By Member
            </Heading>
          </Flex> */}
          <Flex
            direction={{ base: 'column', lg: 'column' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={2}
            justifyContent="center"
            // justifyContent={{ base: 'space-between', lg: 'space-between' }}

            // bg="red"
          >
            <Flex direction="column" gap={2}>
              <ContributionTypesPie contributionsData={mockData} />
            </Flex>
            {/* <Flex direction="column" gap={2}>
              <ContributionTypesPie contributionsData={mockData} />
            </Flex> */}
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
