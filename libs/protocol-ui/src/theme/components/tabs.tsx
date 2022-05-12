const baseStyle = {
  tab: {
    fontWeight: 'medium',
    color: 'gray.600',
    _focus: {
      boxShadow: 'none',
    },
    _focusVisible: {
      boxShadow: 'base',
    },
  },
};

const variants = {
  line: {
    tab: {
      _selected: {
        color: 'gray.600',
        borderColor: 'gray.600',
      },
      _active: {
        bg: 'transparent',
      },
    },
  },
  enclosed: {
    tab: {
      _selected: {
        color: 'gray.600',
        borderColor: 'gray.600',
      },
    },
  },
};

const sizes = {
  md: {
    tab: {
      fontSize: 'sm',
    },
  },
};

export default { baseStyle, variants, sizes };
