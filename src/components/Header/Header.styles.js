import styled from 'styled-components';

export const AppHeader = styled.header`
  position: ${({ isMobileNavOpen }) => isMobileNavOpen && 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  overflow: ${({ isMobileNavOpen }) => isMobileNavOpen && 'clip'};
  background-color: ${props => props.theme.colors.background};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  height: 42px;

  @media ${props => props.theme.media.tab} {
    padding-top: 24px;
    height: 68px;
  }

  @media ${props => props.theme.media.desk} {
    padding-top: 20px;
  }
`;

export const OpenLinksButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: ${({ isMobileNavOpen }) => isMobileNavOpen && 'auto'};
  width: 24px;
  height: 24px;

  background: transparent;
  color: ${props => props.theme.colors.yellow};
  border: none;
  transition: color 250ms ease;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.black};
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
  z-index: 999;
  background-color: ${props => props.theme.colors.background};
  overflow: scroll;

  @media ${props => props.theme.media.tab} {
    top: 68px;
  }
`;

export const MobileAuth = styled.div`
  align-items: center;
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 24px;

  @media ${props => props.theme.media.desk} {
    margin-left: 0;
  }
`;

export const HeaderLogout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  cursor: pointer;

  background: transparent;
  color: ${props => props.theme.colors.yellow};
`;
