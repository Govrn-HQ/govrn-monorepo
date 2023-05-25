import DaoSettingsLayout from '../components/DaoSettingsLayout';
import { RequireAuth } from '../utils/requireAuth';

const DaoSettings = () => {
  return (
    <RequireAuth>
      <DaoSettingsLayout />
    </RequireAuth>
  );
};

export default DaoSettings;
