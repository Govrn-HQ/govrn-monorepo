import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import * as _ from 'lodash';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import { UIUser } from '@govrn/ui-types';
import { ControlledSelect, Option } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import ContributionsHeatMap from './ContributionsHeatMap';
import ContributionsBarChart from './ContributionsBarChart';

type SelectedDaoType = {
  value: null;
  label: string;
};

type UserContributionsDateRangeCountType = {
  count: number;
  date: string;
};
interface DashboardShellProps {
  user: UIUser | null;
}

// fetching will need to happen on this page, will refetch after each filter update
// passing in the User so that the name is available upon initial render

const DashboardShell = ({ user }: DashboardShellProps) => {
  const { allDaos, getUserContributionsCount } = useUser();
  const [contributionsCount, setContributionsCount] = useState<
    UserContributionsDateRangeCountType[] | null | undefined
  >([]);
  const [dateRange, setDateRange] = useState<{ value: number; label: string }>({
    value: 52,
    label: 'Last Year',
  });

  const [selectedDaos, setSelectedDaos] = useState<
    { value: number | null; label: string }[]
  >([]);

  useEffect(() => {
    const fetchHeatMapCount = async () => {
      console.log('date range', dateRange);
      const contributionsCountResponse = await getUserContributionsCount(
        subWeeks(new Date(), dateRange.value),
        new Date(),
        selectedDaos.length > 0 && selectedDaos[0].value === null
          ? undefined
          : selectedDaos.map(dao => dao.value),
      );
      setContributionsCount(contributionsCountResponse);
    };
    fetchHeatMapCount();
  }, [user, dateRange, selectedDaos]);

  const daoListOptions = allDaos.map(dao => ({
    value: dao.id,
    label: dao.name ?? '',
  }));

  const daoReset = [
    {
      value: null,
      label: 'No DAO',
    },
  ];

  // unused for right now, but here so that we can add a date range selector

  const dateRangeOptions = [
    { value: 1, label: 'Last Week' },
    { value: 4, label: 'Last Month' },
    { value: 12, label: 'Last Quarter' },
    { value: 52, label: 'Last Year' },
  ];

  const combinedDaoListOptions = [...new Set([...daoReset, ...daoListOptions])];

  useEffect(() => {
    if (allDaos) {
      setSelectedDaos(combinedDaoListOptions);
    }
  }, [allDaos]);

  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      width="100%"
    >
      <PageHeading>Dashboard</PageHeading>
      <Flex
        justify="space-between"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={4}
        paddingTop={4}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginBottom={4}
      >
        <Flex direction="column" gap={4}>
          <Flex direction={{ base: 'column' }} gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Time to party,{' '}
              <Text
                as="span"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                {user?.name}
              </Text>
            </Heading>
            <Flex paddingY={4} gap={8} justifyContent="space-apart">
              {daoListOptions.length > 0 && (
                <ControlledSelect
                  defaultValue={combinedDaoListOptions[0]} // since only single is working for now
                  label="Choose DAOs"
                  tip="Choose DAOs to display Contributions from."
                  onChange={daos => {
                    setSelectedDaos(daos);
                  }}
                  options={combinedDaoListOptions}
                  isMulti
                />
              )}
              <ControlledSelect
                defaultValue={dateRangeOptions.find(date => date.value === 52)}
                label="Choose Date Range"
                tip="Choose the date range for your Contributions."
                onChange={date => {
                  console.log('new date', date);
                  setDateRange(date);
                }}
                options={dateRangeOptions}
              />
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h4"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                {} Contribution Heat Map
              </Heading>
              {contributionsCount && contributionsCount !== undefined ? (
                <>
                  <Text as="span" fontSize="sm">
                    Displaying{' '}
                    <Text
                      as="span"
                      fontWeight="bolder"
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      bgClip="text"
                    >
                      {contributionsCount.length}{' '}
                    </Text>
                    {contributionsCount.length === 1
                      ? 'Contribution'
                      : 'Contributions'}
                    <Text as="span" fontSize="sm">
                      {' '}
                      in the {dateRange?.label.toLowerCase()}
                    </Text>
                  </Text>
                  <ContributionsHeatMap
                    contributionsCount={contributionsCount}
                    startDateOffset={dateRange.value}
                  />
                </>
              ) : (
                <Text>Loading...</Text>
              )}
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h4"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                {} Contribution Bar Chart
              </Heading>
              {contributionsCount && contributionsCount !== undefined ? (
                <>
                  <Text as="span" fontSize="sm">
                    Displaying{' '}
                    <Text
                      as="span"
                      fontWeight="bolder"
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      bgClip="text"
                    >
                      {contributionsCount.length}{' '}
                    </Text>
                    {contributionsCount.length === 1
                      ? 'Contribution'
                      : 'Contributions'}
                    <Text as="span" fontSize="sm">
                      {' '}
                      in the {dateRange?.label.toLowerCase()}
                    </Text>
                  </Text>
                  <ContributionsBarChart
                    contributionsCount={contributionsCount}
                    startDateOffset={dateRange.value}
                  />
                </>
              ) : (
                <Text>Loading...</Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardShell;
