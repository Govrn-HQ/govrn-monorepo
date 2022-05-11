import {
  Container,
  Stack,
  HStack,
  Text,
  Box,
  Heading,
  useBreakpointValue,
  useColorModeValue,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { useTable, useSortBy } from 'react-table';
import ContributionsTable from './ContributionsTable';
import { mockContributions } from '../utils/mockData';

const ProfileShell = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
    >
      <PageHeading>Profile</PageHeading>
      <Box
        background="white"
        boxShadow="sm"
        borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
      >
        <Stack spacing="5">
          <Box paddingX={{ base: '4', md: '6' }} paddingTop="5">
            {/* <Stack
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
            >
              <Text fontSize="lg" fontWeight="medium">
                My Contributions
              </Text>
              <Button
                bgColor="brand.primary.50"
                color="brand.primary.600"
                transition="all 100ms ease-in-out"
                _hover={{ bgColor: 'brand.primary.100' }}
                flexBasis="10%"
                colorScheme="brand.primary"
              >
                Mint
              </Button>
            </Stack> */}
          </Box>
          <Box overflowX="auto"></Box>
          <Box px={{ base: '4', md: '6' }} pb="5"></Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProfileShell;
