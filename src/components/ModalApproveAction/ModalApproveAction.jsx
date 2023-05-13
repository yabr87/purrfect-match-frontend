import { useEffect } from 'react';
// useMedia, useState;
import { createPortal } from 'react-dom';
import Container from 'shared/components/Container';
// import Button from 'shared/components/Button';
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

const ModalApproveAction = ({ close, children, approve }) => {
  // const [isLogin, setIsLogin] = useState(false);
  // const screenSize = useMedia(
  //   [
  //     '(min-width: 1280px)',
  //     '(min-width: 768px)',
  //     '(min-width: 480px)',
  //     '(max-width: 480px)',
  //   ],
  //   ['desktop', 'tablet', 'mobile', 'small'],
  //   'xs'
  // );
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
        {/* {screenSize === 'small' &&
          isLogin(
            <ModalView>
              <CloseIcon onClck={close}>
                <Icon id="cross" s="#54ADFF" />
              </CloseIcon>
              {children}
              <Button
                type="button"
                onBtnClick={approve}
                w="256"
                h="40"
                shape="solid"
                g="8"
              >
                Go to profile
                <Icon id="paw" s="white" />
              </Button>
            </ModalView>
          )} */}
        {/* {screenSize === 'small' &&
          !isLogin(
            <ModalView>
              <CloseIcon onClck={close}>
                <Icon id="cross" s="#54ADFF" />
              </CloseIcon>
              {children}
              <Button
                type="button"
                onBtnClick={approve}
                w="256"
                h="40"
                shape="solid"
                g="8"
              >
                Go to profile
                <Icon id="paw" s="white" />
              </Button>
            </ModalView>
          )} */}
        <ModalView>
          <CloseIcon onClck={close}>
            <Icon id="cross" s="#54ADFF" />
          </CloseIcon>
          {children}
          {/* <Button type="button" onBtnClick={close} w="256" h="40">
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
          </Button> */}
        </ModalView>
      </Container>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;
