import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { User } from './';
import { UserInfo, PetsInfo } from 'components/User';
import Container from 'shared/components/Container';

import useAuth from 'shared/hooks/useAuth';
import { statusIsRegister } from 'redux/auth/authSlice';

import ModalApproveAction from 'components/ModalApproveAction';
import Congrats from 'components/ModalApproveAction/Congrats';

const UserPage = () => {
  const { isRegisteredIn } = useAuth();
  const dispatch = useDispatch();
  const [isOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isRegisteredIn) {
      setIsModalOpen(isRegisteredIn);
      document.body.style.overflow = 'hidden';
      dispatch(statusIsRegister(false));
    }
  }, [isRegisteredIn, dispatch]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <Container>
      <User>
        <UserInfo />
        <PetsInfo />
      </User>
      {isOpen && (
        <ModalApproveAction close={handleModalClose}>
          <Congrats close={handleModalClose} />
        </ModalApproveAction>
      )}
    </Container>
  );
};

export default UserPage;
