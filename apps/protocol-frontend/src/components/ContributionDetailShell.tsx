import {
  Box,
  Button,
  Flex,
  Stack,
  VStack,
  HStack,
  Badge,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { UIContribution } from '@govrn/ui-types';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import PageHeading from './PageHeading';

interface ContributionDetailShellProps {
  contribution: UIContribution;
}

const ContributionDetailShell = ({
  contribution,
}: ContributionDetailShellProps) => {
  console.log('contribution', contribution);
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      maxWidth="900px"
      width="100%"
    >
      <PageHeading>Contribution Details</PageHeading>
      <Flex direction="column" paddingBottom={4}>
        <Link to="/contributions">
          <Button leftIcon={<FiArrowLeft />} variant="ghost" paddingX="0">
            Contributions
          </Button>
        </Link>
      </Flex>
      <Flex
        justify="space-between"
        direction="column"
        wrap="wrap"
        width="100%"
        paddingX={4}
        paddingTop={4}
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
        marginBottom={4}
      >
        <Flex direction="column" gap={4}>
          <Flex direction={{ base: 'column' }} gap={2}>
            <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
              {contribution.name}
            </Heading>
            <Flex
              direction="row"
              justifyContent={{ base: 'space-between' }}
              flexBasis={{ base: '100%', lg: '50%' }}
            >
              <Badge colorScheme="cyan" variant="subtle" paddingTop={1}>
                {contribution.status.name === 'minted'
                  ? `${contribution.status.name} 🌞`
                  : `${contribution.status.name} 👀`}
              </Badge>
              <Text fontSize="sm" color="gray.600">
                {contribution.date_of_engagement}
              </Text>
            </Flex>
          </Flex>
          {contribution.details && <Text>{contribution.details}</Text>}
          {contribution.proof && (
            <ChakraLink href={contribution.proof} isExternal>
              View Proof <ExternalLinkIcon mx="2px" />
            </ChakraLink>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContributionDetailShell;
