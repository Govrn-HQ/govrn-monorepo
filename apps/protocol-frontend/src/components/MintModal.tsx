import { useState } from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  Progress,
  Checkbox,
  Tooltip,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { storeIpfs } from '../libs/ipfs';
import { useUser } from '../contexts/UserContext';
import { useLocalStorage } from '../utils/hooks';
import { FaQuestionCircle } from 'react-icons/fa';

interface MintModalProps {
  contributions: any;
}

const MintModal = ({ contributions }: MintModalProps) => {
  const { userData, mintContribution } = useUser();
  const [isChecked, setIsChecked] = useState(false);
  const [freshAgreementMint, setFreshAgreementMint] = useState(true);
  const [agreementChecked, setAgreementChecked] = useLocalStorage(
    'Govrn:Public-Data-Agreement',
    {
      agreement: false,
    }
  );
  const [minting, setMinting] = useState(false);
  const [currentContribution, setCurrentContribution] = useState(1);

  const mintHandler = async (contributions) => {
    console.log('contributions', contributions[0].original.name);
    // console.log('Minting...', contributions[0].name);
    const ipfsContentUri = await storeIpfs({
      content: contributions[0].original.name,

      // name: contributions[0].original.name,
      // details: contributions[0].original.details,
      // proof: contributions[0].original.proof,
    });
    console.log('ipfsContentUri', ipfsContentUri);
    // console.log('agreement: ', agreementChecked.agreement);
    setMinting(true);
    mintContribution(contributions[0].original, ipfsContentUri);

    contributions.map((contribution, idx) => {
      console.log(`contribution: ${idx}`, contribution.original);
      // mintContribution(contribution.original);
    });
    if (isChecked === true) {
      setAgreementChecked((prevState: any) => ({
        ...prevState,
        agreement: true,
      }));
    }
    setMinting(false);
    setFreshAgreementMint(false);
  };

  const agreementCheckboxHandler = () => {
    // setIsChecked(!isChecked);
    setAgreementChecked((prevState: any) => ({
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
      <Text>
        Please note that minting will result in your Contribution data becoming
        public. This means that anyone will be able to see your Contribution
        details on Block Explorers such as Etherscan (Mainnet) or Blockscout
        (Gnosis Chain).
      </Text>
      <Text>
        After you agree to the terms, we'll store this in your browser's local
        storage and we'll ask you again when we update our protocol.
      </Text>
      {freshAgreementMint === true && !agreementChecked.agreement && (
        <Checkbox onChange={agreementCheckboxHandler}>
          <Text color="black" fontWeight="normal" fontSize="md">
            I understand
          </Text>
        </Checkbox>
      )}
      {minting ? <Progress color="brand.primary" /> : null}
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
          Mint {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MintModal;
