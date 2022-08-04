import { Box } from '@chakra-ui/react';
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
    </Box>
  );
};

export default ContributionDetailShell;
