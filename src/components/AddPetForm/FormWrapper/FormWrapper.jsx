import { FormTitle } from "../AddPetForm.styles";
import FormNav from "../FormNav";
import { FormBox} from "./FormWrapper.styles";


const FormWrapper = ({
  children,
  currentStep,
  text
}) => {
  return (
    <FormBox>
      <FormTitle>{text}</FormTitle>
      <FormNav currentStep={currentStep} />
      {children}
    </FormBox>
  );
};

export default FormWrapper;