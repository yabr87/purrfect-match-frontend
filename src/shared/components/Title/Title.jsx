import React from 'react';
import { MainTitle } from './Title.styles';

const Title = ({ children, ...rest }) => (
  <MainTitle {...rest}>{children}</MainTitle>
);

export default Title;

// props:
// font-weight: weight, tabWeight, deskWeight, default '700'};
// font-size:   size, tabSize, deskSize, default'24px'};
// line-height: line, tabLine, deskLine, default '1.375'};
// color: color, tabColor, deskColor, default '#111111'};
