import colors from './colors';
import Input from './components/input';
import Checkbox from './components/checkbox';
import Table from './components/table';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/variable-full.css';

export const GovrnTheme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        fontFamily: 'InterVariable, -apple-system, system-ui, sans-serif',
      },
    },
  },
  fonts: {
    heading: 'InterVariable, -apple-system, system-ui, sans-serif',
    body: 'InterVariable, -apple-system, system-ui, sans-serif',
  },
  components: { Input, Checkbox, Table },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
