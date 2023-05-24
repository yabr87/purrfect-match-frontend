import styled from 'styled-components';

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
  &:second-child {
    margin-left: 13px;
  }
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
  align-items: flex-start;
  &:first-child {
    margin-bottom: 8px;
  }
`;

export const Item = styled.span`
  margin-left: 8px;
`;
