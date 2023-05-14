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
        <ImageUploader photo="https://cdn.neighbourly.co.nz/images/cache/message_max_size/message_images/643cb225c02fc7.94390756.jpeg?170410"
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
