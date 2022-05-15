import {
  Container,
  Stack,
  Flex,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import PageHeading from './PageHeading';

import ProfileForm from './ProfileForm';

const ProfileShell = () => {
  return (
    <Box
      paddingY={{ base: '4', md: '8' }}
      paddingX={{ base: '0', md: '8' }}
      color="gray.700"
      maxWidth="1200px"
      width="100%"
    >
      <PageHeading>Profile</PageHeading>
      <Box
        background="white"
        boxShadow="sm"
        borderRadius={useBreakpointValue({ base: 'none', md: 'lg' })}
        width="100%"
      >
        {/* <Stack spacing="4"> */}
        <Flex
          justify="space-between"
          direction="column"
          wrap="wrap"
          // w={['90%', '90%', '60%', '50%', '40%']}

          width="fit-content"
          mb="200px"
          padding={4}
        >
          <ProfileForm />
        </Flex>
        {/* </Stack> */}
      </Box>
    </Box>
  );
};

export default ProfileShell;
