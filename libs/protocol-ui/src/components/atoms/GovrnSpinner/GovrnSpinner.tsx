import { Flex, Spinner } from '@chakra-ui/react';

const GovrnSpinner = () => {
  return (
    <Flex
      padding={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Spinner
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.100"
        color="brand.primary.300"
        size="lg"
      />
    </Flex>
  );
};

export default GovrnSpinner;
