import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Container from 'shared/components/Container';

import {
  ModalView,
  ModalOverlay,
  // CloseIcon,
} from './ModalApprooveAction.styles';

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({ close, children }) => {
  useEffect(() => {
    const closeModal = ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [close]);

  return createPortal(
    <ModalOverlay onClick={close}>
      <Container>
        <ModalView>
          {/* <CloseIcon onClck={close}>X</CloseIcon> */}
          {children}
        </ModalView>
      </Container>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;
