import { Field } from "formik";
import ImageUploader from "../../../../shared/components/ImageUploader"

const MoreInfoMyPet = () => {
    return (
    <div>
        <label>Add photo: </label>
        <ImageUploader></ImageUploader>
        <label>Comments: </label>
        <Field name="comments" id="comments" />
    </div>)
};

export default MoreInfoMyPet;
