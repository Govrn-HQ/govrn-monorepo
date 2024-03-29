import { useParams } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import useUserGet from '../hooks/useUserGet';
import DaoDashboardShell from '../components/DaoDashboardShell';
import { useMemo } from 'react';
import { RequireAuth } from '../utils/requireAuth';
import SiteLayout from '../components/SiteLayout';

const DaoDashboard = () => {
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
      <RequireAuth>
        <DaoDashboardShell
          daoName={currentDao?.guild.name ?? ''}
          daoId={parseInt(guildId ? guildId : '')}
          daoMembershipStatus={daoMembershipStatus}
        />
      </RequireAuth>
    </SiteLayout>
  );
};

export default DaoDashboard;
