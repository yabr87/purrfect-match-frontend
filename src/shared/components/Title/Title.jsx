import React from 'react';
import { MainTitle } from './Title.styles';

const Title = ({ children, ...rest }) => (
  <MainTitle {...rest}>{children}</MainTitle>
);

export default Title;
