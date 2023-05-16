import { FormTitle } from "../AddPetForm.styles";
import FormNav from "../FormNav";
import { FormBox} from "./FormWrapper.styles";


const FormWrapper = ({
  children,
  currentStep,
  category,
  text
}) => {
  return (
    <FormBox currentStep={currentStep} category={category}>
      <FormTitle>{text}</FormTitle>
      <FormNav currentStep={currentStep} />
      {children}
    </FormBox>
  );
};

export default FormWrapper;