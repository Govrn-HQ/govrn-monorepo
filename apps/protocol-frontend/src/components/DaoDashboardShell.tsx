import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ControlledSelect, ControlledDatePicker } from '@govrn/protocol-ui';
import PageHeading from '../components/PageHeading';
import WeeklyActiveMembersShell from './WeeklyActiveMembersShell';
import ContributionsByDateShell from './ContributionsByDateShell';
import MonthlyContributionsShell from './MonthlyContributionsShell';
import ContributionTypesPieShell from './ContributionTypesPieShell';
import ContributionMembersPieShell from './ContributionMembersPieShell';
import RecentContributionsTableShell from './RecentContributionsTableShell';
import { subWeeks } from 'date-fns';
import { YEAR, DEFAULT_DATE_RANGES } from '../utils/constants';
interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}
const TODAY_DATE = new Date();

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
              defaultValue={dateRangeOptions.find(date => date.value === YEAR)}
              onChange={dateRangeOffset => {
                setShowCustomDatePicker(false);
                dateChangeHandler(dateRangeOffset.value);
              }}
              options={dateRangeOptions}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap={4}>
        <Flex direction={{ base: 'column' }} gap={2}>
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
              justifyContent="space-around"
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
