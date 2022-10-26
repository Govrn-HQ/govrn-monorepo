import CountDisplay from './CountDisplay';
import useContributionCountInRange from '../hooks/useContributionCount';
import { subWeeks, endOfDay, startOfDay } from 'date-fns';
import pluralize from 'pluralize';

const TODAY_DATE = new Date();

interface MonthlyContributionsShellProps {
  daoId: number;
}

const MonthlyContributionsShell = ({
  daoId,
}: MonthlyContributionsShellProps) => {
  const {
    data: fullContributionsCount,
    isLoading,
    isFetching,
    isError,
  } = useContributionCountInRange({
    startDate: subWeeks(startOfDay(TODAY_DATE), 4),
    endDate: endOfDay(TODAY_DATE),
    guildIds: [daoId],
    excludeUnassigned: true,
  });

  console.log('full', fullContributionsCount);

  const contributionsCountMap = fullContributionsCount?.map(contribution => {
    const date = new Date(contribution.date);
    return {
      day: date.getDate() + 1,
      value: contribution.count,
      guildId: contribution.guild_id,
      guildName: contribution.name,
    };
  });

  console.log('contributionsCountMap', contributionsCountMap);
  const monthlyContributionsSum = contributionsCountMap?.reduce(
    (acc, contribution) => {
      return acc + contribution.value;
    },
    0,
  );

  console.log('monthlyContributionsSum', monthlyContributionsSum);

  return (
    <CountDisplay
      countData={monthlyContributionsSum}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
      countText={`${pluralize(
        'Contribution',
        monthlyContributionsSum,
      )} this Month`}
    />
  );
};

export default MonthlyContributionsShell;
