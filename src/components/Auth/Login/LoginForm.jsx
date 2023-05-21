import { useEffect } from 'react';

import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
import { toast } from 'react-toastify';
import { clearError } from 'redux/auth/authSlice';

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
  const { isLoggedIn, isError } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/notices/sell');
    }
    if (isError) {
      toast.error(`${isError}`);
      dispatch(clearError());
    }
  }, [isLoggedIn, navigate, isError, dispatch]);

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
            {t('Login_title')}
          </Title>
          <InputContainer>
            <Lable>
              <InputEmail
                type="text"
                name="email"
                placeholder={t('Email')}
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
              placeholder={t('Password')}
              value={values.password}
            />
          </InputContainer>
          <Button shape={'solid'} w={'100%'} h={'48'}>
            {t('Log_IN')}
          </Button>
          <Text>
            {t('Dont_have_an_account')}?
            <StyledLink to={'/register'}> {t('Register')}</StyledLink>
          </Text>
        </Forms>
      )}
    </Formik>
  );
};

export default LoginForm;
