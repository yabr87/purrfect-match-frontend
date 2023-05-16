import { useState } from 'react';
import { ErrorMessage } from 'formik';

import Icon from 'shared/components/Icon/Icon';

import {
  ToggleBtn,
  AbsoluteDiv,
  Lable,
  Error,
  InputPassword,
} from './Input.styles';
import { useEffect } from 'react';

const Input = ({ error, touched, name, placeholder, value }) => {
  const [passwordType, setPasswordType] = useState('password');
  const [isValide, setIsValide] = useState(false);
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  useEffect(() => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.lenght < 6) {
      error = 'Password must be at least 6 characters';
    } else if (value.lenght > 16) {
      error = 'Password must be less than 16 characters';
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/.test(value)
    ) {
      error =
        'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number';
    } else if (!error) {
      setIsValide(true);
    }
  }, [value]);
  return (
    <Lable>
      <InputPassword
        type={passwordType}
        name={name}
        placeholder={placeholder}
        error={error && touched ? '#f43f5e' : isValide ? '#00C3AD' : '#54adff'}
        autoComplete="off"
      />
      <AbsoluteDiv>
        {!error && isValide ? (
          <Icon id={'complite'} s={'#00C3AD'} />
        ) : (
          <ToggleBtn type="button" onClick={togglePassword}>
            {passwordType === 'password' ? (
              <Icon
                id={'eye-closed'}
                s={error && touched ? '#f43f5e' : '#54adff'}
              />
            ) : (
              <Icon
                id={'eye-open'}
                s={error && touched ? '#f43f5e' : '#54adff'}
              />
            )}
          </ToggleBtn>
        )}
      </AbsoluteDiv>
      <ErrorMessage component={Error} name={name} />
    </Lable>
  );
};

export default Input;
