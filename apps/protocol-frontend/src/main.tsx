import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '@govrn/protocol-ui';

import Routes from './Routes';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={GovrnTheme}>
      <Routes />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
