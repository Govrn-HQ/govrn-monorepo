export default {
  baseStyle: {
    transition: 'all 250ms ease-in-out',
  },
  variants: {
    primary: {
      color: 'white',
      fontSize: 'md',
      fontWeight: 'semibold',
      background: 'brand.gradient',
      _hover: {
        background: 'linear-gradient(100deg, #5100E4 0%, #5100E4 100%)',
        _disabled: {
          background: 'brand.gradientDisabled',
        },
      },
      _focus: {
        background: 'brand.secondary.400',
      },
      _disabled: {
        background: 'brand.gradientDisabled',
      },
    },
    tertiary: {
      color: 'brand.purple',
      background: 'gray.50',
      _hover: {
        opacity: 0.7,
      },
      _focus: {
        color: 'brand.purple',
        background: 'brand.purple.100',
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
