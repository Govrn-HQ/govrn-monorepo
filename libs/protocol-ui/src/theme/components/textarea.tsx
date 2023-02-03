export default {
  baseStyle: {},
  variants: {
    filled: {
      color: [null, 'gray.700'],
      bg: ['gray.300', 'white'],
      borderRadius: '16px',
      padding: '16px',
      _hover: {
        bg: [null, 'dark.200'],
      },
    },
    outline: {
      padding: '16px',
      borderRadius: '8px',
      bg: ['white', 'white'],
      color: ['gray.700', 'gray.700'],
      borderColor: ['gray.400', 'gray.400'],
      borderWidth: '1px',
      _hover: { borderColor: ['gray.300', 'gray.300'] },
      _focus: {
        borderColor: ['gray.300', 'gray.300'],
        boxShadow: ['xs', 'xs'],
      },
      field: {
        bg: ['white', 'gray.900'],
        color: ['gray.700', 'gray.700'],
        _hover: { borderColor: 'gray.300' },
        borderRadius: '16px',
        borderColor: 'gray.200',
        boxShadow: 'xs',
      },
      _placeholder: {
        color: 'gray.500',
      },
    },
  },
};
