import { format } from 'date-fns';

export const formatNewsDate = date => {
  return format(Date.parse(date), 'dd/MM/yyyy');
};
