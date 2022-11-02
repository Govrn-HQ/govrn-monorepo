import useContributionCountInRange from '../hooks/useContributionCount';
import ContributionsByDateChart from './ContributionsByDateChart';
import { TODAY_DATE, YEAR } from '../utils/constants';
import { subWeeks, startOfDay, endOfDay } from 'date-fns';
import CustomTooltipDailyContributions from './CustomTooltipDailyContributions';

interface ContributionByDateShellProps {
  guildIds: number[];
  // startDate: Date;
  // endDate: Date;
}

const ContributionByDateShell = ({
  guildIds,
}: // startDate,
// endDate,
ContributionByDateShellProps) => {
  const {
    isFetching,
    isLoading,
    isError,
    data: contributionsByDate,
  } = useContributionCountInRange({
    startDate: subWeeks(startOfDay(TODAY_DATE), YEAR),
    endDate: endOfDay(TODAY_DATE),
    // startDate: startDate,
    // endDate: endDate,
    guildIds,
    excludeUnassigned: true,
  });

  return (
    <ContributionsByDateChart
      contributionsCount={contributionsByDate}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
      daoId={guildIds[0]}
      // customTooltip={<CustomTooltipDailyContributions daoId={guildIds[0]} date= />}
    />
  );
};

export default ContributionByDateShell;
