import { useState } from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  HStack,
  Checkbox,
  Tooltip,
  Icon,
} from '@chakra-ui/react';
import { bulkStoreIpfs } from '../libs/ipfs';
import { useLocalStorage } from '../utils/hooks';
import { FaQuestionCircle } from 'react-icons/fa';
import { MintModalProps } from '../types/mint';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useOverlay } from '../contexts/OverlayContext';
import useContributionMint from '../hooks/useContributionMint';
import useContributionBulkMint from '../hooks/useContributionBulkMint';
import { TextList } from './TextList';
import pluralize from 'pluralize';
import { UIContribution } from '@govrn/ui-types';

const MintModal = ({ contributions, onFinish }: MintModalProps) => {
  const { setModals } = useOverlay();
  const { mutateAsync: bulkMintContributions } = useContributionBulkMint();
  const { mutateAsync: mintContribution } = useContributionMint();

  const [isChecked, setChecked] = useState(false);
  const [agreementChecked, setAgreementChecked] = useLocalStorage(
    'Govrn:Public-Data-Agreement',
    { agreement: false },
  );
  const [minting, setMinting] = useState(false);

  const agreementCheckboxHandler = () => {
    setAgreementChecked({ agreement: true });
  };

  const mintHandler = async (contributions: UIContribution[]) => {
    // Mint button is disabled unless user accepts terms.
    // Consequently, calling this means `isChecked` is already `true`.
    try {
      agreementCheckboxHandler();
      setMinting(true);
      if (contributions.length > 1) {
        const { results: bulkStoreResult } = await bulkStoreIpfs(
          contributions.map(c => ({
            name: c.name,
            details: c.details || '',
            proof: c.proof || '',
            activityName: c.activity_type.name,
            image: '',
            govrn: {
              id: c.id,
              activityTypeId: c.activity_type.id,
            },
          })),
        );
        const bulkResults = bulkStoreResult.map(({ index, value }) => ({
          ...contributions[index],
          ipfsContentUri: value,
        }));

        // Mint successfully stored contributions in IPFS.
        await bulkMintContributions(bulkResults);
      } else if (contributions.length === 1 && contributions[0]) {
        const contribution = contributions[0];
        const original = contribution;
        const originalClean = {
          ...contribution,
          details: original.details || '',
          proof: original.proof || '',
          date_of_submission: original.date_of_submission.toString(),
          engagementDate: original.date_of_engagement.toString(),
          activityTypeName: contribution.activity_type.name,
        };
        await mintContribution({ ...originalClean });
      }
      setModals({}); // Closes mint modal
      if (onFinish) onFinish();
      setMinting(false);
    } catch {
      setModals({}); // Closes mint modal
      setMinting(false);
    }
  };

  return (
    <Stack spacing="3" width="100%" color="gray.800">
      <HStack width="100%" justifyContent="space-between">
        <Text fontSize="md">
          Minting {pluralize('Contribution', contributions.length, true)}
        </Text>
        <Tooltip
          variant="primary"
          label={`Minting a contribution makes it immutable and creates a historical record of what's been done that can't be changed.`}
          fontSize="sm"
          placement="right"
        >
          <HStack width="fit-content">
            <Text>Why Mint?</Text>
            <Icon as={FaQuestionCircle} size="64px" />
          </HStack>
        </Tooltip>
      </HStack>
      <TextList
        items={contributions.map(c => ({
          id: String(c.id),
          text: c.name,
        }))}
      />
      {!minting ? (
        <>
          <Text>
            Please note that minting will result in your Contribution data
            becoming public. This means that anyone will be able to see your
            Contribution details on Block Explorers such as Etherscan (Mainnet)
            or Blockscout (Gnosis Chain).
          </Text>
          <Text>
            After you agree to the terms, we'll store this in your browser's
            local storage and we'll ask you again when we update our protocol.
          </Text>

          {!agreementChecked.agreement && (
            <Checkbox
              isChecked={isChecked}
              onChange={e => setChecked(e.target.checked)}
              data-testid="checkbox-testid"
            >
              <Text color="black" fontWeight="normal" fontSize="md">
                I understand
              </Text>
            </Checkbox>
          )}
        </>
      ) : (
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Text>Confirm the minting transaction in your wallet.</Text>
          <GovrnSpinner />
        </Flex>
      )}
      <Flex align="flex-end" marginTop={8}>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            mintHandler(contributions);
          }}
          isLoading={minting}
          disabled={!(isChecked || agreementChecked.agreement)}
          data-testid="mintContribution-test"
        >
          {contributions.length > 1 ? 'Bulk ' : ''}
          Mint {pluralize('Contribution', contributions.length)}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MintModal;
