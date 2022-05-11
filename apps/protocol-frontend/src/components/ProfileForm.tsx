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
import { yupResolver } from '@hookform/resolvers/yup';
import { profileFormValidation } from '../utils/validations';

const submitProfile = async (values: any) => {
  try {
    console.log('submitProfile', values);
  } catch (error) {
    console.log(error);
  }
};

const ProfileForm = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const localForm = useForm({
    mode: 'all',
    resolver: yupResolver(profileFormValidation),
  });
  const { handleSubmit, setValue, getValues } = localForm;

  return (
    <Stack spacing="4" width="100%">
      <form onSubmit={handleSubmit(submitProfile)}>
        <Input
          name="userEmail"
          label="Email Address"
          tip="Enter your Email address to link to the Linear integration."
          placeholder="user@govrn.io"
          localForm={localForm}
        />
        <Flex align="flex-end" marginTop={4}>
          <Button
            type="submit"
            width="100%"
            color="brand.primary.600"
            backgroundColor="brand.primary.50"
            transition="all 100ms ease-in-out"
            _hover={{ bgColor: 'brand.primary.100' }}
          >
            Save
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};

export default ProfileForm;
