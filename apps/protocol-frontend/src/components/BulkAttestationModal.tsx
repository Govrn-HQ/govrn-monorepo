import { useState } from 'react';
import {
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import { MdCheckCircle } from 'react-icons/all';
import { AttestationTableType } from '../types/table';
import pluralize from 'pluralize';
import useAttestationBulkMint from '../hooks/useAttestationBulkMint';
import { TextList } from './TextList';

interface BulkAttestationModalProps {
  contributions: AttestationTableType[];
}

const BulkAttestationModal = ({ contributions }: BulkAttestationModalProps) => {
  const { userData } = useUser();
  const { isLoading: attesting, mutateAsync: bulkMintAttestation } =
    useAttestationBulkMint();
  const [currentAttestation] = useState(1);

  const createAttestationsHandler = async (
    contributions: AttestationTableType[],
  ) => {
    try {
      await bulkMintAttestation(
        contributions.map(c => {
          return {
            name: c.name,
            onChainId: c.onChainId,
            confidence: 1,
            confidenceName: 'Verified',
          };
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <Text paddingBottom={2}>
        Attesting as: <strong>{userData?.name}</strong>
      </Text>
      <Text>
        Attesting to <strong>{contributions.length} </strong>
        {pluralize('Contribution', contributions.length)}:
      </Text>
      <TextList
        items={contributions.map(c => ({
          id: String(c.id),
          text: c.name,
        }))}
      />
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
          data-testId="addAttestations-btn"
        >
          Add {pluralize('Attestation', contributions.length)}
        </Button>
      </Flex>
    </Stack>
  );
};

export default BulkAttestationModal;
