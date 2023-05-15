import { parse, formatISO } from 'date-fns';

export const convertToISODate = dateString => {
  const dateFormat = 'dd.MM.yyyy';
  const dateObj = parse(dateString, dateFormat, new Date());
  return formatISO(dateObj);
};

// console.log(convertToISODate('15.05.2023')); // 2023-05-15T00:00:00+03:00
