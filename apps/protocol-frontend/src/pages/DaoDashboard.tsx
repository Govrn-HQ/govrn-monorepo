import { useParams } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import useUserGet from '../hooks/useUserGet';
import DaoDashboardShell from '../components/DaoDashboardShell';
import { LEFT_MEMBERSHIP_NAME } from '../utils/constants';
import { useMemo } from 'react';

const DaoDashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData } = useUser();
  const { data } = useUserGet({ userId: userData?.id });
  const userDaos = data?.userDaos;

  const { guildId } = useParams();
  const currentDao = userDaos?.get(parseInt(guildId ? guildId : ''));

  const isDaoMember = useMemo(() => {
    return currentDao?.membershipStatus?.name !== LEFT_MEMBERSHIP_NAME;
  }, [currentDao]);

  return (
    <SiteLayout>
      {isConnected && isAuthenticated && (
        <DaoDashboardShell
          daoName={currentDao?.guild.name ?? ''}
          daoId={parseInt(guildId ? guildId : '')}
          daoMember={isDaoMember}
        />
      )}
    </SiteLayout>
  );
};

export default DaoDashboard;
