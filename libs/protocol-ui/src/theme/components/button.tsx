export default {
  baseStyle: {
    transition: 'all 250ms ease-in-out',
    borderRadius: 'md',
  },
  variants: {
    primary: {
      color: 'white',
      fontSize: 'md',
      fontWeight: 'semibold',
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
      border: 'solid 5px transparent',
      borderImageSource: 'linear-gradient(100deg, #5100E4 0%, #DF1F97 100%)',
      borderImageSlice: 1,
      background:
        'linear-gradient(transparent, transparent), linear-gradient(transparent, transparent), linear-gradient(to right, #5100E4 0%, #DF1F97 100%) padding-box',
      color: 'transparent',
      backgroundClip: 'text',
      borderRadius: 'md',

      // padding: 10px;
      // border: 5px solid transparent;
      // border-radius: 15px;
      // display: inline-block;
      // margin: 75px 0;
      // mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
      // maskComposite: 'exclude',
      // _hover: {
      //   borderImageSource: 'brand.gradientHover',
      //   background: 'brand.gradientHover',
      //   _disabled: {
      //     borderImageSource: 'brand.gradientDisabled',
      //     background: 'brand.gradientDisabled',
      //   },
      // },
      // _focus: {
      //   background: 'brand.gradientFocused',
      // },
      // _disabled: {
      //   background: 'brand.gradientDisabled',
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
