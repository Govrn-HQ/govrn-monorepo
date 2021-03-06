import { useState } from 'react';
import {
  Container,
  Stack,
  Text,
  Box,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Alert,
  AlertDescription,
} from '@chakra-ui/react';
import { useOverlay } from '../contexts/OverlayContext';
import { useUser } from '../contexts/UserContext';
import { ModalWrapper } from '@govrn/protocol-ui';
import MintModal from './MintModal';
import PageHeading from './PageHeading';
import ContributionsTable from './ContributionsTable';
import ContributionTypesTable from './ContributionTypesTable';
import EmptyContributions from './EmptyContributions';

const ContributionsTableShell = () => {
  const { userContributions } = useUser();
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContributions, setSelectedContributions] = useState<any>();

  const mintModalHandler = () => {
    setModals({ mintModal: true });
  };

  return (
    <>
      <Container
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        maxWidth="1200px"
      >
        <PageHeading>Contributions</PageHeading>
        {userContributions && userContributions?.length > 0 ? (
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
                            width={{ base: '100%', lg: '50%' }}
                            borderRadius="md"
                          >
                            <AlertDescription>
                              <span
                                role="img"
                                aria-labelledby="Sun emoji for alert to select at least one Contribution to mint."
                              >
                                ????
                              </span>{' '}
                              Please select at least one Contribution to mint.
                            </AlertDescription>
                          </Alert>
                        ) : (
                          <Button
                            size="md"
                            bgColor="brand.primary.50"
                            color="brand.primary.600"
                            transition="all 100ms ease-in-out"
                            _hover={{ bgColor: 'brand.primary.100' }}
                            flexBasis="10%"
                            colorScheme="brand.primary"
                            onClick={mintModalHandler}
                            disabled={selectedContributions?.length === 0}
                          >
                            Mint
                          </Button>
                        )}
                      </Stack>
                    </Box>
                    <Box width="100%" maxWidth="100vw" overflowX="auto">
                      <ContributionsTable
                        contributionsData={userContributions}
                        setSelectedContributions={setSelectedContributions}
                      />
                    </Box>
                    {/* <Box px={{ base: '4', md: '6' }} pb="5">
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
                    </Box> */}
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
                    {/* <Box px={{ base: '4', md: '6' }} pb="5">
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
                    </Box> */}
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
    </>
  );
};

export default ContributionsTableShell;
