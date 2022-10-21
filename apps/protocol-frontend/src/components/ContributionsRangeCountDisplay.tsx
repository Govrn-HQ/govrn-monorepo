import { Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react';
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

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      width="fit-content"
      paddingX={4}
      paddingY={4}
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'lg' }}
    >
      <VisuallyHidden>
        <Heading as="h3">Contributions this Month</Heading>
      </VisuallyHidden>
      <Text fontSize="xl" fontWeight="bold">
        {sum}
      </Text>
      <Text fontSize="sm">Contributions this Month</Text>
    </Flex>
  );
};

export default ContributionsRangeCountDisplay;
