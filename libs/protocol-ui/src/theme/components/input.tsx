export default {
  baseStyle: {},
  variants: {
    filled: {
      field: {
        color: 'gray.700',
        bg: 'white',
        borderRadius: '16px',
        padding: '16px',
        _hover: {
          bg: 'white.300',
        },
      },
    },
    outline: {
      field: {
        bg: 'white',
        _hover: { borderColor: 'gray.300' },
        borderRadius: '16px',
        borderColor: 'gray.200',
        boxShadow: 'xs',
        _placeholder: {
          color: 'gray.500',
        },
      },
    },
  },
};
