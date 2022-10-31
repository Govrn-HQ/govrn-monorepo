import { useContributionActivityType } from '../hooks/useContributionActivityType';
import ContributionMembersPie from './ContributionMembersPie';

interface ContributionMembersPieShellProps {
  daoId: number;
  startDate: Date;
  endDate: Date;
}

const ContributionMembersPieShell = ({
  daoId,
  startDate,
  endDate,
}: ContributionMembersPieShellProps) => {
  const {
    isFetching,
    isLoading,
    isError,
    data: contributionActivityData,
  } = useContributionActivityType({
    startDate: startDate,
    endDate: endDate,
    guildId: daoId,
  });

  const mockData = [
    {
      id: 1,
      name: 'JP',
      count: 10,
    },
    {
      id: 2,
      name: 'Kevin Malone',
      count: 20,
    },
    {
      id: 3,
      name: 'PJ',
      count: 5,
    },
  ];

  return (
    <ContributionMembersPie
      // contributionActivityData={contributionActivityData}
      contributionMembersData={mockData}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default ContributionMembersPieShell;
