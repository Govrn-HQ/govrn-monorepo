import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import { useOverlay } from '../contexts/OverlayContext';
import { AttestationTableType } from '../types/table';
import pluralize from 'pluralize';
import useDisplayName from '../hooks/useDisplayName';
import useAttestationBulkMint from '../hooks/useAttestationBulkMint';
import useAttestationMint from '../hooks/useAttestationMint';
import { TextList } from './TextList';

interface BulkAttestationModalProps {
  contributions: AttestationTableType[];
  onFinish?: (() => void) | undefined;
}

export const AttestationModal = ({
  contribution,
  onFinish,
}: {
  contribution: AttestationTableType;
  onFinish?: (() => void) | undefined;
}) => {
  const { displayName } = useDisplayName();
  const { isLoading: attesting, mutateAsync: mintAttestation } =
    useAttestationMint();
  const { setModals } = useOverlay();

  const createAttestationsHandler = async (
    contributions: AttestationTableType,
  ) => {
    if (!contribution.onChainId) {
      throw new Error('No on chain id for contribution!');
    }
    try {
      await mintAttestation({
        onChainId: contribution.onChainId,
        contributionId: contribution.id,
      });
      setModals({ attestationModal: false });
      if (onFinish) onFinish();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <Text paddingBottom={2}>
        Attesting as: <strong>{displayName}</strong>
      </Text>
      <Text>
        Attesting to <strong>1 </strong>
        {pluralize('Contribution', 1)}:
      </Text>
      <TextList
        items={[
          {
            id: String(contribution.id),
            text: contribution.name,
          },
        ]}
      />
      <Flex align="flex-end" marginTop={4}>
        <Button
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          onClick={() => createAttestationsHandler(contribution)}
          isLoading={attesting}
          data-testid="addAttestations-btn"
        >
          Add {pluralize('Attestation', 1)}
        </Button>
      </Flex>
    </Stack>
  );
};

export const BulkAttestationModal = ({
  contributions,
  onFinish,
}: BulkAttestationModalProps) => {
  const { userData } = useUser();
  const { isLoading: attesting, mutateAsync: bulkMintAttestation } =
    useAttestationBulkMint();
  const { setModals } = useOverlay();

  const createAttestationsHandler = async (
    contributions: AttestationTableType[],
  ) => {
    try {
      const attestationInput = [];
      for (const c of contributions) {
        if (!c.onChainId) {
          continue;
        }
        attestationInput.push({
          name: c.name,
          onChainId: c.onChainId,
        });
      }
      await bulkMintAttestation(attestationInput);
      setModals({ bulkAttestationModal: false });
      if (onFinish) onFinish();
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
