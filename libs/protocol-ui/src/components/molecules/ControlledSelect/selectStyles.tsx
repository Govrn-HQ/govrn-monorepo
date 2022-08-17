import { StylesConfig } from 'react-select';

const customSelectStyles: StylesConfig = {
  control: styles => ({
    ...styles,
    borderRadius: '16px',
    border: 'none',
    padding: '8px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
    },
  }),
  option: styles => ({
    ...styles,
  }),
  menu: styles => ({
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
