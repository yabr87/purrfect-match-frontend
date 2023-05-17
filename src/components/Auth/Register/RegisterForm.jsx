import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

// import { useNavigate } from 'react-router-dom';

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

import { signup } from 'redux/auth/authOperations';

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

const RegisterForm = () => {
  // _____________for Modal Congrats______________

  // const navigate = useNavigate();
  // _____________________________________________
  const dispatch = useDispatch();
  return (
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
        // navigate('/notices/sell', { state: { isModalOpen: true } });
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
          >
            Register
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
            <Input
              error={errors.confirmedPassword}
              touched={touched.confirmedPassword}
              value={values.confirmedPassword}
              name={'confirmedPassword'}
              placeholder={'Confirm password'}
            />
          </InputContainer>
          <Button shape={'solid'} w={'100%'} h={'48'}>
            Register
          </Button>
          <Text>
            Already have an account?
            <StyledLink to={'/login'}> Login</StyledLink>
          </Text>
        </Forms>
      )}
    </Formik>
  );
};

export default RegisterForm;
