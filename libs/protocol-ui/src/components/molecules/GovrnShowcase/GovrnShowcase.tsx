import { Flex, Text } from '@chakra-ui/react';

export interface GovrnShowcaseProps {
  copy: string;
  emoji?: string;
  children: React.ReactNode;
}

const GovrnShowcase = ({ copy, emoji, children }: GovrnShowcaseProps) => (
  <Flex
    direction="row"
    alignItems="center"
    justifyContent="center"
    background="white"
    boxShadow="sm"
    borderRadius={{ base: 'none', md: 'lg' }}
    padding={10}
  >
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        fontWeight="600"
        fontSize="xl"
        width="100%"
        flexBasis="30%"
      >
        <Text>{copy}</Text>
      </Flex>
      {emoji ? (
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="center"
          width="100%"
          flexBasis="30%"
        >
          <Text
            as="span"
            role="img"
            aria-labelledby="emoji for the showcase"
            fontSize="3xl"
          >
            {emoji}
          </Text>
        </Flex>
      ) : null}
      <Flex
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        width="100%"
        flexBasis="30%"
        gap={10}
      >
        {children}
      </Flex>
    </Flex>
  </Flex>
);

export default GovrnShowcase;
