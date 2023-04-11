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
      <Text paddingBottom={2} fontWeight="bold">
        Amazing!
      </Text>
      <Text>
        Your attestation has officially
        <Text as="span" fontWeight="bold">
          verified this contribution
        </Text>{' '}
        for your DAO.
      </Text>

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
