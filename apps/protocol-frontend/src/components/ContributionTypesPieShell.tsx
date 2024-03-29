import { useContributionActivityType } from '../hooks/useContributionActivityType';
import ContributionTypesPie from './ContributionTypesPie';

interface ContributionTypesPieShellProps {
  daoId: number;
  startDate: Date;
  endDate: Date;
}

const ContributionTypesPieShell = ({
  daoId,
  startDate,
  endDate,
}: ContributionTypesPieShellProps) => {
  const {
    isFetching,
    isLoading,
    isError,
    data: contributionActivityData,
  } = useContributionActivityType(
    {
      startDate: startDate,
      endDate: endDate,
      guildId: daoId,
    },
    false,
  );

  return (
    <ContributionTypesPie
      contributionActivityData={contributionActivityData}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default ContributionTypesPieShell;
