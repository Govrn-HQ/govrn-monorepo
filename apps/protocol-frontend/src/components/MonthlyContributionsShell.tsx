import CountDisplay from './CountDisplay';
import useDaoContributionCountInRange from '../hooks/useDaoContributionCount';
import { subWeeks, endOfDay, startOfDay } from 'date-fns';
import pluralize from 'pluralize';
import { TODAY_DATE, MONTH } from '../utils/constants';

interface MonthlyContributionsShellProps {
  daoId: number;
}

const MonthlyContributionsShell = ({
  daoId,
}: MonthlyContributionsShellProps) => {
  const {
    data: contributionsInRangeCount,
    isLoading,
    isFetching,
    isError,
  } = useDaoContributionCountInRange(
    {
      startDate: subWeeks(startOfDay(TODAY_DATE), MONTH),
      endDate: endOfDay(TODAY_DATE),
      guildId: daoId,
    },
    false,
  );

  return (
    <CountDisplay
      countData={contributionsInRangeCount}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
      countText={`${pluralize(
        'Contribution',
        contributionsInRangeCount,
      )} this Month`}
    />
  );
};

export default MonthlyContributionsShell;
