import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import VerificationFrameworkForm from './VerificationFrameworkForm';

const VerificationFramework = () => {
  return (
    <Flex
      justify="space-between"
      direction="column"
      wrap="wrap"
      width="100%"
      paddingX={4}
      paddingY={8}
      background="white"
      boxShadow="sm"
      marginBottom={4}
    >
      <Flex justifyContent="space-between" direction="column" wrap="wrap">
        <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
          Verification Framework (Optional)
        </Heading>
        <Divider marginY={{ base: 4, lg: 4 }} bgColor="gray.300" />
        <Flex
          direction="column"
          maxWidth={{ base: '100%', xl: '60%' }}
          fontSize="md"
        >
          <Text>
            Setting a Verification Framework means accepting contributions into
            your DAO. Acceptance has two options: a number of DAO members and
            admin approval.
          </Text>
          <br />
          <Text>
            Contributions must be attributed for verification. Once you set this
            option you can always return and edit settings.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default VerificationFramework;
