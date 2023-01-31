export default {
  baseStyle: {
    borderRadius: 'md',
    padding: '0px',
  },
  variants: {
    filled: {
      field: {
        color: 'gray.700',
        bg: 'white',
        _hover: {
          bg: 'white.300',
        },
      },
    },
    outline: {
      field: {
        bg: 'white',
        _hover: { borderColor: 'gray.300' },
        _focus: {
          boxShadow: ['xs', 'xs'],
          borderColor: ['gray.500', 'gray.500'],
        },
        borderColor: 'gray.400',
        boxShadow: 'xs',
        _placeholder: {
          color: 'gray.500',
        },
      },
    },
  },
};
