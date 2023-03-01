import { useMemo, useState } from 'react';
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
import { subWeeks } from 'date-fns';
import { useDaoUserUpdate } from '../hooks/useDaoUserUpdate';
import { useUser } from '../contexts/UserContext';
import { useContributionInfiniteList } from '../hooks/useContributionList';
import { SortOrder } from '@govrn/protocol-client';
import { mergePages } from '../utils/arrays';
import { UIContribution } from '@govrn/ui-types';
import { useNavigate } from 'react-router-dom';
import GovrnAlertDialog from './GovrnAlertDialog';
import { SelectOption as Option } from '@govrn/protocol-ui';
import {
  TODAY_DATE,
  LEFT_MEMBERSHIP_NAME,
  YEAR,
  DEFAULT_DATE_RANGES,
} from '../utils/constants';

const CUSTOM_VALUE = 0;

interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}

const DaoDashboardShell = ({ daoName, daoId }: DaoDashboardShellProps) => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const { mutateAsync: updateDaoMemberStatus, isLoading: isLeavingLoading } =
    useDaoUserUpdate();
  const { data, hasNextPage, fetchNextPage } = useContributionInfiniteList({
    where: {
      guilds: { some: { guild: { is: { id: { equals: daoId } } } } },
    },
    orderBy: { date_of_engagement: SortOrder.Desc },
  });

  const recentContributions = useMemo<UIContribution[]>(() => {
    return mergePages(data?.pages ?? []);
  }, [data]);

  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<Date>(subWeeks(TODAY_DATE, YEAR));
  const [endDate, setEndDate] = useState<Date>(new Date(TODAY_DATE));
  const [isLeavingDialogShown, showLeavingDialog] = useState(false);

  const dateRangeOptions: Option<number>[] = [
    {
      value: CUSTOM_VALUE,
      label: 'Custom',
    },
    ...DEFAULT_DATE_RANGES,
  ];

  const dateChangeHandler = (selectedDateOffset: number) => {
    if (selectedDateOffset === CUSTOM_VALUE) {
      setShowCustomDatePicker(true);
    }
    setEndDate(TODAY_DATE);
    setStartDate(subWeeks(TODAY_DATE, selectedDateOffset));
  };

  const handleLeavingDao = async () => {
    await updateDaoMemberStatus({
      userId: userData?.id ?? -1,
      guildId: daoId,
      membershipStatus: LEFT_MEMBERSHIP_NAME,
    });

    navigate('/dashboard');
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
    <Link to="/report">
      <Button variant="primary" size="md">
        Contribute
      </Button>
    </Link>
  );

  return (
    <Stack
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
            width="auto"
            gap={{ base: 0, lg: 2 }}
          >
            <Button
              variant="primary"
              width="min-content"
              px={8}
              onClick={() => showLeavingDialog(true)}
            >
              Leave
            </Button>
          </Flex>
          {daoContributions && daoContributions.length > 0 ? (
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              alignItems="center"
              justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
              width="100%"
              flexBasis={{ base: '100%', lg: '60%' }}
              flexGrow="1"
              gap={{ base: 0, lg: 2 }}
              maxW="18rem"
            >
              {showCustomDatePicker && (
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
              )}
              <ControlledSelect
                isSearchable={false}
                defaultValue={dateRangeOptions.find(
                  date => date.value === YEAR,
                )}
                onChange={dateRangeOffset => {
                  setShowCustomDatePicker(false);
                  dateChangeHandler((dateRangeOffset as Option<number>)?.value ?? 0);
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
                copy="Start adding your contributions to see your data"
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
            <RecentContributionsTableShell
              data={recentContributions}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          </Flex>
        </Flex>
      </Flex>
      <GovrnAlertDialog
        title={`Are you sure you want to leave ${daoName}?`}
        isOpen={isLeavingDialogShown}
        isLoading={isLeavingLoading}
        onConfirm={handleLeavingDao}
        onCancel={() => showLeavingDialog(false)}
      />
    </Stack>
  );
};

export default DaoDashboardShell;
