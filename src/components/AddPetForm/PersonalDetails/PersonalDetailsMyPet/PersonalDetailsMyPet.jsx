import { Field } from "formik";
import {PersonalDetailMyPetContainer} from "./PersonalDetailsMyPet.styles";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const PersonalDetailsMyPet = props => {
  const {
    values,
    handleChange,
    touched,
    errors,
    dirty,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  const handleDateSelection = (name, event) => {
    handleChange({target: {name: name, value: dayjs(event).format('MM/DD/YYYY')}});
  };

    return (
        <PersonalDetailMyPetContainer>
            <div>
                <label>Name Pet: </label>
                <Field name="petName"
                       id="petName"
                       onChange={handleChange}
                       value={values["petName"]}/>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <label>Date of birth: </label>
                  <DesktopDatePicker defaultValue={dayjs('2022-04-17')}
                                     value={values["petBirthDate"]}
                                     onChange={(newValue) => handleDateSelection("petBirthDate", newValue)}/>
                </LocalizationProvider>

                <label>Breed: </label>
                <Field name="petBreed" id="petBreed"
                       onChange={handleChange}
                       value={values["petBreed"]}/>
            </div>
        </PersonalDetailMyPetContainer>
    )
};

export default PersonalDetailsMyPet;
