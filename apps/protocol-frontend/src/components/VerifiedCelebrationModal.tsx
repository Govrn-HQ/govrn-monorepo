import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  List,
  ListIcon,
  ListItem,
  HStack,
  Text,
} from '@chakra-ui/react';
import { TextList } from './TextList';
import { MdCheckCircle } from 'react-icons/md';
import { useReward } from 'react-rewards';
import { UIContribution } from '@govrn/ui-types';

export const VerifiedCelebrationModal = ({
  verifiedContribution,
}: {
  verifiedContribution: UIContribution;
}) => {
  const [celebrating, setCelebrating] = useState(true);
  const { reward } = useReward('rewardId', 'confetti', {
    colors: ['#86135B', '#5100E4', '#DF1F97', '#F2A5D5'],
    onAnimationComplete: () => setCelebrating(false),
  });

  useEffect(() => {
    if (celebrating) {
      reward();
    }
  }, [reward, celebrating]);

  return (
    <Stack
      spacing="4"
      width="100%"
      color="white"
      background="brand.gradientBackgroundModal"
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        <Text paddingBottom={2} fontWeight="bold">
          Amazing!
        </Text>
        <Flex
          direction="row"
          minH="4rem"
          alignItems="center"
          textAlign="center"
          wrap="wrap"
          maxW="md"
        >
          <Text>
            Your attestation has officially{' '}
            <Text as="span" fontWeight="bold">
              verified this contribution
            </Text>{' '}
            for your DAO:
          </Text>
        </Flex>
        <Box as="span" id="rewardId" />
      </Flex>
      <List variant="primary" paddingBottom={3} spacing={2}>
        <ListItem>
          <HStack>
            <ListIcon as={MdCheckCircle} color="brand.magenta" />
            <Text as="span">{verifiedContribution.name}</Text>
          </HStack>
        </ListItem>
      </List>
    </Stack>
  );
};

export const BulkVerifiedCelebrationModal = ({
  verifiedContributions,
}: {
  verifiedContributions: UIContribution[];
}) => {
  const [celebrating, setCelebrating] = useState(true);
  const { reward } = useReward('rewardId', 'confetti', {
    colors: ['#86135B', '#5100E4', '#DF1F97', '#F2A5D5'],
    onAnimationComplete: () => setCelebrating(false),
  });

  useEffect(() => {
    if (celebrating) {
      reward();
    }
  }, [reward, celebrating]);

  return (
    <Stack
      spacing="4"
      width="100%"
      color="white"
      background="brand.gradientBackgroundModal"
    >
      <Flex direction="column" alignItems="center" textAlign="center">
        <Text paddingBottom={2} fontWeight="bold">
          Amazing!
        </Text>
        <Flex
          direction="row"
          minH="4rem"
          alignItems="center"
          textAlign="center"
          wrap="wrap"
          maxW="md"
        >
          <Text>
            Your attestations have officially{' '}
            <Text as="span" fontWeight="bold">
              verified these contributions
            </Text>{' '}
            for your DAOs:
          </Text>
        </Flex>
        <Box as="span" id="rewardId" />
      </Flex>
      <TextList
        items={verifiedContributions.map(verifiedContribution => ({
          id: String(verifiedContribution.id),
          text: verifiedContribution.name,
        }))}
      />
    </Stack>
  );
};
