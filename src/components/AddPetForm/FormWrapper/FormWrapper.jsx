import FormNav from "../FormNav";


const FormWrapper = ({
  children,
  currentStep,
}) => {
  return (
    <div>
      <FormNav currentStep={currentStep} />
      {children}
    </div>
  );
};

export default FormWrapper;