import useDaoContributionCountByUserInRange from '../hooks/useDaoContributionCountByUser';
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
  } = useDaoContributionCountByUserInRange({
    startDate: startDate,
    endDate: endDate,
    guildId: daoId,
  });

  return (
    <ContributionMembersPie
      contributionMembersData={contributionMembersData}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default ContributionMembersPieShell;
