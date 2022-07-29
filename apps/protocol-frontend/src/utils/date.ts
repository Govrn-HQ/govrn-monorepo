import { format } from 'date-fns';

export const formatDate = (date: string | Date, formatting?: string) => {
  return format(new Date(date), formatting ?? 'P');
};
