import { Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react';
import { GovrnSpinner } from '@govrn/protocol-ui';

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
      minWidth={{ base: 0, lg: '5rem' }}
      maxWidth={{ base: '100%', lg: '10rem' }}
    >
      <VisuallyHidden>
        <Heading as="h3">{countText}</Heading>
      </VisuallyHidden>
      <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold">
        {countData}
      </Text>
      <Text fontSize="sm">{countText}</Text>
    </Flex>
  );
};

export default CountDisplay;
