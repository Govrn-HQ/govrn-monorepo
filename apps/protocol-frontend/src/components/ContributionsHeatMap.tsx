import React from 'react';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsiveTimeRange } from '@nivo/calendar';
import { GovrnTheme } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import { BRAND_COLOR_MAP_SUBSET } from '../utils/constants';

type ContributionCount = {
  date: string;
  count: number;
};
interface ContributionsHeatMapProps {
  contributionsCount: ContributionCount[];
  startDateOffset?: number;
}

const brandColors = GovrnTheme.colors.brand.primary;

const ContributionsHeatMap = ({
  contributionsCount,
  startDateOffset,
}: ContributionsHeatMapProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const contributionsCountMap = contributionsCount.map(contribution => {
    return {
      day: contribution.date,
      value: contribution.count,
    };
  });

  return (
    <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
      <Flex
        direction="column"
        minHeight={{ base: '5rem', lg: '10rem' }}
        height={{ base: '5rem', lg: '10rem' }}
        width="100%"
        maxWidth="100vw"
      >
        {contributionsCountMap.length !== 0 && (
          <ResponsiveTimeRange
            data={contributionsCountMap.filter(
              contribution => contribution.value !== 0,
            )}
            from={subWeeks(new Date(), 52)}
            to={new Date()}
            weekdayTicks={isMobile ? [] : [1, 3, 5]}
            emptyColor="#eeeeee"
            colors={[
              brandColors[300],
              brandColors[400],
              brandColors[500],
              brandColors[600],
              brandColors[700],
            ]}
            dayRadius={1}
            margin={
              isMobile
                ? { top: 20, right: 10, bottom: 0, left: 10 }
                : { top: 20, right: 20, bottom: 20, left: 20 }
            }
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
          />
        )}
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent={{ base: 'flex-start', lg: 'center' }}
      >
        <Text as="span" fontSize="sm" fontWeight="normal" paddingRight={1}>
          Less
        </Text>
        {BRAND_COLOR_MAP_SUBSET.map(color => (
          <Box
            key={color}
            backgroundColor={color}
            width="15.36px"
            height="15.36px"
          />
        ))}
        <Text as="span" fontSize="sm" fontWeight="normal" paddingLeft={1}>
          More
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContributionsHeatMap;
