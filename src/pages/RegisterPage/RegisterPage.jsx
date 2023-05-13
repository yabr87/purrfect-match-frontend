import { CenrteredDiv, FormContainer } from '../LoginPage/LoginPage.styles';

import RegisterForm from 'components/Auth/Register/RegisterForm';
const RegisterPage = () => {
  return (
    <CenrteredDiv>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </CenrteredDiv>
  );
};

export default RegisterPage;
