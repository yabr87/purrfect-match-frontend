import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

const Button = ({ text, type, onBtnClick }) => {
  return (
    <Btn type={type} onClick={onBtnClick}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
