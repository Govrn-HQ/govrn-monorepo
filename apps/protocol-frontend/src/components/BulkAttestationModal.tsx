import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import { useOverlay } from '../contexts/OverlayContext';
import pluralize from 'pluralize';
import useDisplayName from '../hooks/useDisplayName';
import useAttestationBulkMint from '../hooks/useAttestationBulkMint';
import useAttestationMint from '../hooks/useAttestationMint';
import { TextList } from './TextList';
import { UIContribution } from '@govrn/ui-types';

interface BulkAttestationModalProps {
  contributions: UIContribution[];
  onFinish?: (() => void) | undefined;
  setVerifiedContributions: (contributions: UIContribution[]) => void;
}

export const AttestationModal = ({
  contribution,
  onFinish,
  setVerifiedContribution,
}: {
  contribution: UIContribution;
  onFinish?: (() => void) | undefined;
  setVerifiedContribution: (contribution: UIContribution) => void;
}) => {
  const { displayName } = useDisplayName();
  const { isLoading: attesting, mutateAsync: mintAttestation } =
    useAttestationMint();
  const attestationThreshold = contribution.guilds[0]?.attestation_threshold;

  const { setModals } = useOverlay();

  const createAttestationsHandler = async (contributions: UIContribution) => {
    if (!contribution.on_chain_id) {
      throw new Error('No on chain id for contribution!');
    }
    try {
      await mintAttestation({
        onChainId: contribution.on_chain_id,
        contributionId: contribution.id,
      });
      setModals({ attestationModal: false });
      if (onFinish) onFinish();
      if (attestationThreshold === 1) {
        setVerifiedContribution(contribution);
        setModals({ verifiedCelebrationModal: true });
      }
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
          variant="primary"
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
  setVerifiedContributions,
}: BulkAttestationModalProps) => {
  const { userData } = useUser();
  const { isLoading: attesting, mutateAsync: bulkMintAttestation } =
    useAttestationBulkMint();
  const { setModals } = useOverlay();

  const createAttestationsHandler = async (contributions: UIContribution[]) => {
    try {
      const attestationInput = [];
      const verifiedContributions = [];
      for (const c of contributions) {
        if (!c.on_chain_id) {
          continue;
        }
        const attestationThreshold = c.guilds[0]?.attestation_threshold;
        if (attestationThreshold === 1) {
          verifiedContributions.push(c);
          setVerifiedContributions(verifiedContributions);
        }
        attestationInput.push({
          name: c.name,
          onChainId: c.on_chain_id,
        });
      }
      await bulkMintAttestation(attestationInput);
      setModals({ bulkAttestationModal: false });
      if (onFinish) onFinish();
      if (verifiedContributions && verifiedContributions.length > 0) {
        setModals({ bulkVerifiedCelebrationModal: true });
      }
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
        {pluralize('contribution', contributions.length)}:
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
          variant="primary"
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
