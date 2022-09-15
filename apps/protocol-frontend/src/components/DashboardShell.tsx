import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import * as _ from 'lodash';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import { UIUser } from '@govrn/ui-types';
import { ControlledSelect } from '@govrn/protocol-ui';
import { subWeeks } from 'date-fns';
import ContributionsHeatMap from './ContributionsHeatMap';
import ContributionsBarChart from './ContributionsBarChart';
import { UNASSIGNED } from '../utils/constants';

type UserContributionsDateRangeCountType = {
  count: number;
  date: string;
};
interface DashboardShellProps {
  user: UIUser | null;
}

const DashboardShell = ({ user }: DashboardShellProps) => {
  const { allDaos, userDaos, getUserContributionsCount } = useUser();
  const [contributionsCount, setContributionsCount] = useState<
    UserContributionsDateRangeCountType[] | null | undefined
  >([]);
  const [dateRange, setDateRange] = useState<{ label: string; value: number }>({
    value: 52,
    label: 'Last Year',
  });
  const [selectedDaos, setSelectedDaos] = useState<
    { value: number; label: string }[]
  >([]);

  useEffect(() => {
    const fetchHeatMapCount = async () => {
      if (selectedDaos) {
        const contributionsCountResponse = await getUserContributionsCount(
          subWeeks(new Date(), dateRange.value),
          new Date(),
          selectedDaos.map(dao => dao.value).filter(dao => dao !== null),
        );
        setContributionsCount(contributionsCountResponse);
        if (selectedDaos.some(dao => dao.label === UNASSIGNED)) {
          setContributionsCount(contributionsCountResponse);
        } else {
          setContributionsCount(
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
            subWeeks(new Date(), dateRange.value),
            new Date(),
            daoListOptions.map(dao => dao.value).filter(dao => dao !== null),
          );
          setContributionsCount(contributionsCountResponse);
        }
      }
    };
    fetchHeatMapCount();
  }, [user, dateRange, selectedDaos]);

  const userDaoListOptions = userDaos.map(dao => ({
    value: dao.id,
    label: dao.name ?? '',
  }));

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
