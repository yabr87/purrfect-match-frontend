import { useState, useEffect } from 'react';

import { User } from './';
import { UserInfo, PetsInfo } from 'components/User';
import Container from 'shared/components/Container';

import useAuth from 'shared/hooks/useAuth';

import ModalApproveAction from 'components/ModalApproveAction';
import Congrats from 'components/ModalApproveAction/Congrats';

const UserPage = () => {
  const { isRegisteredIn } = useAuth();

  const [isOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isRegisteredIn);
  }, [isRegisteredIn]);

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
