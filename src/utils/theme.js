// import styled from 'styled-components';
// використання теми в вашому компоненті: в файлі стилізації component.styled.js -
// export const Container = styled.div`
//   width: 300px;
//   background-color: ${props => props.theme.colors.lightBlue};
//   border-color: ${props => props.theme.colors.accent};
// `;

export const theme = {
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
  },
  shadows: {
    default: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    hover: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  fonts: {
    main: 'Monrope, san-serif',
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
  titles: {
    h1Mobile: {
      fontFamily: 'Manrope, san-serif',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '24px',
      lineHeight: '1.38',
      textAlign: 'center',
    },
    h1Desk: {
      fontFamily: 'Manrope, san-serif',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '48px',
      lineHeight: '1.38',
    },
    mainTitleMobile: {
      fontFamily: 'Manrope, san-serif',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '1.38',
    },
    mainTitleDesk: {
      fontFamily: 'Manrope, san-serif',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: '68px',
      lineHeight: '13.0',
    },
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
  transition: 'color 300ms, cubic-bezier(0.4, 0, 0.2, 1)',
};
