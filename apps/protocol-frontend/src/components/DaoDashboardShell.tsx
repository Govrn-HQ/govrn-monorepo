import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ControlledSelect, ControlledDatePicker } from '@govrn/protocol-ui';
import ReactDatePicker from 'react-datepicker';
import PageHeading from '../components/PageHeading';
import RecentContributionsTableShell from './RecentContributionsTableShell';
import { formatDate } from '../utils/date';

import { subWeeks } from 'date-fns';
interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}
const TODAY_DATE = new Date();

const DaoDashboardShell = ({ daoName, daoId }: DaoDashboardShellProps) => {
  // const [dateRange, setDateRange] = useState<{ label: string; value: number }>({
  //   value: 52,
  //   label: 'Last Year',
  // });
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  // const [startDate, setStartDate] = useState<Date | null>(null);
  // const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState(new Date(TODAY_DATE));
  const [endDate, setEndDate] = useState(new Date(subWeeks(TODAY_DATE, -1)));
  const [dateRange, setDateRange] = useState<{
    label: string;
    value: number;
  } | null>(null);

  const dateRangeOptions = [
    {
      value: 'Custom',
      label:
        dateRange !== null
          ? `${formatDate(startDate)} to ${formatDate(endDate)}`
          : 'Custom',
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
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <PageHeading>{daoName}</PageHeading>
        <Flex
          flexBasis="50%"
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          gap={2}
        >
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
            flexBasis="60%"
            gap={2}
          >
            {/* {showCustomDatePicker && ( */}
            <Box visibility={showCustomDatePicker ? 'inherit' : 'hidden'}>
              <ControlledDatePicker
                selected={startDate}
                onChange={dates => {
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                maxDate={new Date(TODAY_DATE)}
              />
            </Box>
            {/* )} */}
            <ControlledSelect
              controlShouldRenderValue
              isSearchable={false}
              defaultValue={dateRangeOptions.find(date => date.value === 4)}
              getOptionLabel={option => option.label}
              value={dateRange}
              onChange={dateRangeOffset => {
                setShowCustomDatePicker(false);
                dateChangeHandler(dateRangeOffset.value);
                setDateRange(dateRangeOffset);
              }}
              options={dateRangeOptions}
              width="1000px"
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
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" color="gray.800" fontWeight="normal">
              Contributions By Type
            </Heading>
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
