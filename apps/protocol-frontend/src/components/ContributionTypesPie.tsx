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
    <Flex direction="column" paddingY={4} paddingX={{ base: 4, lg: 0 }}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight={{ base: '5rem', lg: '20rem' }}
        height={{ base: '5rem', lg: '20rem' }}
        width="100%"
        minWidth="15rem"
        paddingY={{ base: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'md' }}
      >
        <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
          Contributions By Type
        </Heading>
        {contributionsDataMap.length !== 0 && (
          <ResponsivePie
            data={contributionsDataMap}
            margin={{ top: 40, right: 40, bottom: 20, left: 40 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default ContributionTypesPie;
