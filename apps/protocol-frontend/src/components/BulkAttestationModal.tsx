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
import { MintContributionType } from '../types/mint';
import { useContributions } from '../contexts/ContributionContext';
import pluralize from 'pluralize';

interface BulkAttestationModalProps {
  contributions: MintContributionType[];
}

const BulkAttestationModal = ({ contributions }: BulkAttestationModalProps) => {
  const { userData } = useUser();
  const { createAttestation, mintAttestation } = useContributions();
  const [attesting, setAttesting] = useState(false);
  const [currentAttestation] = useState(1);
  console.log('contributions in mint', contributions);
  const createAttestationsHandler = (contributions: MintContributionType[]) => {
    setAttesting(true);
    contributions.map((contribution, idx) => {
      if (contribution.status.name === 'minted') {
        mintAttestation(contribution.original);
      } else {
        createAttestation(contribution);
      }
      setAttesting(false);
      return true;
    });
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
      <List variant="primary" paddingBottom={3} spacing={2}>
        {contributions.map(value => {
          return (
            <ListItem>
              {' '}
              <ListIcon as={MdCheckCircle} color="green.500" />
              {value.name}
            </ListItem>
          );
        })}
      </List>
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
