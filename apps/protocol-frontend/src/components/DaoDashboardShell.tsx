import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';
import PageHeading from './PageHeading';
import { UIUser } from '@govrn/ui-types';
import { useDaosList } from '../hooks/useDaosList';

interface DaoDashboardShellProps {
  user: UIUser | null;
  daoName: string;
}

const DaoDashboardShell = ({ user, daoName }: DaoDashboardShellProps) => {
  console.log('dao name', daoName);
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      width="100%"
    >
      <PageHeading>{daoName}</PageHeading>
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
              <Flex flexBasis="50%">
                {/* <ControlledSelect
                defaultValue={dateRangeOptions.find(date => date.value === 52)}
                label="Choose Date Range"
                tip="Choose the date range for your Contributions."
                onChange={date => {
                  setDateRange(date);
                }}
                options={dateRangeOptions}
              /> */}
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
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoDashboardShell;
