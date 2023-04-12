import { Box, Heading, Divider, Flex, Text } from '@chakra-ui/react';

export interface GovrnCtaProps {
  heading: string;
  emoji?: string;
  copy?: string | React.ReactNode;
  children?: React.ReactNode;
}

const GovrnCta = ({ heading, emoji, copy, children }: GovrnCtaProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="center"
    background="white"
    boxShadow="sm"
    borderRadius={{ base: 'none', md: 'lg' }}
  >
    <Flex
      direction="row"
      alignItems="baseline"
      fontSize={{ base: 'xl', lg: '3xl' }}
      paddingY="8"
      paddingX={{ base: 8, lg: 0 }}
    >
      {emoji ? (
        <Text
          as="span"
          role="img"
          aria-labelledby="eye emoji for the CTA"
          fontSize="inherit"
        >
          {emoji}&nbsp;
        </Text>
      ) : null}
      <Heading as="h3" fontSize={{ base: '2xl', lg: '3xl' }} fontWeight="600">
        {heading}
      </Heading>
    </Flex>
    <Box paddingBottom={8} fontSize="md" paddingX={{ base: 8, lg: 0 }}>
      {copy}
    </Box>
    {children ? (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingX={8}
        width="100%"
      >
        <Divider color="gray.200" />
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 4, lg: 0 }}
          alignItems="center"
          justifyContent="space-around"
          paddingY={8}
          width="100%"
        >
          {children}
        </Flex>
      </Flex>
    ) : null}
  </Flex>
);

export default GovrnCta;
