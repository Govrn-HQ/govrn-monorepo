import { useState } from 'react';
import {
  Box,
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { useOverlay } from '../contexts/OverlayContext';
import PageHeading from './PageHeading';
import AttestationsTable from './AttestationsTable';
import EmptyContributions from './EmptyContributions';
import MyAttestationsTable from './MyAttestationsTable';
import ModalWrapper from './ModalWrapper';
import { GovrnSpinner } from '@govrn/protocol-ui';
import BulkAttestationModal from './BulkAttestationModal';
import { useContributions } from '../contexts/ContributionContext';
import { useContributionInfiniteList } from '../hooks/useContributionList';
import { mergePages } from '../utils/arrays';
import { useUser } from '../contexts/UserContext';

const AttestationsTableShell = () => {
  // const { isDaoContributionLoading, daoContributions } = useContributions();
  //
  // 1. only minted
  // 2. guild contribution from user guilds
  // 3. not a user contribution
  // 4. Unattested contribution by user
  // 5. Allow to toggle all daos
  const { userData } = useUser();
  const {
    isFetching,
    data: contributions,
    hasNextPage,
    fetchNextPage,
  } = useContributionInfiniteList({
    where: {
      status: { is: { name: { equals: 'minted' } } },
      user_id: {
        not: { equals: userData?.id || 0 },
      },
      guilds: {
        some: {
          guild_id: {
            in: userData?.guild_users.map(guild => guild.guild_id) || [],
          },
        },
      },
    },
  });
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContributions, setSelectedContributions] = useState<any[]>([]);

  const attestationsModalHandler = () => {
    setModals({ bulkAttestationModal: true });
  };

  return (
    <>
      <Box
        paddingY={{ base: '4', md: '8' }}
        paddingX={{ base: '0', md: '8' }}
        color="gray.700"
        maxWidth="1200px"
      >
        <PageHeading>Attestations</PageHeading>
        {isFetching && contributions && contributions.pages.length === 0 ? (
          <GovrnSpinner />
        ) : contributions && contributions.pages.length > 0 ? (
          <Tabs
            variant="soft-rounded"
            colorScheme="gray"
            width="100%"
            maxWidth="100vw"
            paddingX={{ base: 4, lg: 0 }}
          >
            <TabList>
              <Tab>DAO Contributions</Tab>
              <Tab>My Attestations</Tab>
            </TabList>
            <TabPanels>
              <TabPanel paddingX="0">
                <Box
                  background="white"
                  boxShadow="sm"
                  borderRadius={{ base: 'none', md: 'lg' }}
                >
                  <Stack spacing="5">
                    <Box paddingX={{ base: '4', md: '6' }} paddingTop="5">
                      <Stack
                        direction={{ base: 'column', md: 'row' }}
                        justify="space-between"
                      >
                        <Stack direction="column" gap="2">
                          <Text fontSize="lg" fontWeight="medium">
                            DAO Contributions
                          </Text>
                          <Text fontSize="md" fontWeight="normal">
                            These are minted Contributions that you haven't
                            already Attested to.
                          </Text>
                        </Stack>
                        <Button
                          bgColor="brand.primary.50"
                          color="brand.primary.600"
                          transition="all 100ms ease-in-out"
                          _hover={{ bgColor: 'brand.primary.100' }}
                          flexBasis="10%"
                          colorScheme="brand.primary"
                          disabled={selectedContributions?.length === 0}
                          onClick={attestationsModalHandler}
                          data-testId="attest-testId"
                        >
                          Attest
                        </Button>
                      </Stack>
                    </Box>
                    <AttestationsTable
                      contributionsData={mergePages(contributions.pages)}
                      setSelectedContributions={setSelectedContributions}
                      hasMoreItems={hasNextPage}
                      nextPage={fetchNextPage}
                    />
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
                      <Stack direction="column" gap="2">
                        <Text fontSize="lg" fontWeight="medium">
                          My Attestations
                        </Text>
                        <Text fontSize="md" fontWeight="normal">
                          These are Contributions that you have already Attested
                          to.
                        </Text>
                      </Stack>
                    </Box>
                    <Box width="100%" maxWidth="100vw" overflowX="auto">
                      {contributions && contributions.pages.length > 0 ? (
                        <MyAttestationsTable
                          contributionsData={mergePages(contributions.pages)}
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
      </Box>
      <ModalWrapper
        name="bulkAttestationModal"
        title="Attest to DAO Contributions"
        localOverlay={localOverlay}
        size="3xl"
        content={<BulkAttestationModal contributions={selectedContributions} />}
      />
    </>
  );
};

export default AttestationsTableShell;
