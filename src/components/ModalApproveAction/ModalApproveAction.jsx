import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
// import Container from 'shared/components/Container';
import Icon from 'shared/components/Icon';
import useAuth from 'shared/hooks/useAuth';

import Congrats from 'components/ModalApproveAction/Congrats';
// import Logout from 'components/ModalApproveAction/Logout';
// import Delete from 'components/ModalApproveAction/Delete';
// import PetCard from 'components/ModalApproveAction/PetCard';

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
  const { isLoggedIn } = useAuth();

  // const userAuthNotice = isLoggedIn ? (
  //   <Congrats close={close} approve={approve} />
  // ) : (
  //   <Logout close={close} approve={approve} />
  // );

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
      <ModalView>
        <CloseIcon onClick={close}>
          <Icon id="cross" s="#54ADFF" />
        </CloseIcon>
        {/* {!isLoggedIn(<Congrats close={close} approve={approve} />)} */}
        {children}

        {/* {userAuthNotice} */}
        {/* <Congrats close={close} approve={approve} /> */}
        {/* <Logout close={close} approve={approveLogout} /> */}
        {/* <Delete close={close} approve={approveDelete}/> */}
        {/* <PetCard close={close} /> */}
      </ModalView>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalApproveAction;

// _______________________________
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

/* <Button type="button" onBtnClick={close} w="256" h="40">
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
          </Button> */
// ______________________________________
/* {screenSize === 'small' &&
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
          )} */
/* {screenSize === 'small' &&
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
          )} */
