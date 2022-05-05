import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import GovTheme from './theme';

import Routes from './Routes';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={GovTheme}>
      <Routes />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
