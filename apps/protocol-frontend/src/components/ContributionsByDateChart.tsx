import React from 'react';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsiveTimeRange } from '@nivo/calendar';
import { GovrnTheme } from '@govrn/protocol-ui';
import { TODAY_DATE, YEAR } from '../utils/constants';
import { subWeeks } from 'date-fns';

type ContributionCount = {
  date: string;
  count: number;
};
interface ContributionsByDateChartProps {
  contributionsCount: ContributionCount[] | undefined;
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
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

const ContributionsByDateChart = ({
  contributionsCount,
  isFetching,
  isLoading,
  isError,
}: ContributionsByDateChartProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const contributionsCountMap = contributionsCount?.map(contribution => {
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
        {contributionsCountMap?.length !== 0 && (
          <ResponsiveTimeRange
            data={
              contributionsCountMap
                ? contributionsCountMap.filter(
                    contribution => contribution.value !== 0,
                  )
                : []
            }
            from={subWeeks(new Date(), YEAR)}
            to={TODAY_DATE}
            weekdayTicks={isMobile ? [] : [1, 3, 5]}
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
        {brandColorMap.map(color => (
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

export default ContributionsByDateChart;
