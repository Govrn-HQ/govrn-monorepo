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

interface MintModalProps {
  contributions: any;
}

const MintModal = ({ contributions }: MintModalProps) => {
  const { userData } = useUser();
  const [minting, setMinting] = useState(false);
  const [currentContribution, setCurrentContribution] = useState(1);

  console.log('contributions', contributions);
  const mintHandler = (contributions) => {
    setMinting(true);
    contributions.map((contribution, idx) => {
      // mint logic
      console.log(`contribution: ${idx}`, contribution.original);
      setMinting(false);
    });
  };

  return (
    <Stack spacing="4" width="100%" color="gray.800">
      <Text paddingBottom={2} fontSize="sm">
        Minting {contributions.length}{' '}
        {contributions.length === 1 ? 'Contribution' : 'Contributions'}
      </Text>
      <Text>
        Please note that minting will result in your Contribution data becoming
        public. This means that anyone can see your Contribution data on Block
        Explorers such as Etherscan.
      </Text>
      <Checkbox>
        <Text color="black" fontWeight="normal" fontSize="md">
          I understand
        </Text>
      </Checkbox>
      {minting ? <Progress color="brand.primary" /> : null}
      <Flex align="flex-end" marginTop={4}>
        <Button
          type="submit"
          width="100%"
          color="brand.primary.600"
          backgroundColor="brand.primary.50"
          transition="all 100ms ease-in-out"
          _hover={{ bgColor: 'brand.primary.100' }}
          onClick={() => mintHandler(contributions)}
          isLoading={minting}
        >
          Mint {contributions.length === 1 ? 'Contribution' : 'Contributions'}
        </Button>
      </Flex>
    </Stack>
  );
};

export default MintModal;
