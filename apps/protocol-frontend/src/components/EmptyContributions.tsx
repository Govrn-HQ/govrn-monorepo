import { Link, useLocation } from 'react-router-dom';
import { Box, Stack, Text, Button } from '@chakra-ui/react';

const EmptyContributions = () => {
  const location = useLocation();

  return (
    <Box
      background="white"
      boxShadow="sm"
      borderRadius={{ base: 'none', md: 'lg' }}
    >
      <Stack spacing="5">
        <Box paddingX={{ base: '4', md: '6' }} width="fit-content" paddingY={4}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing="4"
            justify="space-between"
            align="center"
          >
            <Text fontSize="lg" fontWeight="medium">
              No Contributions Yet!{' '}
              <span
                role="img"
                aria-labelledby="eyes emoji showcasing that there are not any Contributions submitted yet"
              >
                👀
              </span>
            </Text>
          </Stack>
          <Stack direction="column" spacing="4">
            {location.pathname.includes('/attestations') ? (
              <Text fontSize="sm" fontWeight="medium" color="gray.500">
                You need to add a Contribution before you can make an
                Attestation
              </Text>
            ) : null}
            <Text fontSize="sm" fontWeight="medium" color="gray.500">
              Get started by adding your first Contribution. Click the button
              below or the "+" in the bottom right corner of the page.
            </Text>
            <Link to="/report">
              <Button
                size="md"
                bgColor="brand.primary.50"
                color="brand.primary.600"
                transition="all 100ms ease-in-out"
                _hover={{ bgColor: 'brand.primary.100' }}
                colorScheme="brand.primary"
                data-cy="reportFirstContribution-btn"
              >
                Report a Contribution
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default EmptyContributions;
