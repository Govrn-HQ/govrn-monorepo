import { Container, Box, Stack, Text } from '@chakra-ui/react';
import SiteLayout from '../components/SiteLayout';
import { GOVRN_MOTTO } from '../utils/constants';

const DaoDashboardShell = () => (
  <SiteLayout>
    <Container
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <Box
        background="white"
        boxShadow="sm"
        borderRadius={{ base: 'none', md: 'lg' }}
      >
        <Stack spacing="4" justify="center" align="center" minHeight="50vh">
          <Text>{GOVRN_MOTTO}</Text>
          <Text fontSize="lg" fontWeight="medium">
            DAO Dashboard
          </Text>
        </Stack>
      </Box>
    </Container>
  </SiteLayout>
);

export default DaoDashboardShell;
