const customSelectThemeColors = (theme: any) => ({
  /*
   * multiValue(remove)/color:hover
   */
  danger: theme.colors.red,

  /*
   * multiValue(remove)/backgroundColor(focused)
   * multiValue(remove)/backgroundColor:hover
   */
  dangerLight: theme.colors.red,

  /*
   * control/backgroundColor
   * menu/backgroundColor
   * option/color(selected)
   */
  neutral0: theme.colors.dark['400'],

  /*
   * control/backgroundColor(disabled)
   */
  neutral5: theme.colors.dark['400'],

  /*
   * control/borderColor(disabled)
   * multiValue/backgroundColor
   * indicators(separator)/backgroundColor(disabled)
   */
  neutral10: theme.colors.dark['600'],

  /*
   * control/borderColor
   * option/color(disabled)
   * indicators/color
   * indicators(separator)/backgroundColor
   * indicators(loading)/color
   */
  neutral20: theme.colors.light['200'],

  /*
   * control/borderColor(focused)
   * control/borderColor:hover
   */
  neutral30: theme.colors.light['400'],

  /*
   * menu(notice)/color
   * singleValue/color(disabled)
   * indicators/color:hover
   */
  neutral40: theme.colors.light['500'],

  /*
   * placeholder/color
   */
  neutral50: theme.colors.light['600'],

  /*
   * indicators/color(focused)
   * indicators(loading)/color(focused)
   */
  neutral60: 'var(--neutral-60)',

  neutral70: 'var(--neutral-70)',

  /*
   * input/color
   * multiValue(label)/color
   * singleValue/color
   * indicators/color(focused)
   * indicators/color:hover(focused)
   */
  neutral80: 'var(--neutral-80)',

  neutral90: 'var(--neutral-90)',

  /*
   * control/boxShadow(focused)
   * control/borderColor(focused)
   * control/borderColor:hover(focused)
   * option/backgroundColor(selected)
   * option/backgroundColor:active(selected)
   */
  //   primary: theme.colors.light['500'],
  primary: theme.colors.cyan['300'],

  /*
   * option/backgroundColor(focused)
   */
  primary25: theme.colors.light['300'],

  /*
   * option/backgroundColor:active
   */
  primary50: theme.colors.dark['400'],

  primary75: theme.colors.dark['400'],
});

export default customSelectThemeColors;
