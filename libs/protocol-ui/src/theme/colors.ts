export default {
  brand: {
    primary: {
      50: '#FFF6FC',
      100: '#FCE9F5',
      200: '#F9D2EA',
      300: '#F2A5D5',
      400: '#EC79C1',
      500: '#DF1597', // this is the primary value
      600: '#B21979',
      700: '#86135B',
      800: '#590C3C',
      900: '#2D061E',
    },
    secondary: {
      50: '#F8F4FF',
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
    // these are shortcuts -- same as the token.500 value
    magenta: '#DF1F97',
    purple: '#5100E4',
    // the gradients need to use the actual hex value instead of the tokens
    gradient: 'linear-gradient(100deg, #5100E4 0%, #DF1F97 100%)',
    gradientDisabled:
      'linear-gradient(100deg, rgba(81, 0, 228, 0.7) 0%, rgba(223, 31, 151, 0.7) 100%)',
    gradientHover: 'linear-gradient(100deg, #5100E4 0%, #5100E4 100%)', // purple
    gradientFocused: 'linear-gradient(100deg, #9766EF 0%,#9766EF 100%)', // purple.400
    gradientBackground:
      'linear-gradient(49deg, rgba(223,31,151,1) 0%, rgba(81,0,228,1) 100%)',
    gradientBackgroundVariant:
      'linear-gradient(90.33deg, #B200E4 0.29%, #DF1F97 52.82%)',
  },
};
