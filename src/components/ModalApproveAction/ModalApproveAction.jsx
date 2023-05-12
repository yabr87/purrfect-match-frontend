import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Container from 'shared/components/Container';
import Icon from 'shared/components/Icon';

import { ModalView, ModalOverlay } from './ModalApprooveAction.styles';

const modalRoot = document.querySelector('#modal-root');

// Функція закриття для передачі в пропс

// const [isModalOpen, setIsModalOpen] = useState(false);

// const close = () => {
//   setIsModalOpen(false);
// };

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
          <Icon id="cross" s="#54ADFF" onClck={close} />
          {children}
        </ModalView>
      </Container>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;
