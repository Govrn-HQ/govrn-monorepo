import { Flex, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsivePie, Pie } from '@nivo/pie';
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
        // minHeight={{ base: '5rem', lg: '20rem' }}
        // height={{ base: '5rem', lg: '20rem' }}
        // width={{ base: '10rem', lg: '20rem' }}

        paddingY={{ base: '0', lg: '8' }}
        paddingX={{ base: '0', lg: '8' }}
        color="gray.700"
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'md' }}
      >
        <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
          Contributions By Type
        </Heading>
        {contributionsDataMap.length !== 0 && (
          <Pie
            data={contributionsDataMap}
            width={isMobile ? 300 : 500}
            height={isMobile ? 300 : 300}
            margin={{
              top: isMobile ? 10 : 40,
              right: isMobile ? 40 : 20,
              bottom: isMobile ? 10 : 40,
              left: isMobile ? 40 : 20,
            }}
            colors={brandColorMap}
            innerRadius={0.5}
            padAngle={0.7}
            borderWidth={1}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            arcLinkLabel={data => `${data.label}: ${data.value}`}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default ContributionTypesPie;
