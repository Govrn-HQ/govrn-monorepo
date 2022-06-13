import { Stack, Flex, Button, Text } from '@chakra-ui/react';

import { useUser } from '../contexts/UserContext';

interface BulkAttestationModalProps {
  contributions: any;
}

const createAttestationsHandler = (contributions) => {
  contributions.map(
    (contribution, idx) =>
      console.log(`attesatations: ${idx}`, contribution.original)
    // mint logic
  );
};

const BulkAttestationModal = ({ contributions }: BulkAttestationModalProps) => {
  const { userData } = useUser();

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <Text paddingBottom={2}>Attesting as: {userData.name}</Text>
      <Text paddingBottom={2}>
        Attesting to {contributions.length} Contributions
      </Text>
      <Flex align="flex-end" marginTop={4}>
        <Button
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          onClick={() => createAttestationsHandler(contributions)}
        >
          Add Attestations
        </Button>
      </Flex>
    </Stack>
  );
};

export default BulkAttestationModal;
