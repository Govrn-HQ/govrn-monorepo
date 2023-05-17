import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import useUserGet from '../hooks/useUserGet';
import DaoDashboardShell from '../components/DaoDashboardShell';
import { useMemo } from 'react';

const DaoDashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData } = useUser();
  const { data } = useUserGet({ userId: userData?.id });
  const userDaos = data?.userDaos;

  const { guildId } = useParams();
  const currentDao = userDaos?.get(parseInt(guildId ? guildId : ''));

  const daoMembershipStatus = useMemo(() => {
    return currentDao?.membershipStatus?.name;
  }, [currentDao]);

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && (
        <DaoDashboardShell
          daoName={currentDao?.guild.name ?? ''}
          daoId={parseInt(guildId ? guildId : '')}
          daoMembershipStatus={daoMembershipStatus}
        />
      )}
    </SiteLayout>
  );
};

export default DaoDashboard;
