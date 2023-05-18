// import styled from 'styled-components';
// використання теми в вашому компоненті: в файлі стилізації component.styled.js -
// export const Container = styled.div`
//   width: 300px;
//   background-color: ${props => props.theme.colors.lightBlue};
//   border-color: ${props => props.theme.colors.accent};
// `;

export const lightTheme = {
  colors: {
    accent: '#FF8356',
    background: '#FEF9F9',
    link: '#54ADFF',
    grey: '#888888',
    black: '#111111',
    yellow: '#FFC107',
    green: '#00C3AD',
    red: '#F43F5E',
    lightBlue: '#CCE4FB',
    gradient: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',

    inputColor: '#888888',
    backgroundModal: '#ffffff',
    backgroundColor: '#fff',
    color: '#121212',
    linkT: '#888888',
  },
  shadows: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    hover: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  fonts: {
    main: 'Manrope, san-serif',
    placeholders: 'Inter, san-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '28px',
    title: '48px',
    heroTitle: '68px',
  },
  fontWeiths: {
    normal: '400',
    semi: '500',
    semiBold: '600',
    bold: '700',
  },
  radius: {
    normal: '40px',
    small: '16px',
    round: '50%',
  },
  mediaPoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
  media: {
    phone: 'screen and (min-width: 480px)',
    tab: 'screen and (min-width: 768px)',
    desk: 'screen and (min-width: 1280px)',
  },
  // add: `text-align:"start";
  //       font-weight: 500;
  //       font-size: "20px";
  //       line-height: 1.35;
  //       text-align: "center";

  //       @media screen and (min-width: 768px){
  //         font-weight: 500;
  //         font-size: "28px";
  //         line-height: 1.35;
  //       }
  //       @media screen and (min-width: 1280px){
  //         font-weight: 500;
  //         font-size: "28px";
  //         line-height: 1.35;
  //       }`,
};
export const darkTheme = {
  colors: {
    accent: '#FF8356',
    background: '#FEF9F9',
    link: '#54ADFF',
    grey: '#888888',
    black: '#111111',
    yellow: '#FFC107',
    green: '#00C3AD',
    red: '#F43F5E',
    lightBlue: '#CCE4FB',
    gradient: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',

    inputColor: '#ffffff',
    backgroundModal: '#121212',
    backgroundColor: '#121212',
    color: '#fff',
  },
  shadows: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    hover: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  fonts: {
    main: 'Manrope, san-serif',
    placeholders: 'Inter, san-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '28px',
    title: '48px',
    heroTitle: '68px',
  },
  fontWeiths: {
    normal: '400',
    semi: '500',
    semiBold: '600',
    bold: '700',
  },
  radius: {
    normal: '40px',
    small: '16px',
    round: '50%',
  },
  mediaPoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
  media: {
    phone: 'screen and (min-width: 480)',
    tab: 'screen and (min-width: 768px)',
    desk: 'screen and (min-width: 1280px)',
  },
};
