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
import Report from './pages/Report';
import FourOFour from './pages/404';
import RedirectHome from './pages/Redirect';
import ContributionDetail from './pages/ContributionDetail';
import ErrorView from './components/ErrorView';

const RequireActiveUser = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isAuthenticated, checkExistingCreds } = useAuth();

  if (!isAuthenticated && checkExistingCreds) {
    return <Navigate to="/authenticate" state={{ from: location }} replace />;
  }

  return children;
};

const RequireDaoUser = ({ children }: { children: JSX.Element }) => {
  const { isUserDaoMember } = useUser();
  const { guildId } = useParams();
  if (guildId) {
    if (isUserDaoMember(guildId) === false) {
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
  const { userDaos } = useUser();
  const [firstDao] = userDaos.values();

  return (
    <HashRouter>
      <RouteContainer>
        <Route path="/authenticate" element={<RedirectHome />} />
        <Route path="/" element={<Home />} />
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
        <Route
          path="/report"
          element={
            <RequireActiveUser>
              <Report />
            </RequireActiveUser>
          }
        />
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
              <Navigate replace to={`/dao/${firstDao.guild_id}`} />
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
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
