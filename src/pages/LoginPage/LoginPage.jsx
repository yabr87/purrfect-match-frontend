import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  Forms,
  CenrteredDiv,
  StyledInput,
  InputContainer,
  Text,
  StyledLink,
} from './LoginPage.styles';
import { Btn } from 'shared/components/Button/Button.styled';
import Title from 'shared/components/Title/Title';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid Email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Пароль повинен містити мінімум 6 символів')
    .max(16, 'Пароль не може містити більше 16 символів')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
      'Пароль повинен містити мінімум 1 літеру верхнього регістру, 1 літеру нижнього регістру та 1 цифру'
    ),
});
const LoginPage = () => {
  return (
    <CenrteredDiv>
      <FormContainer>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          <Forms>
            <Title deskWeight={500} deskSize="36px">
              Login
            </Title>
            <InputContainer>
              <label>
                <StyledInput type="text" name="email" placeholder="Email" />
                <ErrorMessage name="email" />
              </label>
              <label>
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />
              </label>
            </InputContainer>
            <Btn type="submit" shape={'solid'} w={458} h={48}>
              Login
            </Btn>
            <Text>
              Don't have an account?
              <StyledLink to={'/register'}>Register</StyledLink>
            </Text>
          </Forms>
        </Formik>
      </FormContainer>
    </CenrteredDiv>
  );
};

export default LoginPage;
