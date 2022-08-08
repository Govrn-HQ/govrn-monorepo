import {
  Box,
  Button,
  Flex,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
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
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '4', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <PageHeading>Contribution Details</PageHeading>
      <Link to="/contributions">
        <Button leftIcon={<FiArrowLeft />} variant="ghost" paddingX="0">
          Contributions
        </Button>
      </Link>
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
        <VStack spacing={4}>
          <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
            {contribution.name}
          </Heading>
          {contribution.details ?? <Text>{contribution.details}</Text>}
        </VStack>
      </Flex>
    </Box>
  );
};

export default ContributionDetailShell;
