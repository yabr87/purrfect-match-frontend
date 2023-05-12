import { Field } from "formik";

const CustomField = ({ name, label, placeholder }) => (
  <Field
    name={name}
    label={label}
    placeholder={placeholder}
    margin="dense"
    variant="outlined"
  />
);

export default CustomField;
