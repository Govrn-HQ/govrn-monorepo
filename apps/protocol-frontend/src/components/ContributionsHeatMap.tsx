import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { ResponsiveCalendar, ResponsiveTimeRange } from '@nivo/calendar';
import { GovrnTheme } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';

type ContributionCount = {
  date: string;
  count: number;
};
interface ContributionsHeatMapProps {
  contributionsCount: ContributionCount[];
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

const ContributionsHeatMap = ({
  contributionsCount,
  startDateOffset,
}: ContributionsHeatMapProps) => {
  console.log('contributions in heat map', contributionsCount);

  const contributionsCountMap = contributionsCount.map(contribution => {
    return {
      day: contribution.date,
      value: contribution.count,
    };
  });

  return (
    <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
      <Flex direction="column" height="10rem">
        {contributionsCountMap.length !== 0 ? (
          <ResponsiveTimeRange
            data={contributionsCountMap}
            weekdayTicks={[1, 3, 5]}
            from={
              startDateOffset
                ? subWeeks(new Date(), startDateOffset - 1)
                : subWeeks(new Date(), 1)
            }
            to={new Date()}
            emptyColor="#eeeeee"
            colors={[
              brandColors[100],
              brandColors[200],
              brandColors[300],
              brandColors[400],
              brandColors[500],
              brandColors[600],
              brandColors[700],
            ]}
            dayRadius={1}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
              },
            ]}
          />
        ) : (
          <Box>No contributions found for this year!</Box>
        )}
      </Flex>
      <Flex direction="row" alignItems="center" justifyContent="center">
        <Text as="span" fontSize="sm" fontWeight="normal" paddingRight={1}>
          Less
        </Text>
        {brandColorMap.map(color => (
          <Box backgroundColor={color} width="15.36px" height="15.36px" />
        ))}
        <Text as="span" fontSize="sm" fontWeight="normal" paddingLeft={1}>
          More
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContributionsHeatMap;
