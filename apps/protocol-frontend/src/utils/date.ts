import { format } from 'date-fns';

export const formatDate = (
  date: string | Date,
  formatting?: string,
  ignoreTimezone?: true,
) => {
  const dateOriginal = new Date(date);
  const dateWithoutTimezone = new Date(
    dateOriginal.valueOf() + dateOriginal.getTimezoneOffset() * 60 * 1000,
  );
  return format(
    new Date(ignoreTimezone === true ? dateWithoutTimezone : dateOriginal),
    formatting ?? 'P',
  );
};
