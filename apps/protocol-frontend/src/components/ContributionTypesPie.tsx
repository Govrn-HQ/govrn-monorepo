import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { GovrnTheme, GovrnSpinner } from '@govrn/protocol-ui';
import { useContributionActivityType } from '../hooks/useContributionActivityType';

// type ContributionTypesCount = {
//   type: string;
//   id: number;
//   count: number;
//   // date: string;
//   // count: number;
// };
interface ContributionTypesPieProps {
  daoId: number;
  startDate: Date;
  endDate: Date;
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

const ContributionTypesPie = ({ daoId }: ContributionTypesPieProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const {
    isFetching,
    isLoading,
    isError,
    data: contributionActivityData,
  } = useContributionActivityType({
    startDate: new Date('8/1/2022'),
    endDate: new Date('9/1/2022'),
    guildId: daoId,
  });

  const contributionsDataMap = contributionActivityData?.map(contribution => {
    return {
      id: contribution.activity_id,
      label: contribution.activity_name,
      value: contribution.count,
    };
  });

  console.log('contributionActivityData', contributionActivityData);
  console.log('contributionsDataMap', contributionsDataMap);

  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  return (
    <Flex direction="column" paddingY={4} paddingX={{ base: 4, lg: 0 }}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
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
        {contributionsDataMap?.length !== 0 && (
          <ResponsivePie
            data={contributionsDataMap ? contributionsDataMap : []}
            margin={{
              top: isMobile ? 10 : 40,
              right: isMobile ? 40 : 40,
              bottom: isMobile ? 10 : 40,
              left: isMobile ? 40 : 40,
            }}
            colors={brandColorMap}
            innerRadius={0.5}
            padAngle={0.8}
            borderWidth={0.5}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            fit
            arcLinkLabel={data => `${data.label}: ${data.value}`}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={1.5}
            arcLinkLabelsColor={{ from: 'color' }}
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
