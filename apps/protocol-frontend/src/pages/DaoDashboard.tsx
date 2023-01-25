import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import DaoDashboardShell from '../components/DaoDashboardShell';

const DaoDashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userDaos } = useUser();
  const { guildId } = useParams();

  console.log('user daos', userDaos);
  const currentDao = userDaos?.get(parseInt(guildId ? guildId : ''));

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && (
        <DaoDashboardShell
          daoName={currentDao?.guild.name ?? ''}
          daoId={parseInt(guildId ? guildId : '')}
        />
      )}
    </SiteLayout>
  );
};

export default DaoDashboard;
