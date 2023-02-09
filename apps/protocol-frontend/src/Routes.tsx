import {
  HashRouter,
  Route,
  Routes as RouteContainer,
  Navigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
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
import Signature from './pages/Signature';
import ContributionDetail from './pages/ContributionDetail';
import CreateDao from './pages/CreateDao';
import ErrorView from './components/ErrorView';
import useUserGet from './hooks/useUserGet';
import { useAccount } from 'wagmi';
import {
  CONTRIBUTION_NEW_DOMAIN,
  CONTRIBUTION_NEW_STAGING_DOMAIN,
} from './utils/constants';

const RequireActiveUser = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isAuthenticated, checkExistingCreds } = useAuth();
  const { isConnected } = useAccount();

  if (!isAuthenticated && checkExistingCreds) {
    return <Navigate to="/authenticate" state={{ from: location }} replace />;
  }
  if (!isConnected) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const RequireConnectedUser = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isAuthenticated, checkExistingCreds } = useAuth();
  const { isConnected } = useAccount();

  if (!isAuthenticated && checkExistingCreds) {
    return <Navigate to="/authenticate" state={{ from: location }} replace />;
  }
  if (!isConnected) {
    return <Navigate to="/signature" state={{ from: location }} replace />;
  }
  return children;
};

const RequireDaoUser = ({ children }: { children: JSX.Element }) => {
  const { guildId } = useParams();
  const { userData } = useUser();
  const { data } = useUserGet({ userId: userData?.id });
  if (guildId) {
    if (data?.userDaos && data?.userDaos.has(parseInt(guildId)) === false) {
      return (
        <ErrorView
          errorMessage="You have to be a member of this DAO to view the DAO Dashboard."
          includeMotto={false}
        />
      );
    }
  }
  return children;
};

const Routes = () => {
  const { userData } = useUser();
  const { data } = useUserGet({ userId: userData?.id });
  const userDaos = data?.userDaos;
  const url = new URL(window.location.href);

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
        <Route
          path="/signature"
          element={
            // <RequireConnectedUser>
            <Signature />
            // </RequireConnectedUser>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireActiveUser>
              <Profile />
            </RequireActiveUser>
          }
        />
        <Route
          path="/contributions"
          element={
            <RequireActiveUser>
              <Contributions />
            </RequireActiveUser>
          }
        />
        <Route path="/contributions/:id" element={<ContributionDetail />} />
        <Route
          path="/attestations"
          element={
            <RequireActiveUser>
              <Attestations />
            </RequireActiveUser>
          }
        />
        <Route path="/report" element={<Report />} />
        <Route
          path="/dashboard"
          element={
            <RequireActiveUser>
              <Dashboard />
            </RequireActiveUser>
          }
        />
        <Route
          path="/dao"
          element={
            userDaos && userDaos?.size > 0 ? (
              <Navigate
                replace
                to={`/dao/${userDaos?.values().next().value}`}
              />
            ) : (
              <RequireActiveUser>
                <DaoLandingPage />
              </RequireActiveUser>
            )
          }
        />
        <Route
          path="/dao/:guildId"
          element={
            <RequireActiveUser>
              <RequireDaoUser>
                <DaoDashboard />
              </RequireDaoUser>
            </RequireActiveUser>
          }
        />
        <Route
          path="/dao/:guildId/settings"
          element={
            <RequireActiveUser>
              <DaoSettings />
            </RequireActiveUser>
          }
        />
        <Route
          path="/dao/create"
          element={
            <RequireActiveUser>
              <CreateDao />
            </RequireActiveUser>
          }
        />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
