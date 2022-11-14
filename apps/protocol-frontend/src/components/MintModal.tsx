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
  ListItem,
  ListIcon,
  List,
} from '@chakra-ui/react';
import { bulkStoreIpfs } from '../libs/ipfs';
import { useLocalStorage } from '../utils/hooks';
import { FaQuestionCircle } from 'react-icons/fa';
import { MintModalProps } from '../types/mint';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useOverlay } from '../contexts/OverlayContext';
import useContributionMint from '../hooks/useContributionMint';
import { ContributionTableType } from '../types/table';
import { Row } from 'react-table';
import useContributionBulkMint from '../hooks/useContributionBulkMint';
import { MdCheckCircle } from 'react-icons/all';
import { TextList } from './TextList';

const MintModal = ({ contributions }: MintModalProps) => {
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

  const mintHandler = async (contributions: Row<ContributionTableType>[]) => {
    // Mint button is disabled unless user accepts terms.
    // Consequently, calling this means `isChecked` is already `true`.
    try {
      agreementCheckboxHandler();
      setMinting(true);
      if (contributions.length > 1) {
        const { results: bulkStoreResult } = await bulkStoreIpfs(
          contributions.map(c => ({
            name: c.original.name,
            details: c.original?.details || '',
            proof: c.original?.proof || '',
            activityName: c.original.activity_type.name,
            image: '',
            govrn: {
              id: c.original.id,
              activityTypeId: c.original.activity_type.id,
            },
          })),
        );
        const bulkResults = bulkStoreResult.map(({ index, value }) => ({
          ...contributions[index].original,
          ipfsContentUri: value,
        }));

        // Mint successfully stored contributions in IPFS.
        await bulkMintContributions(bulkResults);
      } else if (contributions.length === 1 && contributions[0].original) {
        const contribution = contributions[0];
        const original = contribution.original;
        const originalClean = {
          ...contribution.original,
          details: original.details || '',
          proof: original.proof || '',
          date_of_submission: original.date_of_submission.toString(),
          engagementDate: original.engagementDate.toString(),
          activityTypeName: contribution.original.activity_type.name,
        };
        await mintContribution({ ...originalClean });
      }
      setModals({}); // Closes mint modal
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
          Minting {contributions.length}{' '}
          {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Text>
        <Tooltip
          hasArrow
          label={`Why Mint?
        Minting a Contribution makes it immutable and creates a historical record of what's been done that can't be changed.`}
          fontSize="md"
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
          text: 'original' in c ? c.original.name : c.name,
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
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          onClick={() => {
            const c = contributions[0];
            if (contributions && 'original' in c) {
              mintHandler(contributions as Row<ContributionTableType>[]);
            }
          }}
          isLoading={minting}
          disabled={!(isChecked || agreementChecked.agreement)}
          data-testid="mintContribution-test"
        >
          {contributions.length > 1 ? 'Bulk ' : ''}
          Mint {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MintModal;
