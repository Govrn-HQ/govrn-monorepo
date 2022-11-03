import React from 'react';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { ResponsiveTimeRange, CalendarTooltipProps } from '@nivo/calendar';
import { GovrnTheme, GovrnSpinner } from '@govrn/protocol-ui';
import { TODAY_DATE, YEAR, BRAND_COLOR_MAP } from '../utils/constants';
import { formatDate } from '../utils/date';
import { subWeeks } from 'date-fns';
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
  daoId: number;
}

interface CustomTooltipDailyContributionsProps extends CalendarTooltipProps {
  date: Date;
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
      member: 'Kevin Malone',
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
    date,
    day,
  }: CustomTooltipDailyContributionsProps) => {
    const { data: dailyContributions } = useContributionList({
      where: {
        guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
        date_of_engagement: { equals: date },
      },
    });

    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        bg="white"
        padding={2}
        boxShadow="md"
        flexGrow={1}
        width="fit-content"
      >
        <Text>{formatDate(day)}</Text>
        {dailyContributions?.map(contribution => (
          <Flex>
            <Text>
              {contribution.name} - {contribution.user.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    );
  };

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
        {BRAND_COLOR_MAP.map(color => (
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
