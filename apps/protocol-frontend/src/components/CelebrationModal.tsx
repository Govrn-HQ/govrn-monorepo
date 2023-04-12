import { useEffect, useState } from 'react';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { TextList } from './TextList';
import pluralize from 'pluralize';
import { useReward } from 'react-rewards';

const CelebrationModal = () => {
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
          minH="8rem"
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
            for your DAO.
          </Text>
        </Flex>
        <Box as="span" id="rewardId" />
      </Flex>

      {/* <TextList
        items={[
          {
            id: String(contribution.id),
            text: contribution.name,
          },
        ]}
      /> */}
    </Stack>
  );
};

export default CelebrationModal;
