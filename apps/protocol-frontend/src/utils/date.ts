import { format } from 'date-fns';
import { isDate } from 'lodash';

export const formatDate = (
  value: string | Date,
  formatting?: string,
  ignoreTimezone?: true,
) => {
  const dateOriginal = new Date(value);
  const dateWithoutTimezone = new Date(
    dateOriginal.valueOf() + dateOriginal.getTimezoneOffset() * 60 * 1000,
  );
  return format(
    new Date(ignoreTimezone === true ? dateWithoutTimezone : dateOriginal),
    formatting ?? 'P',
  );
};

export const toDate = (value: string | Date): Date => {
  return isDate(value) ? value : new Date(value);
};
