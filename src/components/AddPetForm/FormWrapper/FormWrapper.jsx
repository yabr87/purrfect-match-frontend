import { FormTitle } from "../AddPetForm.styles";
import FormNav from "../FormNav";
import { FormBox} from "./FormWrapper.styles";


const FormWrapper = ({
  children,
  currentStep,
}) => {
  return (
    <FormBox>
      <FormNav currentStep={currentStep} />
      {children}
    </FormBox>
  );
};

export default FormWrapper;