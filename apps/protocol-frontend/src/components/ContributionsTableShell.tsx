import { useMemo, useState } from 'react';
import {
  Alert,
  AlertDescription,
  Box,
  Button,
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { useOverlay } from '../contexts/OverlayContext';
import { GovrnSpinner } from '@govrn/protocol-ui';
import PageHeading from './PageHeading';
import ContributionsTable from './ContributionsTable';
import ContributionTypesTable from './ContributionTypesTable';
import EmptyContributions from './EmptyContributions';
import { useUser } from '../contexts/UserContext';
import { useContributionInfiniteList } from '../hooks/useContributionList';
import { UIContribution } from '@govrn/ui-types';
import MintedContributionsTable from './MintedContributionsTable';
import { mergePages } from '../utils/arrays';

const ContributionsTableShell = () => {
  const { userData } = useUser();
  const {
    data: nonMintedContributionPages,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useContributionInfiniteList({
    where: {
      user_id: { equals: userData?.id },
      status: { isNot: { name: { equals: 'minted' } } },
    },
  });

  const {
    data: mintedContributionPages,
    isFetching: isMintedFetching,
    hasNextPage: hasMintedNextPage,
    fetchNextPage: fetchMintedNextPage,
  } = useContributionInfiniteList({
    where: {
      user_id: { equals: userData?.id },
      status: { is: { name: { equals: 'minted' } } },
    },
  });

  const nonMintedContributions = useMemo(() => {
    return mergePages([...(nonMintedContributionPages?.pages ?? [])]);
  }, [nonMintedContributionPages]);

  const mintedContributions = useMemo(() => {
    return mergePages([...(mintedContributionPages?.pages ?? [])]);
  }, [mintedContributionPages]);

  const allContributions = useMemo(() => {
    return [...nonMintedContributions, ...mintedContributions];
  }, [nonMintedContributions, mintedContributions]);

  const { setModals } = useOverlay();
  const [selectedContributions, setSelectedContributions] = useState<
    UIContribution[]
  >([]);

  const mintModalHandler = () => {
    setModals({ mintModal: true });
  };

  const bulkDaoAttributeHandler = () => {
    setModals({ bulkDaoAttributeModal: true });
  };

  return (
    <Container
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <PageHeading>Contributions</PageHeading>
      {isFetching && isMintedFetching ? (
        <GovrnSpinner />
      ) : allContributions.length > 0 ? (
        <Tabs
          variant="soft-rounded"
          width="100%"
          maxWidth="100vw"
          paddingX={{ base: 4, lg: 0 }}
        >
          <TabList>
            <Tab>Contributions</Tab>
            <Tab isDisabled={mintedContributions.length === 0}>
              Minted Contributions
            </Tab>
            <Tab>Contribution Types</Tab>
          </TabList>
          <TabPanels>
            <TabPanel paddingX="0">
              <Box
                background="white"
                boxShadow="sm"
                borderRadius={{ base: 'none', md: 'lg' }}
              >
                {nonMintedContributions.length > 0 ? (
                  <Stack spacing="5">
                    <Box paddingX={{ base: '4', md: '6' }} paddingTop={4}>
                      <Stack
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent={{ base: 'center', lg: 'space-between' }}
                        alignItems={{ base: 'flex-start', lg: 'center' }}
                        width={{ base: '100%' }}
                        maxWidth="100vw"
                      >
                        <Text fontSize="lg" fontWeight="medium">
                          My Contributions
                        </Text>
                        {selectedContributions?.length === 0 ? (
                          <Alert
                            status="info"
                            width={{ base: '100%', lg: '60%' }}
                            borderRadius="md"
                          >
                            <AlertDescription>
                              <span
                                role="img"
                                aria-labelledby="Sun emoji for alert to select at least one contribution to attribute to a DAO or mint."
                              >
                                🌞
                              </span>{' '}
                              Please select at least one contribution to
                              attribute to a DAO or mint.
                            </AlertDescription>
                          </Alert>
                        ) : (
                          <Stack direction="row" spacing={5}>
                            <Button
                              variant="primary"
                              size="md"
                              onClick={bulkDaoAttributeHandler}
                              disabled={selectedContributions?.length === 0}
                            >
                              Attribute to DAO
                            </Button>
                            <Button
                              variant="secondary"
                              size="md"
                              onClick={mintModalHandler}
                              disabled={selectedContributions?.length === 0}
                              data-testid="mint-btn-test"
                            >
                              {selectedContributions?.length > 1
                                ? 'Bulk Mint'
                                : 'Mint'}
                            </Button>
                          </Stack>
                        )}
                      </Stack>
                    </Box>
                    <Box width="100%" maxWidth="100vw" overflowX="auto">
                      <ContributionsTable
                        data={nonMintedContributions}
                        setSelectedContributions={setSelectedContributions}
                        nextPage={fetchNextPage}
                        hasMoreItems={hasNextPage || false}
                      />
                    </Box>
                  </Stack>
                ) : (
                  <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent={{ base: 'center', lg: 'space-between' }}
                    alignItems={{ base: 'flex-start', lg: 'center' }}
                    width={{ base: '100%' }}
                    maxWidth="100vw"
                  >
                    <EmptyContributions />
                  </Stack>
                )}
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
                    <Text fontSize="lg" fontWeight="medium">
                      My Minted Contributions{' '}
                      <span role="img" aria-label="Sun emoji for Minted">
                        🌞
                      </span>
                    </Text>
                  </Box>
                  <Box width="100%" maxWidth="100vw" overflowX="auto">
                    <MintedContributionsTable
                      data={mintedContributions}
                      nextPage={fetchMintedNextPage}
                      hasMoreItems={hasMintedNextPage || false}
                    />
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
                    </Stack>
                  </Box>
                  <Box width="100%" maxWidth="100vw" overflowX="auto">
                    <ContributionTypesTable
                      contributionTypesData={allContributions}
                    />
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
