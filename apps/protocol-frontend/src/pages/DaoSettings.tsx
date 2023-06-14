import DaoSettingsLayout from '../components/DaoSettingsLayout';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const DaoSettings = () => {
  return (
    <SiteLayout>
      <RequireAuth>
        <DaoSettingsLayout />
      </RequireAuth>
    </SiteLayout>
  );
};

export default DaoSettings;
