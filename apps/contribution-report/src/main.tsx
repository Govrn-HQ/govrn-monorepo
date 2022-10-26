import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';

import R from './Routes';

const container = document.getElementById('root');
if (!container) {
  throw Error('Root cannot be found');
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
