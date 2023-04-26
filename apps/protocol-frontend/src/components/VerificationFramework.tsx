import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import useVerificationSettingGet from '../hooks/useVerificationSettingGet';
import VerificationFrameworkForm from './VerificationFrameworkForm';

const VerificationFramework = ({
  verificationSettingId,
  daoId,
}: {
  verificationSettingId?: number | null;
  daoId: number;
}) => {
  const {
    isError: verificationSettingDataError,
    data: verificationSettingData,
  } = useVerificationSettingGet({ id: verificationSettingId });

  if (verificationSettingDataError) {
    return <Text>An error occurred fetching the Verification Settings.</Text>;
  }

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
            your DAO.
          </Text>
          <br />
          <Text>
            A contribution becomes Verified by the DAO when it receives a
            minimum number of attestations from members.
          </Text>
        </Flex>
        <VerificationFrameworkForm
          verificationSettingId={verificationSettingId ?? null}
          daoId={daoId}
          numberOfAttestations={verificationSettingData?.num_of_attestations}
        />
      </Flex>
    </Flex>
  );
};

export default VerificationFramework;
