import { Field } from "formik";

const PersonalDetailsMyPet = () => {
    
    
    return (
    <div>
        <label>Name Pet: </label>
        <Field name="petName" id="petName" />

        <label>Date of birth: </label>
        <Field name="dateOfBirth" id="dateOfBirth" />

        <label>Breed: </label>
        <Field name="breed" id="breed" />
    </div>)
};

export default PersonalDetailsMyPet;