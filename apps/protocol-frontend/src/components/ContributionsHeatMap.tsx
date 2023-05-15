import { Flex, Box, Text, useBreakpointValue, Divider } from '@chakra-ui/react';
import { SortOrder } from '@govrn/protocol-client';
import { ResponsiveTimeRange, CalendarTooltipProps } from '@nivo/calendar';
import { subWeeks, addDays } from 'date-fns';
import { BRAND_COLOR_MAP_SUBSET, YEAR } from '../utils/constants';
import { useContributionList } from '../hooks/useContributionList';
import { formatDate } from '../utils/date';
import { TooltipWrapper } from '@nivo/tooltip';

import pluralize from 'pluralize';

type ContributionCount = {
  date: string | Date;
  count: number;
};

interface ContributionsHeatMapProps {
  contributionsCount: ContributionCount[];
  startDateOffset?: number;
  guildIds?: number;
}

const CustomTooltipDailyContributions = ({
  day,
  value,
}: CalendarTooltipProps) => {
  const { data: dailyContributions } = useContributionList({
    orderBy: { date_of_engagement: SortOrder.Desc },
    first: 5,
    where: {
      date_of_engagement: {
        gte: new Date(day),
        lt: addDays(new Date(day), 1),
      },
    },
  });

  return (
    <TooltipWrapper anchor="left" position={[0, 0]}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        width={{ base: '75vw', lg: '25vw' }}
        backgroundColor="white"
        boxShadow="md"
        padding={2}
      >
        <Text fontWeight="normal" fontSize="sm">
          Recent {dailyContributions?.length}{' '}
          {pluralize('Contributions', dailyContributions?.length)} on {day}
        </Text>
        {dailyContributions !== undefined && dailyContributions?.length > 0 && (
          <Divider marginY={1} />
        )}
        {dailyContributions?.map(contribution => (
          <Flex direction="row" key={contribution.id}>
            <Text as="span" fontWeight="normal" fontSize="xs">
              {contribution.name} -
              <Text
                as="span"
                fontWeight="normal"
                fontSize="xs"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                {' '}
                {contribution.guilds[0]?.guild?.name ?? 'Unassigned'}
              </Text>
            </Text>
          </Flex>
        ))}
        {dailyContributions !== undefined &&
          dailyContributions?.length > 0 &&
          parseInt(value) > 5 && (
            <Text as="span" fontWeight="normal" fontSize="xs">
              ...and{' '}
              <Text
                as="span"
                fontWeight="normal"
                fontSize="xs"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                {parseInt(value) - 5}
              </Text>
              <Text as="span" fontWeight="normal" fontSize="xs">
                {' '}
                more!
              </Text>
            </Text>
          )}
      </Flex>
    </TooltipWrapper>
  );
};

const ContributionsHeatMap = ({
  contributionsCount,
  startDateOffset,
}: ContributionsHeatMapProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const contributionsCountMap = contributionsCount?.map(contribution => {
    return {
      day: formatDate(contribution.date, 'yyyy-MM-dd', true),
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
            from={subWeeks(new Date(), YEAR)}
            to={new Date()}
            weekdayTicks={isMobile ? [] : [1, 3, 5]}
            emptyColor="#eeeeee"
            colors={BRAND_COLOR_MAP_SUBSET}
            dayRadius={1}
            margin={
              isMobile
                ? { top: 20, right: 10, bottom: 0, left: 10 }
                : { top: 20, right: 20, bottom: 20, left: 20 }
            }
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            tooltip={CustomTooltipDailyContributions}
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
