import { Field } from "formik";
import {PersonalDetailMyPetContainer} from "./PersonalDetailsMyPet.styles";
const PersonalDetailsMyPet = () => {


    return (
        <PersonalDetailMyPetContainer>
            <div>
                <label>Name Pet: </label>
                <Field name="petName" id="petName" />

                <label>Date of birth: </label>
                <Field name="dateOfBirth" id="dateOfBirth" />

                <label>Breed: </label>
                <Field name="breed" id="breed" />
            </div>
        </PersonalDetailMyPetContainer>
    )
};

export default PersonalDetailsMyPet;
