import { useAccount } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import CreateDaoLayout from '../components/CreateDaoLayout';

const DaoSettings = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && <CreateDaoLayout />}
    </SiteLayout>
  );
};

export default DaoSettings;
