import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';
import {
  ControlledSelect,
  ControlledDatePicker,
  GovrnSpinner,
  GovrnShowcase,
} from '@govrn/protocol-ui';
import { useContributionList } from '../hooks/useContributionList';
import ErrorView from './ErrorView';
import PageHeading from '../components/PageHeading';
import WeeklyActiveMembersShell from './WeeklyActiveMembersShell';
import ContributionsByDateShell from './ContributionsByDateShell';
import MonthlyContributionsShell from './MonthlyContributionsShell';
import ContributionTypesPieShell from './ContributionTypesPieShell';
import ContributionMembersPieShell from './ContributionMembersPieShell';
import RecentContributionsTableShell from './RecentContributionsTableShell';
import { subWeeks, startOfDay, endOfDay } from 'date-fns';
import { TODAY_DATE, YEAR, DEFAULT_DATE_RANGES } from '../utils/constants';

interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}

const DaoDashboardShell = ({ daoName, daoId }: DaoDashboardShellProps) => {
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);

  const [startDate, setStartDate] = useState<Date>(subWeeks(TODAY_DATE, YEAR));
  const [endDate, setEndDate] = useState<Date>(new Date(TODAY_DATE));

  const dateRangeOptions = [
    {
      value: 'Custom',
      label: 'Custom',
    },
    ...DEFAULT_DATE_RANGES,
  ];

  const dateChangeHandler = (selectedDateOffset: number | string) => {
    if (selectedDateOffset === 'Custom') {
      setShowCustomDatePicker(true);
    }
    setEndDate(TODAY_DATE);
    setStartDate(
      subWeeks(
        TODAY_DATE,
        typeof selectedDateOffset === 'number' ? selectedDateOffset : 0,
      ),
    );
  };

  const {
    isFetching,
    isLoading,
    isError,
    data: daoContributions,
  } = useContributionList(
    {
      where: {
        guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
      },
    },
    true,
  );

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  if (isError) {
    return (
      <Box
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        maxWidth="1200px"
        width="100%"
      >
        <ErrorView
          errorMessage="Something went wrong fetching the data for this DAO."
          includeMotto={false}
        />
      </Box>
    );
  }

  const ButtonChildren = () => (
    <>
      <Link to="/profile">
        <Button variant="primary" size="md">
          Join a DAO
        </Button>
      </Link>
      <Link to="/report">
        <Button variant="secondary" size="md">
          Contribute
        </Button>
      </Link>
    </>
  );

  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      width="100%"
    >
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <PageHeading>{daoName}</PageHeading>
        <Flex
          flexBasis={{ base: '100%', lg: '60%' }}
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
          gap={2}
          width={{ base: '100%', lg: 'auto' }}
        >
          {daoContributions && daoContributions.length > 0 ? (
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              alignItems="center"
              justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
              width="100%"
              flexBasis={{ base: '100%', lg: '60%' }}
              flexGrow="1"
              gap={{ base: 0, lg: 2 }}
            >
              <Box
                visibility={showCustomDatePicker ? 'inherit' : 'hidden'}
                width="100%"
              >
                <ControlledDatePicker
                  selected={startDate}
                  onChange={dates => {
                    const datesArray = dates as Date[];
                    const [start, end] = datesArray;
                    setStartDate(start);
                    setEndDate(end);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  maxDate={TODAY_DATE}
                />
              </Box>
              <ControlledSelect
                isSearchable={false}
                defaultValue={dateRangeOptions.find(
                  date => date.value === YEAR,
                )}
                onChange={dateRangeOffset => {
                  setShowCustomDatePicker(false);
                  dateChangeHandler(dateRangeOffset.value);
                }}
                options={dateRangeOptions}
              />
            </Flex>
          ) : null}
        </Flex>
      </Flex>
      <Flex direction="column" gap={4}>
        <Flex direction={{ base: 'column' }} gap={2}>
          {daoContributions && daoContributions.length === 0 ? (
            <Box marginTop={2} marginBottom={4}>
              <GovrnShowcase
                copy="Go mint contributions so we can show your data"
                emoji="🙌"
                children={<ButtonChildren />}
              />
            </Box>
          ) : null}
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={4}
            justifyContent="space-between"
          >
            <Flex
              direction="column"
              gap={2}
              flexBasis="80%"
              display={{ base: 'none', lg: 'block' }}
            >
              <ContributionsByDateShell guildIds={[daoId]} />
            </Flex>
            <Flex
              direction={{ base: 'row', lg: 'column' }}
              gap={2}
              flexBasis="20%"
              justifyContent="space-between"
              alignItems="flex-end"
              marginY={{ base: 4, lg: 0 }}
            >
              <Flex direction="column" gap={2}>
                <WeeklyActiveMembersShell daoId={daoId} />
              </Flex>
              <Flex direction="column" gap={2}>
                <MonthlyContributionsShell daoId={daoId} />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justifyContent="space-between"
            width="100%"
          >
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              justifyContent={{ base: 'center', lg: 'flex-start' }}
              alignItems={{ base: 'center', lg: 'flex-start' }}
              width="100%"
              gap={{ base: 0, lg: 2 }}
            >
              <Flex direction="column" gap={2} flexBasis="50%">
                <ContributionMembersPieShell
                  daoId={daoId}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Flex>
              <Flex direction="column" gap={2} flexBasis="50%">
                <ContributionTypesPieShell
                  daoId={daoId}
                  startDate={startDate}
                  endDate={endDate}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" gap={2}>
            <RecentContributionsTableShell daoId={daoId} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoDashboardShell;
