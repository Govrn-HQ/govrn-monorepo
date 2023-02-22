import { Heading, Divider, Flex, Text } from '@chakra-ui/react';

export interface GovrnCtaProps {
  heading: string;
  emoji?: string;
  copy?: string;
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
    <Flex direction="row" alignItems="baseline" fontSize="3xl" paddingY={8}>
      {emoji ? (
        <Text
          as="span"
          role="img"
          aria-labelledby="eye emoji for the CTA"
          fontSize="inherit"
        >
          {emoji}
        </Text>
      ) : null}
      <Heading as="h3" fontSize="3xl" fontWeight="600">
        {heading}
      </Heading>
    </Flex>
    <Text paddingBottom={8} fontSize="md">
      {copy}
    </Text>
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
          direction="row"
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
