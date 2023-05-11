import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-family: 'Manrope';
  text-align: center;
  font-weight: ${props => props.weight || '700'};
  font-size: ${props => props.size || '24px'};
  line-height: ${props => props.line || '1.375'};
  color: ${props => props.color || '#111111'};

  @media screen and (min-width: 768px) {
    font-weight: ${props => props.tabWeight || '700'};
    font-size: ${props => props.tabSize || '48px'};
    line-height: ${props => props.tabLine || '1.375'};
    color: ${props => props.tabColor || '#111111'};
  }

  @media screen and (min-width: 1280px) {
    font-weight: ${props => props.deskWeight || '700'};
    font-size: ${props => props.deskSize || '48px'};
    line-height: ${props => props.deskLine || '1.375'};
    color: ${props => props.deskColor || '#111111'};
  }
`;
