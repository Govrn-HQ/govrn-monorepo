import { useAccount } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import DaoSettingsLayout from '../components/DaoSettingsLayout';

const DaoSettings = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && <DaoSettingsLayout />}
    </SiteLayout>
  );
};

export default DaoSettings;
