import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import {
  Forms,
  InputEmail,
  InputContainer,
  Text,
  StyledLink,
  Error,
  Lable,
  AbsoluteDiv,
} from '../Form.styles';
import Input from '../Input/Input';
import Button from 'shared/components/Button/Button';
import Title from 'shared/components/Title/Title';
import Icon from 'shared/components/Icon/Icon';

import { login } from 'redux/auth/authOperations';

const validateShecma = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be less than 16 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number'
    )
    .required('Required'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
const LoginForm = () => {
  const dispatch = useDispatch();
  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      }}
      validationSchema={validateShecma}
    >
      {({ errors }) => (
        <Forms>
          <Title deskWeight={500} deskSize="36px">
            Login
          </Title>
          <InputContainer>
            <Lable>
              <InputEmail
                type="text"
                name="email"
                placeholder="Email"
                error={errors.email ? '#f43f5e' : '#54adff'}
                validate={validateEmail}
              />
              {errors.email && (
                <>
                  <AbsoluteDiv>
                    <Icon id={'cross'} s={'red'} />
                  </AbsoluteDiv>
                  <ErrorMessage component={Error} name="email" />
                </>
              )}
            </Lable>
            <Input
              errors={errors?.password}
              name={'password'}
              placeholder={'Password'}
            />
          </InputContainer>
          <Button shape={'solid'} w={458} h={48}>
            Login
          </Button>
          <Text>
            Don't have an account?
            <StyledLink to={'/register'}>Register</StyledLink>
          </Text>
        </Forms>
      )}
    </Formik>
  );
};

export default LoginForm;
