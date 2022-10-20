import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import DaoDashboardShell from '../components/DaoDashboardShell';

const DaoDashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData, userDaos } = useUser();
  const { guildId } = useParams();

  const currentDao = userDaos?.get(parseInt(guildId ? guildId : ''));

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && (
        <DaoDashboardShell
          user={userData}
          daoName={currentDao?.guild.name ?? ''}
        />
      )}
    </SiteLayout>
  );
};

export default DaoDashboard;
