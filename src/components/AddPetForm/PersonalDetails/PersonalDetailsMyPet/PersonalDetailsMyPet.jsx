import { Field } from "formik";
import {PersonalDetailMyPetContainer} from "./PersonalDetailsMyPet.styles";

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

    return (
        <PersonalDetailMyPetContainer>
            <div>
                <label>Name Pet: </label>
                <Field name="petName"
                       id="petName"
                       onChange={handleChange}
                       value={values["petName"]}/>

                <label>Date of birth: </label>
                <Field name="petBirthDate"
                       id="petBirthDate"
                       onChange={handleChange}
                       value={values["petBirthDate"]}/>

                <label>Breed: </label>
                <Field name="petBreed" id="petBreed"
                       onChange={handleChange}
                       value={values["petBreed"]}/>
            </div>
        </PersonalDetailMyPetContainer>
    )
};

export default PersonalDetailsMyPet;
