import colors from './colors';
import Input from './components/input';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/700.css';

export const GovrnTheme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: { Input },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
