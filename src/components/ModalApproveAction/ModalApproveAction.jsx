import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import Icon from 'shared/components/Icon';

import {
  // ModalView,
  ModalContainer,
  ModalOverlay,
  CloseIcon,
} from './ModalApproveAction.styles';

const modalRoot = document.querySelector('#modal-root');

const ModalApproveAction = ({ close, children, approve }) => {
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
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', closeModal);
      document.body.style.overflow = '';
    };
  }, [closeModal]);

  return createPortal(
    <ModalOverlay onClick={closeModal}>
      <ModalContainer>
        <CloseIcon onClick={close}>
          <Icon id="cross" s="#54ADFF" />
        </CloseIcon>
        {children}
      </ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;
