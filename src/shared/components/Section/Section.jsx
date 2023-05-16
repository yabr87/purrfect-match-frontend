import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Section.styles';

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
