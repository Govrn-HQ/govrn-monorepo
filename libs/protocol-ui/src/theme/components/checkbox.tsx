export default {
  // defaultProps: {
  //   colorScheme: 'brand.primary',
  // },
  baseStyle: {
    label: {
      color: 'gray.50',
      // fontWeight: 'medium',
    },
    control: {
      borderRadius: 'base',
      borderWidth: '1px solid',
      borderColor: 'gray.200',
      background: 'white',
      _checked: {
        borderRadius: 'base',
        borderWidth: '1px solid',
        borderColor: 'gray.200',
        background: 'gray.200',
        _hover: {
          borderRadius: 'base',
          borderWidth: '1px solid',
          borderColor: 'gray.200',
          background: 'gray.200',
        },
      },
      _hover: {
        borderRadius: 'base',
        borderWidth: '1px solid',
        borderColor: 'gray.200',
      },
      _focus: {
        ring: 0,
      },
    },
    icon: {
      color: 'gray.500',
      background: 'gray.200',
      _checked: {
        background: 'gray.200',
      },
    },
  },
};
