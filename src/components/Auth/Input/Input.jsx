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

const Input = ({ errors, name, placeholder }) => {
  const [passwordType, setPasswordType] = useState('password');
  const [isValide, setIsValide] = useState(false);
  const validatePassword = value => {
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
    }
    setIsValide(true);
    return error;
  };
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <Lable>
      <InputPassword
        type={passwordType}
        name={name}
        placeholder={placeholder}
        error={errors ? '#f43f5e' : isValide ? ' #00C3AD' : '#54adff'}
        onFocus={validatePassword}
        autoComplete="off"
      />
      <AbsoluteDiv>
        {!errors && isValide ? (
          <Icon id={'complite'} s={'#00C3AD'} />
        ) : (
          <ToggleBtn type="button" onClick={togglePassword}>
            {passwordType === 'password' ? (
              <Icon id={'eye-closed'} s={errors ? '#f43f5e' : '#54adff'} />
            ) : (
              <Icon id={'eye-open'} s={errors ? '#f43f5e' : '#54adff'} />
            )}
          </ToggleBtn>
        )}
      </AbsoluteDiv>
      <ErrorMessage component={Error} name={name} />
    </Lable>
  );
};

export default Input;
