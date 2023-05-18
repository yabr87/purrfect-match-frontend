import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns'; 
import { useFormikContext } from 'formik';

const Calendar = ({ name, placeholder, values}) => {
  const { setFieldValue } = useFormikContext();
  const selectedDate = values[name] ? new Date(values[name]) : null;
  const maxDate = addDays(new Date(), 0);

  return (
    <DatePicker
      name={name}
      placeholder={placeholder}
      onChange={(date) => setFieldValue(name, date)}
      selected={selectedDate}
      dateFormat="dd.MM.yyyy"
      maxDate={maxDate}
    />
  );
};

export default Calendar;