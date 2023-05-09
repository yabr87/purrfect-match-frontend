import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Section.styles';

const Section = ({ children }) => <Wrapper>{children}</Wrapper>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
