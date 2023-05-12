import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Container from 'shared/components/Container';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import {
  ModalView,
  ModalOverlay,
  CloseIcon,
} from './ModalApproveAction.styles';

const modalRoot = document.querySelector('#modal-root');

// Функція закриття для передачі в пропс

// const [isModalOpen, setIsModalOpen] = useState(false);
// const [isFavorite, setIsFavorite] = useState(false);

// const close = () => {
//   setIsModalOpen(false);
// };

// const approveLogout = () => {
//     const dispatch = useDispatch();
//     const onLogout = ()=> {
//         dispatch(logout());
//     }
// }

// const approveAddFavorite = () => {
//     setIsFavorite(true);
// }

const ModalApproveAction = ({
  close,
  children,
  approve,
  // textBtnApprove,
  // textBtnCancel,
}) => {
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
          <CloseIcon onClck={close}>
            <Icon id="cross" s="#54ADFF" />
          </CloseIcon>
          {children}
          <Button type="button" onBtnClick={close} h="40">
            Cancel
          </Button>
          <Button
            type="button"
            onBtnClick={approve}
            w="256"
            h="40"
            shape="solid"
            g="8"
          >
            Add to
            <Icon id="heart" f="white" s="white" />
          </Button>
        </ModalView>
      </Container>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;
