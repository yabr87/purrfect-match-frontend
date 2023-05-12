import styled from 'styled-components';

export const Svg = styled.svg`
  stroke: ${props => props.s};
  fill: ${props => props.f};

  width: ${props => props.w || 24}px;
  height: ${props => props.h || 24}px;
`;
