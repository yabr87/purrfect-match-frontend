import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: 'relative';
`;

export const FilterOptions = styled.div`
  position: absolute;
  padding: 8px;
  ${'' /* top: 100%; */}
  z-index: 10;
  width: 152px;
  background: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: ${props => props.theme.radius.small};
  ${
    '' /* @media@media (min-width: 481px) {
    padding: 60px 75px;
  } */
  }
`;

export const FiltersTitle = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.link};
  margin-bottom: 8px;
`;

export const FilterContainerForAllGrup = styled.div`
  position: relative;
`;
