import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import Icon from 'shared/components/Icon';
// import useAuth from 'shared/hooks/useAuth';

// import Congrats from 'components/ModalApproveAction/Congrats';
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
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const { isLoggedIn } = useAuth();

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
        {/* {isModalOpen(<Congrats close={close} approve={approve} />)} */}
        {children}
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
