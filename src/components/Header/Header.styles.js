import styled from 'styled-components';

export const AppHeader = styled.header`
  align-items: center;
  padding-top: 20px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    height: 80px;
  }
`;

export const BurgerButton = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
  margin-left: 20px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
  `;

export const BurgerIcon = styled.div`
  width: 24;
  `