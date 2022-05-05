import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';
import SiteLayout from './components/SiteLayout';

import Routes from './Routes';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={GovrnTheme}>
      <Routes />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
