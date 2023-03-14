export default {
  baseStyle: {
    transition: 'all 250ms ease-in-out',
    borderRadius: 'md',
    fontSize: 'md',
    fontWeight: 'semibold',
  },
  variants: {
    primary: {
      color: 'white',
      background: 'brand.gradient',
      _hover: {
        background: 'brand.gradientHover',
        _disabled: {
          background: 'brand.gradientDisabled',
        },
      },
      _focus: {
        background: 'brand.gradientFocused',
      },
      _disabled: {
        background: 'brand.gradientDisabled',
      },
    },
    secondary: {
      position: 'relative',
      border: 'double 2px transparent',
      borderRadius: '8px',
      backgroundImage:
        'linear-gradient(white, white), linear-gradient(100deg, #5100E4 0%, #DF1F97 100%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      color: 'brand.purple',
      _disabled: {
        color: 'gray.800',
        border: 'double 2px transparent',
        backgroundImage:
          'linear-gradient(white, white), linear-gradient(100deg, #1A202C 0%,#1A202C 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        _hover: {
          color: 'gray.800',
          border: 'double 2px transparent',
          backgroundImage:
            'linear-gradient(white, white), linear-gradient(100deg, #1A202C 0%,#1A202C 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
      },
      _hover: {
        _disabled: {
          border: 'double 2px transparent',
          color: 'gray.800',
          backgroundImage:
            'linear-gradient(white, white), linear-gradient(100deg, #1A202C 0%,#1A202C 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
      },
      // _hover: {
      //   backgroundImage:
      //     'linear-gradient(white, white), linear-gradient(100deg, #5100E4 0%, #5100E4 100%)',
      // },
      // _focus: {
      //   backgroundImage:
      //     'linear-gradient(white, white), linear-gradient(100deg, #9766EF 0%,#9766EF 100%)',
      // },
    },
    tertiary: {
      color: 'brand.purple',
      background: 'gray.50',
      _hover: {
        opacity: 0.7,
      },
      _focus: {
        color: 'brand.purple',
        background: 'brand.secondary.100',
      },
    },
    disabled: {
      _disabled: {
        bgColor: 'gray.300',
        color: 'gray.800',
      },
      _hover: {
        _disabled: {
          bgColor: 'gray.300',
        },
      },
    },
  },
};
