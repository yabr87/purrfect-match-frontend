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
      <FormTitle currentStep={currentStep} category={category}>{text}</FormTitle>
      <FormNav currentStep={currentStep} category={category} />
      {children}
    </FormBox>
  );
};

export default FormWrapper;