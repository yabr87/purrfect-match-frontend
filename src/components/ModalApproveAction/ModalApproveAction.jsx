import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import {
  ModalView,
  ModalOverlay,
  CloseIcon,
} from './ModalApproveAction.styles';

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({ close, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return createPortal(
    <ModalOverlay onClick={closeModal}>
      <CloseIcon onClck={close}>X</CloseIcon>
      <ModalView>{children}</ModalView>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;
