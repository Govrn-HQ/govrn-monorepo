import { Box, Stack, Text } from '@chakra-ui/react';

const EmptyImports = () => {
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
              No Imports Yet!{' '}
              <span
                role="img"
                aria-labelledby="eyes emoji showcasing that there are no guild imports yet"
              >
                👀
              </span>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default EmptyImports;
