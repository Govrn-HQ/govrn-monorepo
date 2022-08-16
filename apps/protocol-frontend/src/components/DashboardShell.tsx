import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import * as _ from 'lodash';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import { UIUser } from '@govrn/ui-types';
import { ControlledSelect, Option } from '@govrn/protocol-ui';
import ContributionsHeatMap from './ContributionsHeatMap';
import { subWeeks } from 'date-fns';

interface DashboardShellProps {
  user: UIUser;
}

// fetching will need to happen on this page, will refetch after each filter update
// passing in the User so that the name is available upon initial render

const DashboardShell = ({ user }: DashboardShellProps) => {
  const { allDaos, getUserContributionsCount } = useUser();
  const [contributionsCount, setContributionsCount] = useState([]);
  const [dateRange, setDateRange] = useState<number>(12);
  const [selectedDaos, setSelectedDaos] = useState<any>([]);

  useEffect(() => {
    const fetchHeatMapCount = async () => {
      const contributionsCountResponse = await getUserContributionsCount({
        startDate: subWeeks(new Date(), dateRange),
        endDate: new Date(),
        guildIds: selectedDaos[0].value === null ? null : selectedDaos[0].value,
      });
      console.log('fetching...');
      setContributionsCount(contributionsCountResponse);
    };
    fetchHeatMapCount();
  }, [user, setDateRange, selectedDaos]);

  // this is causing a race condition where the defaultValues of the Select is trying to use
  // this before it's available. this will likely be handled with making sure that the contributions/daos are loaded first

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
    { value: 1, label: 'Last Month' },
    { value: 12, label: 'Last 12 Weeks' },
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
      maxWidth="900px"
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
            <Flex paddingY={4}>
              {daoListOptions.length > 0 && (
                <ControlledSelect
                  defaultValue={combinedDaoListOptions[0]}
                  label="Choose DAOs"
                  tip="Choose DAOs to display Contributions from."
                  onChange={daos => {
                    setSelectedDaos(daos);
                  }}
                  options={combinedDaoListOptions}
                  isMulti
                />
              )}
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

              {contributionsCount && contributionsCount.length > 0 ? (
                <ContributionsHeatMap
                  contributionsCount={contributionsCount}
                  startDateOffset={dateRange}
                />
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
