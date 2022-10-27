import { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ControlledSelect, ControlledDatePicker } from '@govrn/protocol-ui';
import PageHeading from '../components/PageHeading';
import ContributionTypesPieShell from './ContributionTypesPieShell';
import RecentContributionsTableShell from './RecentContributionsTableShell';

import { subWeeks } from 'date-fns';
interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}
const TODAY_DATE = new Date();

const DaoDashboardShell = ({ daoName, daoId }: DaoDashboardShellProps) => {
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);

  const [startDate, setStartDate] = useState<Date>(new Date(TODAY_DATE));
  const [endDate, setEndDate] = useState<Date>(
    new Date(subWeeks(TODAY_DATE, 4)),
  );
  const [dateRange, setDateRange] = useState<{
    label: string;
    value: number;
  } | null>(null);

  const dateRangeOptions = [
    {
      value: 'Custom',
      label: 'Custom',
    },
    { value: 1, label: 'Last Week' },
    { value: 4, label: 'Last Month' },
    { value: 12, label: 'Last Quarter' },
    { value: 52, label: 'Last Year' },
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
            <Box visibility={showCustomDatePicker ? 'inherit' : 'hidden'}>
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
                maxDate={new Date(TODAY_DATE)}
              />
            </Box>
            <ControlledSelect
              isSearchable={false}
              defaultValue={dateRangeOptions.find(date => date.value === 4)}
              value={dateRange}
              onChange={dateRangeOffset => {
                setShowCustomDatePicker(false);
                dateChangeHandler(dateRangeOffset.value);
                setDateRange(dateRangeOffset);
              }}
              options={dateRangeOptions}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap={4}>
        <Flex direction={{ base: 'column' }} gap={2}>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributions By Date
            </Heading>
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributions By Member
            </Heading>
          </Flex>
          <Flex
            direction={{ base: 'column', lg: 'column' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={2}
            justifyContent="center"
          >
            <Flex direction="column" gap={2}>
              <ContributionTypesPieShell
                daoId={daoId}
                startDate={startDate}
                endDate={endDate}
              />
            </Flex>
          </Flex>
          <Flex direction="column" gap={2} padding={2}>
            <RecentContributionsTableShell daoId={daoId} />
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Active Members
            </Heading>
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributors This Month
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoDashboardShell;
