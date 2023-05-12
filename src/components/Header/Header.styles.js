import styled from 'styled-components';

export const AppHeader = styled.header`

`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
  padding-top: 24px;
    height: 68px;
  }

  @media screen and (min-width: 1280px) {
  padding-top: 20px;
  }
`;

export const OpenLinksButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0;
  background: transparent;
  color: #FFC107;

  width: 24px;
  height: 24px;
  border: none;

  cursor: pointer;

      &:hover {
        color: #111; 
      }

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: ease;


  @media (min-width: 768px) {
    margin-left: ${(props) => (props.isMobileNavOpen ? "auto" : "22px")};
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 42px;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #fff;

    @media screen and (min-width: 768px) {
    top: 68px;
  }
`;
  
export const MobileAuth = styled.div`
  align-items: center;
`