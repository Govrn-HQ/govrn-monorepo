import CreateDaoLayout from '../components/CreateDaoLayout';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const CreateDao = () => {
  return (
    <SiteLayout>
      <RequireAuth>
        <CreateDaoLayout />
      </RequireAuth>
    </SiteLayout>
  );
};

export default CreateDao;
