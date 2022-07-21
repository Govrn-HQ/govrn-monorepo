import {
  HashRouter,
  Route,
  Routes as RouteContainer,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contributions from './pages/Contributions';
import Attestations from './pages/Attestations';
import Report from './pages/Report';
import FourOFour from './pages/404';
import Linear from './pages/Linear';
import RedirectHome from './pages/Redirect';

const RequireActiveUser = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { userData } = useUser();
  const acceptableRoutes = ['/#/linear'];

  if (!userData?.active && !acceptableRoutes.find((r) => location.hash === r)) {
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
        <Route path="/linear" element={<Linear />} />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
