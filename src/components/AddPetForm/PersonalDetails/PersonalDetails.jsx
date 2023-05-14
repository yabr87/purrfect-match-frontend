import { Field } from "formik";


const PersonalDetails = ({option}) => {
    
    
    return (        
        <>
            {option === 'my-pet' && (
                <>
                <label>Title of add: </label>
                    <Field name="titleOfAdd" id="titleOfAdd" />
                </>)}
        <label>Name Pet: </label>
        <Field name="petName" id="petName" />

        <label>Date of birth: </label>
        <Field name="dateOfBirth" id="dateOfBirth" />

        <label>Breed: </label>
        <Field name="breed" id="breed" />
    </>)
};

export default PersonalDetails;