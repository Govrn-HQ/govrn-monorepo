export default {
  baseStyle: {},
  variants: {
    filled: {
      field: {
        bg: 'gray.100',
        borderRadius: '16px',
        padding: '16px',
        _hover: {
          bg: 'white.300',
        },
      },
    },
    outline: {
      field: {
        bg: 'white.400',
        borderRadius: '16px',
        borderColor: 'brand.100',
        p: '16px',
        _hover: {
          bg: 'white.300',
        },
      },
    },
  },
};
