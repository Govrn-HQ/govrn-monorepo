import CountDisplay from './CountDisplay';
import useDaoContributionCountInRange from '../hooks/useDaoContributionCount';
import { subWeeks, endOfDay, startOfDay } from 'date-fns';
import pluralize from 'pluralize';
import { TODAY_DATE, MONTH } from '../utils/constants';

interface WeeklyActiveMembersShellProps {
  daoId: number;
}

const WeeklyActiveMembersShell = ({ daoId }: WeeklyActiveMembersShellProps) => {
  const {
    data: contributionsInRangeCount,
    isLoading,
    isFetching,
    isError,
  } = useDaoContributionCountInRange({
    startDate: subWeeks(startOfDay(TODAY_DATE), MONTH),
    endDate: endOfDay(TODAY_DATE),
    guildId: daoId,
  });

  return (
    <CountDisplay
      countData={contributionsInRangeCount}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
      countText={`Weekly Active ${pluralize(
        'Members',
        contributionsInRangeCount,
      )}`}
    />
  );
};

export default WeeklyActiveMembersShell;
