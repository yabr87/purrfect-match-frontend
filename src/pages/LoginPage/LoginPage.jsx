import { CenrteredDiv, FormContainer } from './LoginPage.styles';
import LoginForm from 'components/Auth/Login';
const LoginPage = () => {
  return (
    <CenrteredDiv>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </CenrteredDiv>
  );
};

export default LoginPage;
