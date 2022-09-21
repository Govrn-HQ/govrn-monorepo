import { useEffect, useState } from 'react';
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
import ModalWrapper from './ModalWrapper';
import { GovrnSpinner } from '@govrn/protocol-ui';
import MintModal from './MintModal';
import BulkDaoAttributeModal from './BulkDaoAttributeModal';
import PageHeading from './PageHeading';
import ContributionsTable from './ContributionsTable';
import ContributionTypesTable from './ContributionTypesTable';
import EmptyContributions from './EmptyContributions';
import { useContributions } from '../contexts/ContributionContext';
import { getActivityTypes } from '../hooks/useActivityTypes';

const ContributionsTableShell = () => {
  const { isUserContributionsLoading, userContributions } = useContributions();
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContributions, setSelectedContributions] = useState<any>();
  const [selectedContributionsMap, setSelectedContributionsMap] =
    useState<any>();

  useEffect(() => {
    if (selectedContributions && selectedContributions.length > 0) {
      setSelectedContributionsMap(
        selectedContributions?.map((contribution: any) =>
          userContributions.find(
            localContribution =>
              contribution.original.id === localContribution.id,
          ),
        ),
      );
    }
  }, [selectedContributions]);

  const mintModalHandler = () => {
    setModals({ mintModal: true });
  };

  const bulkDaoAttributeHandler = () => {
    setModals({ bulkDaoAttributeModal: true });
  };

  const test = getActivityTypes();

  console.log('activity types', test);
  return (
    <>
      <Container
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        maxWidth="1200px"
      >
        <PageHeading>Contributions</PageHeading>
        {isUserContributionsLoading ? (
          <GovrnSpinner />
        ) : userContributions && userContributions?.length > 0 ? (
          <Tabs
            variant="soft-rounded"
            colorScheme="gray"
            width="100%"
            maxWidth="100vw"
            paddingX={{ base: 4, lg: 0 }}
          >
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
                                aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
                              >
                                🌞
                              </span>{' '}
                              Please select at least one Contribution to
                              attribute to a DAO or mint.
                            </AlertDescription>
                          </Alert>
                        ) : (
                          <Stack direction="row" spacing={5}>
                            <Button
                              size="md"
                              bgColor="brand.primary.50"
                              color="brand.primary.600"
                              transition="all 100ms ease-in-out"
                              _hover={{ bgColor: 'brand.primary.100' }}
                              colorScheme="brand.primary"
                              onClick={bulkDaoAttributeHandler}
                              disabled={selectedContributions?.length === 0}
                            >
                              Attribute to DAO
                            </Button>
                            <Button
                              size="md"
                              bgColor="white"
                              color="brand.primary.600"
                              border="1px solid"
                              borderColor="brand.primary.500"
                              transition="all 100ms ease-in-out"
                              _hover={{ bgColor: 'brand.primary.50' }}
                              colorScheme="brand.primary"
                              onClick={mintModalHandler}
                              disabled={selectedContributions?.length === 0}
                            >
                              Mint
                            </Button>
                          </Stack>
                        )}
                      </Stack>
                    </Box>
                    <Box width="100%" maxWidth="100vw" overflowX="auto">
                      <ContributionsTable
                        contributionsData={userContributions}
                        setSelectedContributions={setSelectedContributions}
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
                      {userContributions.length > 0 ? (
                        <ContributionTypesTable
                          contributionTypesData={userContributions}
                        />
                      ) : (
                        <EmptyContributions />
                      )}
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
      <ModalWrapper
        name="mintModal"
        title="Mint Your DAO Contributions"
        localOverlay={localOverlay}
        size="3xl"
        content={<MintModal contributions={selectedContributions} />}
      />
      <ModalWrapper
        name="bulkDaoAttributeModal"
        title="Attribute Contributions to a DAO"
        localOverlay={localOverlay}
        size="3xl"
        content={
          <BulkDaoAttributeModal contributions={selectedContributionsMap} />
        }
      />
    </>
  );
};

export default ContributionsTableShell;
