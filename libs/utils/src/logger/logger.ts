const LCERROR = '\x1b[31m%s\x1b[0m'; //red
const LCWARN = '\x1b[33m%s\x1b[0m'; //yellow
const LCINFO = '\x1b[36m%s\x1b[0m'; //cyan
const LCSUCCESS = '\x1b[32m%s\x1b[0m'; //green

// TODO: add levels to control production & dev.
//  or find better library.
export const Logger = class {
  /**
   * This is Equivalent to `console.error()` but prints in red
   *
   * **Note**: This function receives the same parameters as `console.error()`
   */
  static error(message, ...optionalParams) {
    console.error(LCERROR, message, ...optionalParams);
  }

  /**
   * This is Equivalent to `console.warn()` but prints in yellow.
   *
   * **Note**: This function receives the same parameters as `console.warn()`
   */
  static warn(message, ...optionalParams) {
    console.warn(LCWARN, message, ...optionalParams);
  }

  /**
   * This is Equivalent to `console.info()` but prints in cyan.
   *
   * **Note**: This function receives the same parameters as `console.info()`
   */
  static info(message, ...optionalParams) {
    console.info(LCINFO, message, ...optionalParams);
  }

  /**
   * This is Equivalent to `console.info()` but prints in green.
   *
   * **Note**: This function receives the same parameters as `console.info()`
   */
  static success(message, ...optionalParams) {
    console.info(LCSUCCESS, message, ...optionalParams);
  }
};
