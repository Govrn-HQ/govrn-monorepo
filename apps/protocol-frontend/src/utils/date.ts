import { format } from 'date-fns';

export const formatDate = (date: string, formatting?: string) => {
  return format(new Date(date), formatting ?? 'P');
};
