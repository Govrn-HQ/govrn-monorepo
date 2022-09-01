import { useAccount } from 'wagmi';
import {
  HashRouter,
  Route,
  Routes as RouteContainer,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contributions from './pages/Contributions';
import Attestations from './pages/Attestations';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import FourOFour from './pages/404';
import RedirectHome from './pages/Redirect';
import ContributionDetail from './pages/ContributionDetail';

const RequireActiveUser = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isAuthenticated, checkExistingCreds } = useAuth();

  if (!isAuthenticated && checkExistingCreds) {
    return <Navigate to="/authenticate" state={{ from: location }} replace />;
  }

  return children;
};

const Routes = () => {
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
          path="/feature/dashboard"
          element={
            <RequireActiveUser>
              <Dashboard />
            </RequireActiveUser>
          }
        />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
