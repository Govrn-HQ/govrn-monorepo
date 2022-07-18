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

const RequireActiveUser = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { userData } = useUser();

  if (!userData?.active) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const Routes = () => {
  return (
    <HashRouter>
      <RouteContainer>
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
            // <RequireActiveUser>
            <Contributions />
            // </RequireActiveUser>
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
