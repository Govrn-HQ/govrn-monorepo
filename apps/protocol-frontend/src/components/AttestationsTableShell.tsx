import { useState } from 'react';

import { Stack, Text, Box, Button } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import { useOverlay } from '../contexts/OverlayContext';
import PageHeading from './PageHeading';
import AttestationsTable from './AttestationsTable';
import EmptyContributions from './EmptyContributions';
import { ModalWrapper } from '@govrn/protocol-ui';
import BulkAttestationModal from './BulkAttestationModal';

const AttestationsTableShell = () => {
  const { daoContributions } = useUser();
  const localOverlay = useOverlay();
  const { setModals } = useOverlay();
  const [selectedContributions, setSelectedContributions] = useState<any>();

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
        {daoContributions && daoContributions.length > 0 ? (
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
                      These are Contributions that you haven't already Attested
                      to.
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
                  >
                    Attest
                  </Button>
                </Stack>
              </Box>
              <Box width="100%" maxWidth="100vw" overflowX="auto">
                <AttestationsTable
                  contributionsData={daoContributions}
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
