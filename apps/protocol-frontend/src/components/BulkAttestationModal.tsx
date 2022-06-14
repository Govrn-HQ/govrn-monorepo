import { useState } from 'react';
import { Stack, Flex, Button, Text, Progress } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';

interface BulkAttestationModalProps {
  contributions: any;
}

const BulkAttestationModal = ({ contributions }: BulkAttestationModalProps) => {
  const { userData, createAttestation } = useUser();
  const [attesting, setAttesting] = useState(false);
  const [currentAttestation, setCurrentAttestation] = useState(1);

  console.log('contributions', contributions);
  const createAttestationsHandler = (contributions) => {
    setAttesting(true);
    contributions.map((contribution, idx) => {
      // mint and attest logic
      createAttestation(contribution.original);
      console.log(`contribution: ${idx}`, contribution.original);
      setAttesting(false);
    });
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <Text paddingBottom={2}>Attesting as: {userData.name}</Text>
      <Text paddingBottom={2}>
        Attesting to {contributions.length}{' '}
        {contributions.length === 1 ? 'Contribution' : 'Contributions'}
      </Text>
      {attesting ? (
        <Progress
          color="brand.primary"
          value={currentAttestation % contributions.length}
        />
      ) : null}
      <Flex align="flex-end" marginTop={4}>
        <Button
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          onClick={() => createAttestationsHandler(contributions)}
          isLoading={attesting}
        >
          Add Attestations
        </Button>
      </Flex>
    </Stack>
  );
};

export default BulkAttestationModal;
