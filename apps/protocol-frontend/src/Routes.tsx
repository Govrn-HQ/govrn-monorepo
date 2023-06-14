import {
  HashRouter,
  Route,
  Routes as RouteContainer,
  Navigate,
} from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contributions from './pages/Contributions';
import Attestations from './pages/Attestations';
import Dashboard from './pages/Dashboard';
import DaoLandingPage from './pages/DaoLandingPage';
import DaoDashboard from './pages/DaoDashboard';
import DaoSettings from './pages/DaoSettings';
import Report from './pages/Report';
import FourOFour from './pages/404';
import RedirectHome from './pages/Redirect';
import ContributionDetail from './pages/ContributionDetail';
import CreateDao from './pages/CreateDao';
import useUserGet from './hooks/useUserGet';
import DiscordSignatureLayout from './components/DiscordSignatureLayout';
import {
  CONTRIBUTION_NEW_DOMAIN,
  CONTRIBUTION_NEW_STAGING_DOMAIN,
  MembershipStatusesNames,
} from './utils/constants';

const Routes = () => {
  const { userData } = useUser();
  const { data } = useUserGet({ userId: userData?.id });
  const userDaos = data?.userDaos;
  const url = new URL(window.location.href);
  const userDaosFilter = new Map();
  userDaos?.forEach(dao => {
    if (dao?.membershipStatus.name !== MembershipStatusesNames.Left) {
      userDaosFilter.set(dao.guild_id, dao);
    }
  });

  return (
    <HashRouter>
      <RouteContainer>
        <Route path="/authenticate" element={<RedirectHome />} />
        <Route
          path="/"
          element={
            url.host === CONTRIBUTION_NEW_DOMAIN ||
            url.host === CONTRIBUTION_NEW_STAGING_DOMAIN ? (
              <Navigate replace to="/report" />
            ) : (
              <Home />
            )
          }
        />
        <Route path="/signature" element={<DiscordSignatureLayout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/contributions/:id" element={<ContributionDetail />} />
        <Route path="/attestations" element={<Attestations />} />
        <Route path="/report" element={<Report />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dao"
          element={
            userDaosFilter && userDaosFilter?.size > 0 ? (
              <Navigate
                replace
                to={`/dao/${userDaosFilter?.values().next().value?.guild_id}`}
              />
            ) : (
              <DaoLandingPage />
            )
          }
        />
        <Route path="/dao/:guildId" element={<DaoDashboard />} />
        <Route path="/dao/:guildId/settings" element={<DaoSettings />} />
        <Route path="/dao/create" element={<CreateDao />} />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
