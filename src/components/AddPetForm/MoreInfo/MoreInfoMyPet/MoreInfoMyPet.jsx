import { Field } from "formik";
import ImageUploader from "../../../../shared/components/ImageUploader"

const MoreInfoMyPet = props => {
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
    <div>
        <label>Add photo: </label>
        <ImageUploader placeholderIconId="add-photo-pet"
                       onChange={handleChange}
                       name="petPhoto"
                       value={values["petPhoto"]}>
        </ImageUploader>
        <label>Comments: </label>
        <Field name="personalComment"
               id="personalComment"
               onChange={handleChange}
               value={values["personalComment"]}/>
    </div>)
};

export default MoreInfoMyPet;
