import { useState } from 'react';
import {
  Container,
  Stack,
  HStack,
  Text,
  Box,
  useBreakpointValue,
  ButtonGroup,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import PageHeading from './PageHeading';
import AttestationsTable from './AttestationsTable';
import EmptyContributions from './EmptyContributions';

const AttestationsTableShell = () => {
  const { userContributions } = useUser();
  const [selectedContributions, setSelectedContributions] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddAttestation = () => {
    selectedContributions.map(
      (contribution, idx) =>
        console.log(`contribution: ${idx}`, contribution.original)
      // mint logic
    );
  };

  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <PageHeading>Attestations</PageHeading>
      {userContributions && userContributions.length > 0 ? (
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
                <Text fontSize="lg" fontWeight="medium">
                  DAO Contributions
                </Text>
                <Button
                  bgColor="brand.primary.50"
                  color="brand.primary.600"
                  transition="all 100ms ease-in-out"
                  _hover={{ bgColor: 'brand.primary.100' }}
                  flexBasis="10%"
                  colorScheme="brand.primary"
                  disabled={selectedContributions?.length === 0}
                >
                  Vouch
                </Button>
              </Stack>
            </Box>
            <Box overflowX="auto">
              <AttestationsTable
                contributionsData={userContributions}
                setSelectedContributions={setSelectedContributions}
              />
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
      ) : (
        <EmptyContributions />
      )}
    </Container>
  );
};

export default AttestationsTableShell;
