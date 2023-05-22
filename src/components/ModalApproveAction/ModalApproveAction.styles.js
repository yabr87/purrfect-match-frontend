import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(87, 86, 86, 0.6);
  z-index: 1001;
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: calc(100% - 40px);
  border-radius: 20px;
  background-color: ${props => props.theme.colors.backgroundModal};
  @media ${props => props.theme.media.phone} {
    max-width: 440px;
  }
  @media ${props => props.theme.media.tab} {
    width: calc(100% - 86px);
    max-width: 681px;
    border-radius: ${props => props.theme.radius.normal};
  }
`;

export const ModalView = styled.div`
  // width: calc(100% - 40px);
  // border-radius: 20px;
  // background-color: ${props => props.theme.colors.backgroundModal};
  // @media ${props => props.theme.media.phone} {
  //   max-width: 440px;
  // }

  // @media ${props => props.theme.media.tab} {
  //   border-radius: ${props => props.theme.radius.normal};
  //   max-width: 681px;
  // }
`;

export const CloseIcon = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
