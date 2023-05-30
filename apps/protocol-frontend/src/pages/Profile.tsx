import ProfileShell from '../components/ProfileShell';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const Profile = () => {
  return (
    <SiteLayout>
      <RequireAuth>
        <ProfileShell />
      </RequireAuth>
    </SiteLayout>
  );
};

export default Profile;
