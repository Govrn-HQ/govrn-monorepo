import { Box, Flex, Text } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useContributionList } from '../hooks/useContributionList';

interface CustomTooltipDailyContributionsProps {
  daoId: number;
  date: Date;
}

const CustomTooltipDailyContributions = ({
  daoId,
  date,
}: CustomTooltipDailyContributionsProps) => {
  const {
    isFetching,
    data: dailyContributions,
    isLoading,
    isError,
  } = useContributionList({
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
      date_of_engagement: { equals: date },
    },
  });

  // where:
  // {guilds:
  //   {some: {guild: {is: {id: {equals: 1}}}}},
  //   date_of_engagement: {
  //     equals: "9/26/2022"
  //   }
  // }

  console.log('daily contributions', dailyContributions);

  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }
  return (
    <Flex>
      <Text>Total: {dailyContributions?.length}</Text>
    </Flex>
  );
};

export default CustomTooltipDailyContributions;
