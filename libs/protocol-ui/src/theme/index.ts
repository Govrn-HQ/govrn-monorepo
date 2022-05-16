import { extendTheme } from '@chakra-ui/react';
export * from '../lib/protocol-ui';
/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Circular Std Book, sans-serif',
        fontSize: 'md',
        color: 'whiteAlpha.900',
      },
      a: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
  components: {},
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
