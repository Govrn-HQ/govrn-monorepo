import ProfileShell from '../components/ProfileShell';
import { RequireAuth } from '../utils/requireAuth';

const Profile = () => {
  return (
    <RequireAuth>
      <ProfileShell />
    </RequireAuth>
  );
};

export default Profile;
