import {
  FormContainer,
  Form,
  CenrteredDiv,
  StyledInput,
  InputContainer,
  Text,
  StyledLink,
} from './LoginPage.styles';
import { Btn } from 'shared/components/Button/Button.styled';
import Title from 'shared/components/Title/Title';

const LoginPage = () => {
  return (
    <CenrteredDiv>
      <FormContainer>
        <Form>
          <Title deskWeight={500} deskSize="36px">
            Login
          </Title>
          <InputContainer>
            <label>
              <StyledInput type="text" name="email" placeholder="Email" />
            </label>
            <label>
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
          </InputContainer>
          <Btn shape={'solid'} w={458} h={48}>
            Login
          </Btn>
          <Text>
            Don't have an account?{' '}
            <StyledLink to={'/register'}>Register</StyledLink>
          </Text>
        </Form>
      </FormContainer>
    </CenrteredDiv>
  );
};

export default LoginPage;
