import { useState } from 'react';
import { Button, Flex, Progress, Stack, Text } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';

interface BulkAttestationModalProps {
  contributions: any;
}

const BulkAttestationModal = ({ contributions }: BulkAttestationModalProps) => {
  const { userData, createAttestation, mintAttestation } = useUser();
  const [attesting, setAttesting] = useState(false);
  const [currentAttestation] = useState(1);

  // TODO: after migrating to react-table v8, figure out this type.
  const createAttestationsHandler = (contrs) => {
    setAttesting(true);
    contrs.map((contribution, idx) => {
      console.log(`contribution: ${idx}`, contribution);
      if (contribution.status === 'minted') {
        console.log(`contribution ${idx} is on chain`);
        mintAttestation(contribution);
      } else {
        console.log(`contribution ${idx} is off chain`);
        createAttestation(contribution);
      }
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
          Add {contributions.length === 1 ? 'Attestation' : 'Attestations'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default BulkAttestationModal;
