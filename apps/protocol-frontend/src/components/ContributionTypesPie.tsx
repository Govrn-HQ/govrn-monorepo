import { Flex, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { GovrnTheme } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';

type ContributionTypesCount = {
  type: string;
  id: number;
  count: number;
  // date: string;
  // count: number;
};
interface ContributionTypesPieProps {
  contributionsData: ContributionTypesCount[];
  startDateOffset?: number;
}

const brandColors = GovrnTheme.colors.brand.primary;

const brandColorMap = [
  '#ffb4e2',
  '#fb84ce',
  '#f854ba',
  '#f526a6',
  '#db0f8d',
  '#ab076d',
  '#76024e',
];

const ContributionTypesPie = ({
  contributionsData,
}: ContributionTypesPieProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const contributionsDataMap = contributionsData.map(contribution => {
    return {
      ...contribution,
      value: contribution.count,
      label: contribution.type,
    };
  });

  return (
    <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight={{ base: '5rem', lg: '10rem' }}
        height={{ base: '5rem', lg: '10rem' }}
        paddingY={{ base: '4' }}
        paddingX={{ base: '0', md: '4' }}
        color="gray.700"
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'md' }}
      >
        <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
          Contributions By Type
        </Heading>
        {contributionsDataMap.length !== 0 && (
          <ResponsivePie data={contributionsDataMap} />
        )}
      </Flex>
    </Flex>
  );
};

export default ContributionTypesPie;
