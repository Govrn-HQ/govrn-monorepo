import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import * as _ from 'lodash';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import { UIUser } from '@govrn/ui-types';
import { ControlledSelect, GovrnSpinner } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import ContributionsHeatMap from './ContributionsHeatMap';
import ContributionsBarChart from './ContributionsBarChart';
import { useContributions } from '../contexts/ContributionContext';
import { UNASSIGNED } from '../utils/constants';
import { useDaosList } from '../hooks/useDaosList';

type UserContributionsDateRangeCountType = {
  count: number;
  date: string;
};

interface DashboardShellProps {
  user: UIUser | null;
}

const DashboardShell = ({ user }: DashboardShellProps) => {
  const { userData } = useUser();
  const { getUserContributionsCount } = useContributions();
  const [contributionsCount, setContributionsCount] = useState<
    UserContributionsDateRangeCountType[] | null | undefined
  >([]);
  const [fullContributionsCount, setFullContributionsCount] = useState<
    UserContributionsDateRangeCountType[] | null | undefined
  >([]);
  const [dateRange, setDateRange] = useState<{ label: string; value: number }>({
    value: 52,
    label: 'Last Year',
  });
  const [selectedDaos, setSelectedDaos] = useState<
    { value: number; label: string }[]
  >([]);

  // renaming these on destructuring incase we have parallel queries:
  const {
    isLoading: userDaosListIsLoading,
    isError: userDaosListIsError,
    data: userDaosListData,
  } = useDaosList({
    where: { users: { some: { user_id: { equals: userData?.id } } } }, // show only user's DAOs
  });

  const fetchHeatMapCount = async (
    dateRangeValue: number,
    setFunc: (
      arg: UserContributionsDateRangeCountType[] | null | undefined,
    ) => void,
  ) => {
    if (selectedDaos) {
      const contributionsCountResponse = await getUserContributionsCount(
        subWeeks(new Date(), dateRangeValue),
        new Date(),
        selectedDaos.map(dao => dao.value).filter(dao => dao !== null),
      );
      setFunc(contributionsCountResponse);
      if (selectedDaos.some(dao => dao.label === UNASSIGNED)) {
        setFunc(contributionsCountResponse);
      } else {
        setFunc(
          contributionsCountResponse?.filter(
            contribution => contribution?.name !== UNASSIGNED,
          ),
        );
      }
      if (
        selectedDaos.length === 0 &&
        !selectedDaos.some(dao => dao.label === UNASSIGNED)
      ) {
        const contributionsCountResponse = await getUserContributionsCount(
          subWeeks(new Date(), dateRangeValue),
          new Date(),
          combinedDaoListOptions
            .map(dao => dao.value)
            .filter(dao => dao !== null),
        );
        setFunc(contributionsCountResponse);
      }
    }
  };

  useEffect(() => {
    fetchHeatMapCount(dateRange.value, setContributionsCount);
  }, [user, dateRange, selectedDaos]);

  useEffect(() => {
    fetchHeatMapCount(52, setFullContributionsCount);
  }, [user, selectedDaos]);

  const userDaoListOptions =
    userDaosListData?.map(dao => ({
      value: dao.id,
      label: dao.name ?? '',
    })) || [];

  const unassignedContributions = [
    {
      value: Number(null),
      label: UNASSIGNED,
    },
  ];

  const dateRangeOptions = [
    { value: 1, label: 'Last Week' },
    { value: 4, label: 'Last Month' },
    { value: 12, label: 'Last Quarter' },
    { value: 52, label: 'Last Year' },
  ];

  const combinedDaoListOptions = [
    ...new Set([...unassignedContributions, ...userDaoListOptions]),
  ];

  // the loading and fetching states from the query are true:
  if (userDaosListIsLoading) {
    return <GovrnSpinner />;
  }

  // there is an error with the query:
  if (userDaosListIsError) {
    return <Text>An error occurred fetching DAOs.</Text>;
  }

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
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              paddingY={4}
              gap={8}
              justifyContent="space-apart"
            >
              {userDaoListOptions.length > 0 && (
                <ControlledSelect
                  label="Choose DAOs"
                  tip="Choose DAOs to display Contributions from."
                  onChange={daos => {
                    setSelectedDaos(Array.isArray(daos) ? daos : [daos]);
                  }}
                  options={combinedDaoListOptions}
                  isMulti
                />
              )}
              <Flex flexBasis="50%">
                <ControlledSelect
                  defaultValue={dateRangeOptions.find(
                    date => date.value === 52,
                  )}
                  label="Choose Date Range"
                  tip="Choose the date range for your Contributions."
                  onChange={date => {
                    setDateRange(date);
                  }}
                  options={dateRangeOptions}
                />
              </Flex>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h4"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contribution Heat Map
              </Heading>
              {fullContributionsCount &&
              fullContributionsCount !== undefined ? (
                <>
                  <Text as="span" fontSize="sm">
                    Displaying{' '}
                    <Text
                      as="span"
                      fontWeight="bolder"
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      bgClip="text"
                    >
                      {fullContributionsCount.reduce(
                        (acc, curr) => acc + curr.count,
                        0,
                      )}{' '}
                    </Text>
                    {fullContributionsCount.length === 1
                      ? 'Contribution'
                      : 'Contributions'}
                    <Text as="span" fontSize="sm">
                      {' '}
                      in the {dateRange?.label.toLowerCase()}
                    </Text>
                  </Text>
                  <ContributionsHeatMap
                    contributionsCount={fullContributionsCount}
                    startDateOffset={0}
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
                      {contributionsCount.reduce(
                        (acc, curr) => acc + curr.count,
                        0,
                      )}{' '}
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
                    dateRange={dateRange}
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
