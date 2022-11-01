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
    data: contributionMembersData,
  } = useContributionActivityType({
    startDate: startDate,
    endDate: endDate,
    guildId: daoId,
  });

  const mockData = [
    {
      user_id: 1,
      user_name: 'JP',
      count: 10,
    },
    {
      user_id: 2,
      user_name: 'Kevin Malone',
      count: 20,
    },
    {
      user_id: 3,
      user_name: 'PJ',
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
