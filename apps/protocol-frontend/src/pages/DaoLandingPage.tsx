import { useAccount } from 'wagmi';
import { useAuth } from '../contexts/AuthContext';
import { Box } from '@chakra-ui/react';
import SiteLayout from '../components/SiteLayout';

const DaoLandingPage = () => {
  const { isConnected } = useAccount();
  const { isAuthenticated } = useAuth();

  return (
    <SiteLayout>{isConnected && isAuthenticated && <Box>Test</Box>}</SiteLayout>
  );
};

export default DaoLandingPage;
