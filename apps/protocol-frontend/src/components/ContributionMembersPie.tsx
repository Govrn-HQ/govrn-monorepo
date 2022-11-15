import { Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsivePie } from '@nivo/pie';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { BRAND_COLOR_MAP } from '../utils/constants';

type ContributionMembersCount = {
  count: number;
  display_name?: string | null;
  user_id?: number | null;
};
interface ContributionMembersPieProps {
  contributionMembersData?: ContributionMembersCount[];
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
}

const ContributionMembersPie = ({
  contributionMembersData,
  isFetching,
  isLoading,
  isError,
}: ContributionMembersPieProps) => {
  const isTablet = useBreakpointValue({ base: true, md: true, lg: false });

  const contributionsDataMap = contributionMembersData?.map(contribution => {
    return {
      id:
        contribution.display_name !== null ||
        contribution.display_name !== undefined
          ? contribution.display_name
          : contribution.user_id, // we will use this until we create a custom tooltip
      label: contribution.display_name,
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
      alignItems="center"
      justifyContent="center"
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
          Contributions By Member
        </Heading>
        {contributionsDataMap?.length !== 0 ? (
          <ResponsivePie
            data={contributionsDataMap || []}
            margin={{
              top: isTablet ? 10 : 40,
              right: isTablet ? 40 : 40,
              bottom: isTablet ? 10 : 40,
              left: isTablet ? 40 : 40,
            }}
            colors={BRAND_COLOR_MAP}
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
              isTablet
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

export default ContributionMembersPie;
