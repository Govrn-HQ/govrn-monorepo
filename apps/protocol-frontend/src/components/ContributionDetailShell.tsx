import { Box, Flex, Heading } from '@chakra-ui/react';
import { UIContribution } from '@govrn/ui-types';
import PageHeading from './PageHeading';

interface ContributionDetailShellProps {
  contribution: UIContribution;
}

const ContributionDetailShell = ({
  contribution,
}: ContributionDetailShellProps) => {
  console.log('contribution in shell', contribution);
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <PageHeading>Contribution Details</PageHeading>
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
        <Heading as="h3" size="md" fontWeight="medium" color="gray.700">
          {contribution.name}
        </Heading>
      </Flex>
    </Box>
  );
};

export default ContributionDetailShell;
