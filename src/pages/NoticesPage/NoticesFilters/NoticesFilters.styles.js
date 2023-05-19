import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: 'relative';
`;

export const FilterOptions = styled.div`
  position: absolute;
  padding: 8px;
  top: 100%;
  right: 0;
  z-index: 1;
  width: 152px;
  background: ${props => props.theme.colors.backgroundModal};
  box-shadow: ${props => props.theme.shadows.default};
  border-radius: ${props => props.theme.radius.small};
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

export const Item = styled.span`
  margin-left: 8px;
`;

export const FiltersItems = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  max-height: 32px;
  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props => props.theme.radius.small};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 10px;
  background: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.link};
  border-radius: ${props => props.theme.radius.small};
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`;

export const FilterChose = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.normal};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.link};
`;
