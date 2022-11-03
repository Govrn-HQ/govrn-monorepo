import CountDisplay from './CountDisplay';
import { useContributionList } from '../hooks/useContributionList';
import { subWeeks, endOfDay, startOfDay } from 'date-fns';
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
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
      date_of_engagement: {
        in: [new Date(subWeeks(TODAY_DATE, 9)), TODAY_DATE],
      },
    },
  });

  console.log('contributionsInRangeCount', contributionsInRangeCount);

  const mockData = [1, 4, 3, 2, 10, 5, 7, 8, 9];
  console.log('mockdata length', mockData.length);
  const weeklyAverage = Math.round(
    mockData.reduce((a, b) => a + b, 0) / mockData.length,
  );
  console.log('weeklyAverage', weeklyAverage);

  return (
    <CountDisplay
      // countData={contributionsInRangeCount}
      countData={weeklyAverage}
      isFetching={isFetching}
      isLoading={isLoading}
      isError={isError}
      countText={`Weekly Active ${pluralize('Members', weeklyAverage)}`}
    />
  );
};

export default WeeklyActiveMembersShell;

// {
// 	contributions(   where: {
//       guilds: { some: { guild: { is: { id: { equals: 1 } } } } },
//       date_of_engagement: {in: ["2022-09-19T04:00:00.000Z", "2022-09-26T04:00:00.000Z"]}
//   }) {
//     name
//     user_id
//     guilds {
//       guild {
//         name
//         id
//       }
//     }
//     user {
//       name
//       display_name
//     }
//     date_of_engagement
//   }
// }
