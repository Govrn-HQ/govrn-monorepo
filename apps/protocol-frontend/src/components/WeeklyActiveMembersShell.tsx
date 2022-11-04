import { useState } from 'react';
import CountDisplay from './CountDisplay';
import { useContributionList } from '../hooks/useContributionList';
import { subWeeks, endOfDay, startOfDay } from 'date-fns';
import { formatDate } from '../utils/date';
import pluralize from 'pluralize';
import { TODAY_DATE } from '../utils/constants';

interface WeeklyActiveMembersShellProps {
  daoId: number;
}

const WeeklyActiveMembersShell = ({ daoId }: WeeklyActiveMembersShellProps) => {
  const {
    data: contributionsInRangeCount,
    isLoading,
    isFetching,
    isError,
  } = useContributionList({
    first: 1000,
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
    },
  });

  const setWeekRange = (weekRange: number) => {
    const weeks = [];
    for (let i = 0; i <= weekRange - 1; i++) {
      weeks.push(
        contributionsInRangeCount?.filter(
          contribution =>
            formatDate(contribution.date_of_engagement) >=
              formatDate(startOfDay(subWeeks(TODAY_DATE, i + 1))) &&
            formatDate(contribution.date_of_engagement) <=
              formatDate(endOfDay(subWeeks(TODAY_DATE, i))),
        ),
      );
    }
    return weeks;
  };

  const lastNineWeeks = setWeekRange(9);
  const activeOverNineWeeks = lastNineWeeks.map(week => ({
    active: [...new Set(week?.map(contribution => contribution.user.name))]
      .length,
  }));

  const weeklyAverage = Math.round(
    activeOverNineWeeks.map(a => a.active).reduce((a, b) => a + b, 0) /
      activeOverNineWeeks.length,
  );

  return (
    <CountDisplay
      countData={weeklyAverage}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
      countText={`Weekly Active ${pluralize('Members', weeklyAverage)}`}
    />
  );
};

export default WeeklyActiveMembersShell;
