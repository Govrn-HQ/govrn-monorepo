import { useState } from 'react';
import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import AttestationsTable from './AttestationsTable';
import MyAttestationsTable from './MyAttestationsTable';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { SortOrder } from '@govrn/protocol-client';
import { useContributionInfiniteList } from '../hooks/useContributionList';
import { mergePages } from '../utils/arrays';
import { useUser } from '../contexts/UserContext';
import {
  MembershipStatusesNames,
  VERIFIED_CONTRIBUTION_NAME,
} from '../utils/constants';

const AttestationsTableShell = () => {
  const { userData } = useUser();
  const [filterByVerified, setFilterByVerified] = useState('showAll');
  const [filterMyAttestationsByVerified, setFilterMyAttestationsByVerified] =
    useState('showAll');
  const guildIds = userData?.guild_users
    ? userData?.guild_users
        .filter(guild => guild?.membershipStatus.name !== MembershipStatusesNames.Left)
        .map(guild => guild.guild_id)
    : []; // filter out the daos a user has left

  const handleAttestationFilter = (filterValue: string) => {
    setFilterByVerified(filterValue);
  };

  const handleMyAttestationsFilter = (filterValue: string) => {
    setFilterMyAttestationsByVerified(filterValue);
  };

  const {
    isFetching,
    data: contributions,
    hasNextPage,
    fetchNextPage,
  } = useContributionInfiniteList({
    orderBy: { date_of_engagement: SortOrder.Desc },
    where: {
      status: { is: { name: { equals: 'minted' } } },

      user: {
        is: {
          id: { not: { equals: userData?.id || 0 } },
        },
      },
      guilds: {
        some: {
          AND: [
            {
              guild_id: {
                in: guildIds,
              },
            },
            {
              ...(filterByVerified === 'showVerified' && {
                OR: [
                  {
                    attestation_threshold: {
                      equals: 0,
                    },
                  },
                  {
                    verificationStatus: {
                      is: {
                        name: {
                          equals: VERIFIED_CONTRIBUTION_NAME,
                        },
                      },
                    },
                  },
                ],
              }),
              ...(filterByVerified === 'showUnverified' && {
                AND: [
                  {
                    attestation_threshold: {
                      not: {
                        equals: 0,
                      },
                    },
                  },
                  {
                    verificationStatus: {
                      isNot: {
                        name: {
                          equals: VERIFIED_CONTRIBUTION_NAME,
                        },
                      },
                    },
                  },
                ],
              }),
            },
          ],
        },
      },
      attestations: {
        none: {
          OR: [
            {
              user_id: { equals: userData?.id || 0 },
              attestation_status: { isNot: { name: { equals: 'pending' } } },
            },
          ],
        },
      },
    },
  });

  const {
    data: attestedContributions,
    hasNextPage: hasNextPageAttestedContributions,
    fetchNextPage: fetchNextPageAttestedContributions,
  } = useContributionInfiniteList({
    orderBy: { date_of_engagement: SortOrder.Desc },
    where: {
      status: { is: { name: { equals: 'minted' } } },
      user_id: {
        not: { equals: userData?.id || 0 },
      },
      guilds: {
        some: {
          ...(filterMyAttestationsByVerified === 'showVerified' && {
            verificationStatus: {
              is: {
                name: {
                  equals: VERIFIED_CONTRIBUTION_NAME,
                },
              },
            },
          }),
          ...(filterMyAttestationsByVerified === 'showUnverified' && {
            verificationStatus: {
              isNot: {
                name: {
                  equals: VERIFIED_CONTRIBUTION_NAME,
                },
              },
            },
          }),
        },
      },
      attestations: {
        some: {
          AND: [
            {
              user_id: { equals: userData?.id || 0 },
              attestation_status: { isNot: { name: { equals: 'pending' } } },
            },
          ],
        },
      },
    },
  });

  if (isFetching && contributions && contributions.pages.length === 0) {
    return <GovrnSpinner />;
  }

  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <PageHeading>Attestations</PageHeading>
      {contributions && contributions.pages.length > 0 ? (
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
                  <AttestationsTable
                    data={mergePages(contributions.pages)}
                    hasMoreItems={hasNextPage}
                    nextPage={fetchNextPage}
                    attestationFilter={handleAttestationFilter}
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
                <Stack>
                  <Box width="100%" maxWidth="100vw" overflowX="auto">
                    <MyAttestationsTable
                      data={mergePages(attestedContributions?.pages || [])}
                      hasMoreItems={hasNextPageAttestedContributions}
                      nextPage={fetchNextPageAttestedContributions}
                      attestationFilter={handleMyAttestationsFilter}
                    />
                  </Box>
                </Stack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <GovrnSpinner />
      )}
    </Box>
  );
};

export default AttestationsTableShell;
