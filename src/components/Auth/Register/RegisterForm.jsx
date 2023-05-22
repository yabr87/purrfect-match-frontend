import { useEffect } from 'react';

import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

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
  Wrapper,
} from '../Form.styles';
import Input from '../Input/Input';
import Button from 'shared/components/Button/Button';
import Title from 'shared/components/Title/Title';
import Icon from 'shared/components/Icon/Icon';

import useAuth from 'shared/hooks/useAuth';
import { toast } from 'react-toastify';
import { clearError } from 'redux/auth/authSlice';
import { signup } from 'redux/auth/authOperations';
import GoogleAuth from '../GoogleAuth';

const validateShecma = t =>
  Yup.object().shape({
    email: Yup.string()
      .email(`${t('Invalid_email_address')}`)
      .required(`${t('Required')}`),
    password: Yup.string()
      .min(6, `${t('at_least_6_characters')}`)
      .max(16, `${t('less_than_16_characters')}`)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        `${t('one_uppercase_one_lowercase_one_number')}`
      )
      .required(`${t('Required')}`),
    confirmedPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], `${t('Passwords_must_match')}`)
      .required(`${t('Required')}`),
  });

const RegisterForm = () => {
  const { isError } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    if (isError) {
      toast.error(`${isError}`);
      dispatch(clearError());
    }
  }, [isError, dispatch]);

  return (
    <Wrapper>
      <Formik
        initialValues={{ email: '', password: '', confirmedPassword: '' }}
        onSubmit={(values, actions) => {
          dispatch(
            signup({
              email: values.email,
              password: values.password,
            })
          );

          actions.resetForm();
        }}
        validationSchema={validateShecma(t)}
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
              {t('Registration_title')}
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
              <Input
                error={errors.confirmedPassword}
                touched={touched.confirmedPassword}
                value={values.confirmedPassword}
                name={'confirmedPassword'}
                placeholder={t('Confirm_password')}
              />
            </InputContainer>
            <Button shape={'solid'} w={'100%'} h={'48'}>
              {t('Register')}
            </Button>
            <Text>
              {t('Already_have_an_account')}?
              <StyledLink to={'/login'}> {t('Log_IN')}</StyledLink>
            </Text>
          </Forms>
        )}
      </Formik>
      <GoogleAuth />
    </Wrapper>
  );
};

export default RegisterForm;
