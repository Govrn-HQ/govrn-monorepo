import { useEffect, useState } from 'react';
import {
  Container,
  Stack,
  HStack,
  Text,
  Box,
  useBreakpointValue,
  ButtonGroup,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import ContributionsTable from './ContributionsTable';
import ContributionTypesTable from './ContributionTypesTable';
import EmptyContributions from './EmptyContributions';
import { mockContributions, mockContributionTypes } from '../utils/mockData';

const ContributionsTableShell = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <PageHeading>Contributions</PageHeading>
      {mockContributions && mockContributions.length > 0 ? (
        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList>
            <Tab>Contributions</Tab>
            <Tab>Contribution Types</Tab>
          </TabList>
          <TabPanels>
            <TabPanel paddingX="0">
              <Box
                background="white"
                boxShadow="sm"
                borderRadius={{ base: 'none', md: 'lg' }}
              >
                <Stack spacing="5">
                  <Box paddingX={{ base: '4', md: '6' }} paddingTop={4}>
                    <Stack
                      direction={{ base: 'column', md: 'row' }}
                      justify="space-between"
                      align="center"
                    >
                      <Text fontSize="lg" fontWeight="medium">
                        My Contributions
                      </Text>
                      <Button
                        size="md"
                        bgColor="brand.primary.50"
                        color="brand.primary.600"
                        transition="all 100ms ease-in-out"
                        _hover={{ bgColor: 'brand.primary.100' }}
                        flexBasis="10%"
                        colorScheme="brand.primary"
                      >
                        Mint
                      </Button>
                      {/* <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup> */}
                    </Stack>
                  </Box>
                  <Box overflowX="auto">
                    <ContributionsTable contributionsData={mockContributions} />
                  </Box>
                  <Box px={{ base: '4', md: '6' }} pb="5">
                    <HStack spacing="3" justify="space-between">
                      {!isMobile && (
                        <Text color="muted" fontSize="sm">
                          Showing 1 to (x) of (y) results
                        </Text>
                      )}
                      <ButtonGroup
                        spacing="3"
                        justifyContent="space-between"
                        width={{ base: 'full', md: 'auto' }}
                        variant="secondary"
                      >
                        <Button>Previous</Button>
                        <Button>Next</Button>
                      </ButtonGroup>
                    </HStack>
                  </Box>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel paddingX="0">
              <Box
                background="white"
                boxShadow="sm"
                borderRadius={{ base: 'none', md: 'lg' }}
              >
                <Stack spacing="5">
                  <Box paddingX={{ base: '4', md: '6' }} paddingTop={4}>
                    <Stack
                      direction={{ base: 'column', md: 'row' }}
                      justify="space-between"
                    >
                      <Text fontSize="lg" fontWeight="medium">
                        Contribution Types
                      </Text>

                      {/* <InputGroup maxW="xs">
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input placeholder="Search" />
              </InputGroup> */}
                    </Stack>
                  </Box>
                  <Box overflowX="auto">
                    {mockContributionTypes.length > 0 ? (
                      <ContributionTypesTable
                        contributionTypesData={mockContributionTypes}
                      />
                    ) : (
                      <EmptyContributions />
                    )}
                  </Box>
                  <Box px={{ base: '4', md: '6' }} pb="5">
                    <HStack spacing="3" justify="space-between">
                      {!isMobile && (
                        <Text color="muted" fontSize="sm">
                          Showing 1 to (x) of (y) results
                        </Text>
                      )}
                      <ButtonGroup
                        spacing="3"
                        justifyContent="space-between"
                        width={{ base: 'full', md: 'auto' }}
                        variant="secondary"
                      >
                        <Button>Previous</Button>
                        <Button>Next</Button>
                      </ButtonGroup>
                    </HStack>
                  </Box>
                </Stack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <EmptyContributions />
      )}
    </Container>
  );
};

export default ContributionsTableShell;
