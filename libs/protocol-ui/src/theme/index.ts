import colors from './colors';
import Input from './components/input';
import { extendTheme } from '@chakra-ui/react';

export const GovrnTheme = extendTheme({
  colors,
  styles: {},
  components: { Input },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
