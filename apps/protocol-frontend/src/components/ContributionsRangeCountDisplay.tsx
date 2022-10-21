import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { subWeeks, endOfDay, startOfDay } from 'date-fns';
import useContributionCountInRange from '../hooks/useContributionCount';
import * as _ from 'lodash';

const TODAY_DATE = new Date();

const ContributionsRangeCountDisplay = ({ daoId }: { daoId: number }) => {
  console.log('dao id', daoId);
  console.log('typeof dao id', typeof daoId);
  const { data: fullContributionsCount } = useContributionCountInRange({
    startDate: subWeeks(startOfDay(TODAY_DATE), 4),
    endDate: endOfDay(TODAY_DATE),
    guildIds: [daoId],
    excludeUnassigned: true,
  });

  console.log('daoId', daoId);
  console.log('fullContributionsCount', fullContributionsCount);

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

  const sum = contributionsCountMap?.reduce((acc, contribution) => {
    return acc + contribution.value;
  }, 0);

  return <Text>Count</Text>;
};

export default ContributionsRangeCountDisplay;
