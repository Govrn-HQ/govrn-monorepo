import { Box } from '@chakra-ui/react';
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

      <ProfileForm />
    </Box>
  );
};

export default ProfileShell;
