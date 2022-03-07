import { HashRouter, Route, Routes as RouteContainer } from 'react-router-dom';

import App from './pages/App';
import FourOFour from './pages/404';

const R = () => {
  return (
    <HashRouter>
      <RouteContainer>
        <Route path="/contribution/:guild_id" element={<App />} />
        <Route path="*" element={<FourOFour />} />
      </RouteContainer>
    </HashRouter>
  );
};

export default R;
