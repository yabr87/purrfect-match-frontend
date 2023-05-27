import styled from 'styled-components';

export const SelectedFiltersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SelectedFiltersItem = styled.li`
  display: inline-flex;
  border: ${props => props.theme.colors.inputOutline};
  border-radius: ${props => props.theme.radius.small};
  background: ${props => props.theme.colors.inputBackground};
  padding: 3px 16px;
  gap: 4px;
  justify-content: space-between;
  box-shadow: ${props => props.theme.shadows.default};
  align-items: center;
  color: ${props => props.theme.colors.link};
  font-family: ${props => props.theme.fonts.placeholders};
  font-size: ${props => props.theme.fontSizes.xs};
  cursor: pointer;
`;
