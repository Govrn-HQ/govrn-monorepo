/**
 * Returns the number + the plural form of the countable word.
 *
 * @param countable A **singular** word to be in plural.
 * @param n The total number of items.
 * @param plural Another form of plural if the countable word
 *                have irregular plural form, e.x: criterion -> criteria
 */
const pluralize = (countable: string, n: number, plural?: string): string =>
  n > 1 ? `${n} ${plural ?? `${countable}s`}` : `${n} ${countable}`;

export default pluralize;
