import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: ${props => props.theme.colors.backgroundColor};
    }
    
.react-datepicker__tab-loop {
  z-index: 2;
}
`;
