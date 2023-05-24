import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: ${props => props.theme.colors.backgroundColor};
    }

.react-datepicker {
 font-family: ${props => props.theme.fonts.main} !important;
    }
    
.react-datepicker__tab-loop {
  z-index: 2;
}

.react-datepicker__month-container {
  background-color: ${({ theme }) => theme.colors.backgroundModal} !important;
  
}

.react-datepicker__month {
  background-color: ${({ theme }) => theme.colors.inputBackground} !important;
  margin: 0 !important;
}

.react-datepicker__triangle::after {
  border-bottom-color: ${({ theme }) => theme.colors.link} !important;
}

.react-datepicker__day.react-datepicker__day--keyboard-selected {
  background-color: ${({ theme }) =>
    theme.colors.notificationColorTheme} !important;
  color: ${({ theme }) => theme.colors.backgroundModal} !important;
}

.react-datepicker {
    border: 1px solid ${({ theme }) => theme.colors.link} !important;
}

.react-datepicker__header {
  background-color: ${({ theme }) => theme.colors.link} !important;
  font-weight: ${({ theme }) => theme.fontWeiths.bold};
  font-size: ${({ theme }) => theme.fontSizes.search};
}

.react-datepicker__current-month {
  color: ${({ theme }) => theme.colors.backgroundModal} !important;
}

.react-datepicker__day{
    color: ${({ theme }) => theme.colors.titleColor} !important;}
    
.react-datepicker__day-name {
  color: ${({ theme }) => theme.colors.backgroundModal} !important;
}

.react-datepicker__day.react-datepicker__day--selected {
  background-color: ${({ theme }) => theme.colors.green} !important;
  color: white !important;
}

.react-datepicker__day:hover {    
    background-color: ${({ theme }) => theme.colors.link} !important;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.backgroundModal} !important;
}

.react-datepicker__navigation-icon--previous::before,
.react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    border-color: ${({ theme }) => theme.colors.backgroundModal} !important;
    border-width: 3px 3px 0 0;
}

.react-datepicker__navigation-icon--previous:hover::before,
.react-datepicker__navigation-icon--next:hover::before {
  border-color: ${({ theme }) => theme.colors.yellow}  !important;
}
`;
