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
`;

export const ModalView = styled.div`
  border-radius: ${props => props.theme.radius.normal};
  background-color: ${props => props.theme.colors.backgroundModal};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseIcon = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
