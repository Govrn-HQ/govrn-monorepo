import React from 'react';
import { Heading } from '@chakra-ui/react';
import SiteLayout from '../components/SiteLayout';
import ProfileShell from '../components/ProfileShell';

const Profile = () => {
  return (
    <SiteLayout>
      <ProfileShell />
    </SiteLayout>
  );
};

export default Profile;
