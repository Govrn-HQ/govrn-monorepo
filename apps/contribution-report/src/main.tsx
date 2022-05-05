import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import GovTheme from '@govrn/protocol-ui';

import R from './Routes';

ReactDOM.render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <R />
    </SnackbarProvider>
  </StrictMode>,
  document.getElementById('root')
);
