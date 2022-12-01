import { extendTheme } from '@chakra-ui/react';

const GovTheme = extendTheme({
  styles: {},
  colors: {
    brand: {
      primary: {
        50: '#ffe4f9',
        100: '#ffb4e2',
        200: '#fb84ce',
        300: '#f854ba',
        400: '#f526a6',
        500: '#db0f8d', // this is the primary value
        600: '#ab076d',
        700: '#7b024e',
        800: '#4b0030',
        900: '#1d0013',
      },
      brand: {
        secondary: {
          50: '#ffe4f9',
          100: '#EEE6FC',
          200: '#DCCCFA',
          300: '#B999F4',
          400: '#9766EF',
          500: '#5100E4', // this is the primary value
          600: '#4100B6',
          700: '#20005B',
          800: '#20005B',
          900: '#10002E',
        },
      },
    },
    magenta: '#db0f8d',
    purple: '#5100E4',
  },
  components: {},
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default GovTheme;
