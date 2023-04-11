import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { TextList } from './TextList';
import pluralize from 'pluralize';

const CelebrationModal = () => {
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
