import { Field } from "formik";
import ImageUploader from "../../../../shared/components/ImageUploader"

const MoreInfoMyPet = () => {
    
    
    return (
    <div>
        <label>Add photo: </label>
        <ImageUploader></ImageUploader>

        <Field id="file"
                name="addPhoto"
                type="file"
                // className={
                //      errors.addPhoto && touched.addPhoto
                //      ? 'form-control is-invalid'
                //      : 'form-control'
                //  }
                />

        <label>Comments: </label>
        <Field name="comments" id="comments" />
    </div>)
};

export default MoreInfoMyPet;