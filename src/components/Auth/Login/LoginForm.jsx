import { useEffect } from 'react';
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

import { useNavigate } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';
import { clearError } from '../../../redux/auth/authSlice.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
});
const LoginForm = () => {
  const navigate = useNavigate();
  const { isLoggedIn, error } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/notices/sell');
    }
    if (error.message) {
      toast.error(`${error.message}`, { position: toast.POSITION.TOP_RIGHT });
      dispatch(clearError());
    }
  }, [isLoggedIn, navigate, error, dispatch]);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
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
      {({ errors, touched, values }) => (
        <Forms>
          <Title
            as="p"
            weight="500"
            tabSize="36"
            tabLine="1.36"
            tabweight="500"
            deskWeight="500"
            deskSize="36"
            deskLine="1.36"
            color="inherit"
          >
            Login
          </Title>
          <InputContainer>
            <Lable>
              <InputEmail
                type="text"
                name="email"
                placeholder="Email"
                error={errors.email && touched.email ? '#f43f5e' : '#54adff'}
              />
              {errors.email && touched.email && (
                <>
                  <AbsoluteDiv>
                    <Icon id={'cross'} s={'red'} />
                  </AbsoluteDiv>
                  <ErrorMessage component={Error} name="email" />
                </>
              )}
            </Lable>
            <Input
              error={errors.password}
              touched={touched.password}
              name={'password'}
              placeholder={'Password'}
              value={values.password}
            />
          </InputContainer>
          <Button shape={'solid'} w={'100%'} h={'48'}>
            Login
          </Button>
          <Text>
            Don't have an account?
            <StyledLink to={'/register'}> Register</StyledLink>
          </Text>
        </Forms>
      )}
    </Formik>
  );
};

export default LoginForm;
