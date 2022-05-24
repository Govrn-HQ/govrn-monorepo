import { HashRouter, Route, Routes as RouteContainer } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contributions from './pages/Contributions';
import Attestations from './pages/Attestations';
import Report from './pages/Report';

import FourOFour from './pages/404';

const Routes = () => {
  return (
    <HashRouter>
      <RouteContainer>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/attestations" element={<Attestations />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default Routes;
