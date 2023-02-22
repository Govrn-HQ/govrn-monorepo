import { ChakraProvider } from '@chakra-ui/react';
import { GovrnTheme } from '../src/theme/index';

const withThemeProvider = Story => (
  <ChakraProvider theme={GovrnTheme}>
    <Story />
  </ChakraProvider>
);

export const parameters = {
  chakra: {
    theme: GovrnTheme,
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
};

export const decorators = [withThemeProvider];
