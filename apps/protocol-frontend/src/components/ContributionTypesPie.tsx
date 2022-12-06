import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { BRAND_COLOR_MAP_SUBSET } from '../utils/constants';

type ContributionTypesCount = {
  activity_id: number;
  activity_name: string;
  count: number;
};
interface ContributionTypesPieProps {
  contributionActivityData: ContributionTypesCount[] | undefined;
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
}

const ContributionTypesPie = ({
  contributionActivityData,
  isFetching,
  isLoading,
  isError,
}: ContributionTypesPieProps) => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const isSmallerScreen = useBreakpointValue({
    base: true,
    md: true,
    lg: true,
    xl: true,
    '2xl': false,
  });

  const contributionsDataMap = contributionActivityData?.map(contribution => {
    return {
      id: contribution.activity_name, // we will use this until we create a custom tooltip
      label: contribution.activity_name,
      value: contribution.count,
    };
  });

  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  return (
    <Flex
      direction="column"
      paddingY={4}
      paddingX={{ base: 0 }}
      flexBasis="50%"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height={{ base: '30rem', lg: '25rem' }}
        width={{ base: '22.5rem', lg: '100%' }}
        paddingY={{ base: '0', lg: '4' }}
        paddingX={{ base: '0', lg: '4' }}
        color="gray.700"
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'md' }}
      >
        <Heading
          as="h3"
          size="md"
          color="gray.800"
          fontWeight="normal"
          paddingTop={{ base: 4, lg: 0 }}
        >
          Contributions By Type
        </Heading>
        {contributionsDataMap?.length !== 0 ? (
          <ResponsivePie
            data={contributionsDataMap ? contributionsDataMap : []}
            margin={{
              top: isMobile ? 10 : 40,
              right: isMobile ? 40 : 40,
              bottom: isMobile ? 10 : 40,
              left: isMobile ? 40 : 40,
            }}
            colors={BRAND_COLOR_MAP_SUBSET}
            innerRadius={0.5}
            padAngle={0.8}
            borderWidth={0.5}
            cornerRadius={4}
            activeOuterRadiusOffset={8}
            fit
            arcLinkLabel={data => `${data.label}`}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={1.5}
            arcLinkLabelsColor={{ from: 'color' }}
            layers={
              isSmallerScreen
                ? ['arcs', 'arcLabels']
                : ['arcs', 'arcLinkLabels', 'arcLabels']
            }
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 40,
                itemsSpacing: 10,
                itemWidth: 60,
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
        ) : (
          <Flex padding={8}>
            <Text>
              No Contributions found for that date range. Please try another.
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ContributionTypesPie;
