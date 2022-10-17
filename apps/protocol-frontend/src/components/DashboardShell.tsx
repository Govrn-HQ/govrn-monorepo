import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import { UIUser } from '@govrn/ui-types';
import { ControlledSelect, GovrnSpinner } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import ContributionsHeatMap from './ContributionsHeatMap';
import ContributionsBarChart from './ContributionsBarChart';
import { UNASSIGNED } from '../utils/constants';
import { useDaosList } from '../hooks/useDaosList';
import useContributionCountInRange, {
  useContributionCountInYear,
} from '../hooks/useContributionCount';
import { endOfDay, startOfDay } from 'date-fns';

interface DashboardShellProps {
  user: UIUser | null;
}

const TODAY_DATE = new Date();

const dateRangeOptions = [
  { value: 1, label: 'Last Week' },
  { value: 4, label: 'Last Month' },
  { value: 12, label: 'Last Quarter' },
  { value: 52, label: 'Last Year' },
];

const unassignedContributions = [
  {
    value: Number(null),
    label: UNASSIGNED,
  },
];

const DashboardShell = () => {
  const { userData } = useUser();
  const [dateRange, setDateRange] = useState<{ label: string; value: number }>({
    value: 52,
    label: 'Last Year',
  });
  const [selectedDaos, setSelectedDaos] = useState<
    { value: number; label: string }[]
  >([]);

  // renaming these on destructuring in case we have parallel queries:
  const {
    isLoading: userDaosListIsLoading,
    isError: userDaosListIsError,
    data: userDaosListData,
  } = useDaosList({
    where: { users: { some: { user_id: { equals: userData?.id } } } }, // show only user's DAOs
  });

  const userDaoListOptions =
    userDaosListData?.map(dao => ({
      value: dao.id,
      label: dao.name ?? '',
    })) || [];

  const combinedDaoListOptions = [
    ...new Set([...unassignedContributions, ...userDaoListOptions]),
  ];

  const { data: fullContributionsCount } = useContributionCountInYear({
    endDate: endOfDay(TODAY_DATE),
    guildIds:
      selectedDaos.length === 0 &&
      !selectedDaos.some(dao => dao.label === UNASSIGNED)
        ? combinedDaoListOptions
            .map(dao => dao.value)
            .filter(dao => dao !== null)
        : selectedDaos.map(dao => dao.value).filter(dao => dao !== null),
    excludeUnassigned: !(
      selectedDaos.length === 0 ||
      selectedDaos.some(dao => dao.label === UNASSIGNED)
    ),
  });

  const { data: contributionsCount } = useContributionCountInRange({
    startDate: subWeeks(startOfDay(TODAY_DATE), dateRange.value),
    endDate: endOfDay(TODAY_DATE),
    guildIds:
      selectedDaos.length === 0 &&
      !selectedDaos.some(dao => dao.label === UNASSIGNED)
        ? combinedDaoListOptions
            .map(dao => dao.value)
            .filter(dao => dao !== null)
        : selectedDaos.map(dao => dao.value).filter(dao => dao !== null),
    excludeUnassigned: !(
      selectedDaos.length === 0 ||
      selectedDaos.some(dao => dao.label === UNASSIGNED)
    ),
  });

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
                {userData?.name}
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
