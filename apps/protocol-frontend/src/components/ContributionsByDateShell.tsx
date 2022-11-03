import useContributionCountInRange from '../hooks/useContributionCount';
import ContributionsByDateChart from './ContributionsByDateChart';
import { TODAY_DATE, YEAR } from '../utils/constants';
import { subWeeks, startOfDay, endOfDay } from 'date-fns';

interface ContributionByDateShellProps {
  guildIds: number[];
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
    id: null,
    startDate: subWeeks(startOfDay(TODAY_DATE), YEAR),
    endDate: endOfDay(TODAY_DATE),
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
    />
  );
};

export default ContributionByDateShell;
