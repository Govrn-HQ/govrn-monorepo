import { useState } from 'react';
import {
  Stack,
  Flex,
  Button,
  Text,
  Progress,
  Checkbox,
} from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import { useLocalStorage } from '../utils/hooks';

interface MintModalProps {
  contributions: any;
}

const MintModal = ({ contributions }: MintModalProps) => {
  const { userData } = useUser();
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

  const mintHandler = (contributions) => {
    console.log('agreement: ', agreementChecked.agreement);
    setMinting(true);
    contributions.map((contribution, idx) => {
      if (isChecked === true) {
        setAgreementChecked((prevState: any) => ({
          ...prevState,
          agreement: true,
        }));
      }
      console.log(`contribution: ${idx}`, contribution.original);
      setMinting(false);
      setFreshAgreementMint(false);
    });
  };

  const agreementCheckboxHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Stack spacing="3" width="100%" color="gray.800">
      <Text fontSize="sm">
        Minting {contributions.length}{' '}
        {contributions.length === 1 ? 'Contribution' : 'Contributions'}
      </Text>
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
          disabled={!isChecked}
        >
          Mint {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MintModal;
