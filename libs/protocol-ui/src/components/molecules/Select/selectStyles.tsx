import { StylesConfig } from 'react-select';

const customSelectStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: '15px',
    border: 'none',
    padding: '8px',
    '&:hover': {
      backgroundColor: 'rgba(42, 41, 50, 1)',
    },
  }),
  option: (styles) => ({
    ...styles,
  }),
  menu: (styles) => ({
    ...styles,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
    };
  },
};

export default customSelectStyles;
