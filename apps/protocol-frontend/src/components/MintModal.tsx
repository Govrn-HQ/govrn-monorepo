import { useState, useEffect } from 'react';
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
import { bulkStoreIpfs, storeIpfs } from '../libs/ipfs';
import { useLocalStorage } from '../utils/hooks';
import { FaQuestionCircle } from 'react-icons/fa';
import { MintModalProps, MintContributionType } from '../types/mint';
import { GovrnSpinner } from '@govrn/protocol-ui';
import { useContributions } from '../contexts/ContributionContext';
import { useOverlay } from '../contexts/OverlayContext';

const MintModal = ({ contributions }: MintModalProps) => {
  const { setModals } = useOverlay();
  const { mintContribution, bulkMintContributions } = useContributions();
  const [isChecked] = useState(false);
  const [freshAgreementMint, setFreshAgreementMint] = useState(true);
  const [agreementChecked, setAgreementChecked] = useLocalStorage(
    'Govrn:Public-Data-Agreement',
    JSON.stringify({
      agreement: false,
    }),
  );
  const [minting, setMinting] = useState(false);

  const mintHandler = async (contributions: MintContributionType[]) => {
    setMinting(true);
    if (contributions.length > 1) {
      const bulkStoreResult = await bulkStoreIpfs(
        contributions.map(c => ({
          content: {
            name: c.original.name,
            details: c.original.details,
            proof: c.original.proof,
          },
        })),
      );

      // Mint successfully stored contributions in IPFS.
      await bulkMintContributions(
        bulkStoreResult
          .filter(b => b.status === 'fulfilled')
          .map(v => ({
            ...contributions[v.index].original,
            ipfsContentUri: v.value as string,
          })),
      );
    } else if (contributions.length === 1) {
      const contribution = contributions[0];

      const ipfsContentUri = await storeIpfs({
        name: contribution.original.name,
        details: contribution.original.details,
        proof: contribution.original.proof,
      });

      await mintContribution(
        contribution.original,
        ipfsContentUri,
        progress => {
          console.dir({ progress });
        },
      );
    }

    if (isChecked) {
      setAgreementChecked((prevState: { agreement: boolean }) => ({
        ...prevState,
        agreement: true,
      }));
    }
    setFreshAgreementMint(false);

    setModals({});
  };

  const agreementCheckboxHandler = () => {
    setAgreementChecked((prevState: { agreement: boolean }) => ({
      ...prevState,
      agreement: true,
    }));
  };

  return (
    <Stack spacing="3" width="100%" color="gray.800">
      <HStack width="100%" justifyContent="space-between">
        <Text fontSize="md">
          Minting {contributions.length}{' '}
          {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Text>
        <Tooltip
          label={`Why Mint?
        Minting a Contribution makes it immutable and creates a historical record of what's been done that can't be changed.`}
          fontSize="md"
          bgColor="brand.primary.50"
          placement="right"
        >
          <HStack width="fit-content">
            <Text>Why Mint?</Text>
            <Icon as={FaQuestionCircle} size="64px" />
          </HStack>
        </Tooltip>
      </HStack>
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

          {freshAgreementMint === true && !agreementChecked.agreement && (
            <Checkbox onChange={agreementCheckboxHandler}>
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
          <Text>Confirm each mint transaction in your wallet.</Text>
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
          onClick={() => mintHandler(contributions)}
          isLoading={minting}
          disabled={!agreementChecked.agreement}
        >
          {contributions.length > 1 ? 'Bulk ' : ''}
          Mint {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MintModal;
