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
        // minHeight={{ base: '5rem', lg: '40rem' }}
        height={{ base: '20rem', lg: '30rem' }}
        width={{ base: '20rem', lg: '40rem' }}
        paddingY={{ base: '0', lg: '4' }}
        paddingX={{ base: '0', lg: '4' }}
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
            margin={{
              top: isMobile ? 10 : 40,
              right: isMobile ? 40 : 40,
              bottom: isMobile ? 10 : 40,
              left: isMobile ? 40 : 10,
            }}
            colors={brandColorMap}
            isInteractive
            innerRadius={0.5}
            padAngle={0.7}
            borderWidth={1}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            arcLinkLabel={data => `${data.label}: ${data.value}`}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            layers={
              isMobile
                ? ['arcs', 'arcLabels']
                : ['arcs', 'arcLinkLabels', 'arcLabels', 'legends']
            }
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 40,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default ContributionTypesPie;
