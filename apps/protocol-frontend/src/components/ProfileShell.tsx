import {
  Container,
  Stack,
  Flex,
  Text,
  Box,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { useTable, useSortBy } from 'react-table';
import ContributionsTable from './ContributionsTable';
import { mockContributions } from '../utils/mockData';
import { Input } from '@govrn/protocol-ui';
import { useForm } from 'react-hook-form';

const ProfileShell = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const localForm = useForm({
    mode: 'all',
  });
  const { handleSubmit, setValue, getValues } = localForm;
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
            <Text fontSize="lg" fontWeight="medium">
              Connect Email Address
            </Text>
          </Box>
          <Flex
            as="form"
            justify="space-between"
            direction="column"
            wrap="wrap"
            onSubmit={handleSubmit((values) => console.log('values', values))}
            w={['90%', '90%', '60%', '50%', '40%']}
            mb="200px"
          >
            <Input
              name="userEmail"
              label="Email Address"
              tip="Enter your Email address to link to the Linear integration."
              localForm={localForm}
            />
          </Flex>
          <Flex align="flex-end" mt="15px">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProfileShell;
