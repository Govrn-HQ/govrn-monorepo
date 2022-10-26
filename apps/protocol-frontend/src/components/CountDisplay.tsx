import { Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';

const TODAY_DATE = new Date();

interface CountDisplayProps {
  countData: number | undefined;
  isFetching: boolean;
  isLoading: boolean;
  isError: boolean;
  countText: string;
}

const CountDisplay = ({
  countData,
  isFetching,
  isLoading,
  isError,
  countText,
}: CountDisplayProps) => {
  if (isError) {
    return (
      <Text>An error occurred fetching the DAO's recent Contributions.</Text>
    );
  }

  if (isFetching || isLoading) {
    return <GovrnSpinner />;
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      width="fit-content"
      paddingX={4}
      paddingY={4}
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'lg' }}
    >
      <VisuallyHidden>
        {/* <Heading as="h3">{pluralize('Contribution', countData)} this Month</Heading> */}
        <Heading as="h3">{countText}</Heading>
      </VisuallyHidden>
      <Text fontSize="xl" fontWeight="bold">
        {countData}
      </Text>
      {/* <Text fontSize="sm">{pluralize('Contribution', sum)} this Month</Text> */}
      <Text fontSize="sm">{countText}</Text>
    </Flex>
  );
};

export default CountDisplay;
