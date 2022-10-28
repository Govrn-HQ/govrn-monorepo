import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import GovTheme from '@govrn/protocol-ui';

import R from './Routes';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

if (!container) {
  throw Error('Container element missing');
}

const root = createRoot(container);

/// New string
root.render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <R />
    </SnackbarProvider>
  </StrictMode>,
);
