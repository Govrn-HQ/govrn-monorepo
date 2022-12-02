import {
  Flex,
  Box,
  Divider,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SortOrder } from '@govrn/protocol-client';
import { ResponsiveTimeRange, CalendarTooltipProps } from '@nivo/calendar';
import { TooltipWrapper } from '@nivo/tooltip';
import { GovrnTheme, GovrnSpinner } from '@govrn/protocol-ui';
import pluralize from 'pluralize';
import { TODAY_DATE, YEAR, BRAND_COLOR_MAP_SUBSET } from '../utils/constants';
import { endOfDay, subWeeks, addDays } from 'date-fns';
import { useContributionList } from '../hooks/useContributionList';

type ContributionCount = {
  date: string;
  count: number;
};
interface ContributionsByDateChartProps {
  contributionsCount: ContributionCount[] | undefined;
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
  daoId: number | null;
}

const brandColors = GovrnTheme.colors.brand.primary;

const ContributionsByDateChart = ({
  daoId,
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

  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  const CustomTooltipDailyContributions = ({
    day,
    value,
  }: CalendarTooltipProps) => {
    const { data: dailyContributions } = useContributionList({
      orderBy: { date_of_engagement: SortOrder.Desc },
      first: 5,
      where: {
        guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
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
          {dailyContributions !== undefined &&
            dailyContributions?.length > 0 && <Divider marginY={1} />}
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
                  {contribution.user.name}
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

  if (daoId === null) {
    return (
      <Flex direction="column" paddingBottom={4} paddingX={{ base: 4, lg: 0 }}>
        <Flex
          direction="column"
          paddingY={{ base: '4', lg: '4' }}
          paddingX={{ base: '0', lg: '4' }}
          color="gray.700"
          background="white"
          boxShadow="sm"
          borderRadius={{ base: 'none', md: 'md' }}
        >
          <Text>
            Error fetching Contributions because the DAO's id is null.{' '}
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex direction="column" paddingX={{ base: 4, lg: 0 }} paddingBottom="0">
      <Flex
        direction="column"
        paddingY={{ base: '4', lg: '4' }}
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
          paddingBottom={4}
          textAlign="center"
        >
          Contributions By Date
        </Heading>
        {contributionsCountMap !== undefined &&
          contributionsCountMap?.length !== 0 && (
            <Box
              alignSelf="flex-start"
              height={{ base: '5rem', lg: '10rem' }}
              width="100%"
              paddingX={{ base: 2, lg: 0 }}
            >
              <ResponsiveTimeRange
                data={contributionsCountMap?.filter(
                  contribution => contribution.value !== 0,
                )}
                from={subWeeks(new Date(), YEAR)}
                to={endOfDay(TODAY_DATE)} // inclusive of current day
                emptyColor="#eeeeee"
                weekdayTicks={isMobile ? [] : [1, 3, 5]}
                weekdayLegendOffset={isMobile ? -5 : 75} // forcing this to hide the days -- it renders as part of the dom in the svg even with an empty array
                colors={BRAND_COLOR_MAP_SUBSET}
                dayRadius={1}
                margin={
                  isMobile
                    ? { top: 20, right: 10, bottom: 0, left: 10 }
                    : { top: 20, right: 10, bottom: 20, left: 10 }
                }
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                tooltip={CustomTooltipDailyContributions}
              />
            </Box>
          )}

        <Flex
          direction="row"
          alignItems="center"
          justifyContent={{ base: 'center', lg: 'center' }}
          paddingX={{ base: 2, lg: 0 }}
        >
          <Text
            as="span"
            fontSize={{ base: 'xs', lg: 'sm' }}
            fontWeight="normal"
            paddingRight={1}
          >
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
    </Flex>
  );
};

export default ContributionsByDateChart;
