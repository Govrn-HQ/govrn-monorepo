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
  softRounded: {
    tab: {
      _selected: {
        color: 'red.600',
        borderColor: 'gray.600',
        bgColor: 'red.200',
        // bgColor: 'linear(to-r, #5100E4 0%, #DF1F97 @ 100%)',
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
