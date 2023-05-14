import { Field } from "formik";
import { FormLabel } from "../AddPetForm.styles";
import { DetailsWrapper } from "./PersonalDetails.styles";


const PersonalDetails = ({ option }) => {
    
    
    return (
        <DetailsWrapper>
            {option !== 'my-pet' && (
                <>
                    <FormLabel>Title of add: </FormLabel>
                    <Field name="title" placeholder="Type name pet"/>
                </>)}
            <FormLabel>Name Pet
                <Field name="name" placeholder="Type name pet"/>
            </FormLabel>
            <FormLabel>Date of birth
                <Field name="birth" placeholder="Type date of birth"/>
            </FormLabel>
            <FormLabel>Breed
                <Field name="breed" placeholder="Type breed"/>
            </FormLabel>
        </DetailsWrapper>)
};

export default PersonalDetails;