import styled from 'styled-components';

export const AppHeader = styled.header`
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;

  @media screen and (min-width: 1280px) {
    height: 80px;
  }
`;

export const OpenLinksButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  width: 24px;
  height: 24px;
  border: none;
  color: black;

  font-size: 30px;
  background-color: #fff;

  cursor: pointer;

  @media (min-width: 1280px) {
    margin-left: 20px;
    display: none;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: fixed;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  top: 68px;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  margin-top: 40px;

  @media (min-width: 1280px) {
    display: none;
  }
`;
  