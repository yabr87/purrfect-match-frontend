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
  console.log(isRegisteredIn);

  const [isOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isRegisteredIn) {
      setIsModalOpen(isRegisteredIn);
      dispatch(statusIsRegister(false));
    }
  }, [isRegisteredIn, dispatch]);

  return (
    <Container>
      <User>
        <UserInfo />
        <PetsInfo />
      </User>
      {isOpen && (
        <ModalApproveAction close={() => setIsModalOpen(false)}>
          <Congrats close={() => setIsModalOpen(false)} />
        </ModalApproveAction>
      )}
    </Container>
  );
};

export default UserPage;
