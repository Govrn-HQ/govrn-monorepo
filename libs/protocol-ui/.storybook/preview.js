import { ChakraProvider } from '@chakra-ui/react';
import GovrnTheme from '../src/theme/index';

const withThemeProvider = (Story, context) => (
  <ChakraProvider theme={GovrnTheme}>
    <Story {...context} />
  </ChakraProvider>
);

export const parameters = {
  chakra: {
    GovrnTheme,
  },
};

export const decorators = [withThemeProvider];
