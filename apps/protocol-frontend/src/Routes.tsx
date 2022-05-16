import { HashRouter, Route, Routes as RouteContainer } from 'react-router-dom';
import App from './pages/App';
import Profile from './pages/Profile';
import Contributions from './pages/Contributions';
import Attestations from './pages/Attestations';

import FourOFour from './pages/404';

const Routes = () => {
  return (
    <HashRouter>
      <RouteContainer>
        <Route path="/home" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/attestations" element={<Attestations />} />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
