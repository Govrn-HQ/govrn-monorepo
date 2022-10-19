import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Stack, Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import SiteLayout from '../components/SiteLayout';
import NewUserView from '../components/NewUserView';
import { GOVRN_MOTTO } from '../utils/constants';
import DaoDashboardShell from '../components/DaoDashboardShell';

const DaoDashboard = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();
  const { userData, userDaos } = useUser();
  const { guildId } = useParams();

  const currentDao = userDaos?.find(
    dao => dao.guild_id === parseInt(guildId ? guildId : ''),
  );

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
