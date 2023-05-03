import { useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import {
  ControlledSelect,
  GovrnSpinner,
  SelectOption,
} from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import ContributionsHeatMap from './ContributionsHeatMap';
import ContributionsBarChart from './ContributionsBarChart';
import { MembershipStatusesNames, UNASSIGNED } from "../utils/constants";
import { useDaosList } from '../hooks/useDaosList';
import useContributionCountInRange from '../hooks/useContributionCount';
import { endOfDay, startOfDay } from 'date-fns';
import { DEFAULT_DATE_RANGES } from '../utils/constants';
import pluralize from 'pluralize';
import useDisplayName from '../hooks/useDisplayName';

const TODAY_DATE = new Date();

const unassignedContributions = [
  {
    label: UNASSIGNED,
    value: Number(null),
  },
];

const DashboardShell = () => {
  const { userData } = useUser();
  const { displayName } = useDisplayName();

  const [dateRange, setDateRange] = useState<SelectOption<number>>({
    label: 'Last Year',
    value: 52,
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
    where: {
      users: {
        some: {
          AND: [
            { user_id: { equals: userData?.id || 0 } },
            {
              membershipStatus: {
                isNot: { name: { equals: MembershipStatusesNames.Left } },
              },
            },
          ],
        },
      },
    },
    first: 1000,
  });

  const userDaoListOptions =
    userDaosListData?.map(dao => ({
      label: dao.name ?? '',
      value: dao.id,
    })) || [];

  const combinedDaoListOptions = [
    ...new Set([...unassignedContributions, ...userDaoListOptions]),
  ];

  const excludeUnassigned =
    selectedDaos.length !== 0 &&
    !selectedDaos.some(dao => dao.label === UNASSIGNED);

  const guildIds =
    selectedDaos.length === 0 &&
    !selectedDaos.some(dao => dao.label === UNASSIGNED)
      ? combinedDaoListOptions.map(dao => dao.value).filter(dao => dao !== 0)
      : selectedDaos.map(dao => dao.value).filter(dao => dao !== 0);

  const { data: fullContributionsCount } = useContributionCountInRange({
    id: userData?.id,
    startDate: subWeeks(startOfDay(TODAY_DATE), 52),
    endDate: endOfDay(TODAY_DATE),
    guildIds,
    excludeUnassigned,
  });

  const { data: contributionsCount } = useContributionCountInRange({
    id: userData?.id,
    startDate: subWeeks(startOfDay(TODAY_DATE), dateRange.value),
    endDate: endOfDay(TODAY_DATE),
    guildIds,
    excludeUnassigned,
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
                {displayName}
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
                  tip="Choose DAOs to display contributions from."
                  onChange={daos => {
                    setSelectedDaos(Array.isArray(daos) ? daos : [daos]);
                  }}
                  options={combinedDaoListOptions}
                  isMulti
                />
              )}
              <Flex flexBasis="50%">
                <ControlledSelect
                  defaultValue={DEFAULT_DATE_RANGES.find(
                    date => date.value === 52,
                  )}
                  label="Choose Date Range"
                  tip="Choose the date range for your contributions."
                  onChange={date => {
                    if (date instanceof Array || !date) {
                      return;
                    }
                    setDateRange(date);
                  }}
                  options={DEFAULT_DATE_RANGES}
                />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gap={2}
              display={{ base: 'none', lg: 'block' }}
            >
              <Heading
                as="h4"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contribution Heat Map
              </Heading>
              {fullContributionsCount ? (
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
                    {pluralize('contribution', fullContributionsCount.length)}
                    <Text as="span" fontSize="sm">
                      {' '}
                      in the last year
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
                Contribution Bar Chart
              </Heading>
              {contributionsCount ? (
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
                    {pluralize('contribution', contributionsCount.length)}
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
