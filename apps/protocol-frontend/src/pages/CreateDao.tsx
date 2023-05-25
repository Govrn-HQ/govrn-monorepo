import CreateDaoLayout from '../components/CreateDaoLayout';
import { RequireAuth } from '../utils/requireAuth';

const CreateDao = () => {
  return (
    <RequireAuth>
      <CreateDaoLayout />
    </RequireAuth>
  );
};

export default CreateDao;
