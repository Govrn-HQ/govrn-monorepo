import { Box, Flex, Heading } from '@chakra-ui/react';
import PageHeading from '../components/PageHeading';
import ContributionsRangeCountDisplay from '../components/ContributionsRangeCountDisplay';
interface DaoDashboardShellProps {
  daoName: string;
  daoId: number;
}

const DaoDashboardShell = ({ daoName, daoId }: DaoDashboardShellProps) => {
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
        paddingY={4}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
      >
        <Flex direction="column" gap={4}>
          <Flex direction={{ base: 'column' }} gap={2}>
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              gap={8}
              justifyContent="space-apart"
            >
              {/* <Flex flexBasis="50%"> */}
              {/* DatePicker will go here */}
              {/* </Flex> */}
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h3"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contributions By Date
              </Heading>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h3"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contributions By Member
              </Heading>
              <ContributionsRangeCountDisplay daoId={daoId} />
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h3"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contributions By Type
              </Heading>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h3"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Recent Contributions
              </Heading>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h3"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Active Members
              </Heading>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading
                as="h3"
                fontSize="lg"
                color="gray.800"
                fontWeight="normal"
              >
                Contributors This Month
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DaoDashboardShell;
