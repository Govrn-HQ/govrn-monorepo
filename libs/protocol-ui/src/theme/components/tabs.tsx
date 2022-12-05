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
  'soft-rounded': {
    tab: {
      _selected: {
        fontWeight: 'semibold',
        color: 'white',
        background: 'linear-gradient(100deg, #5100E4 0%, #DF1F97 100%)',
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
