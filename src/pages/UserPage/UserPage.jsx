import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { User } from './';
import { UserInfo, PetsInfo } from 'components/User';
import Container from 'shared/components/Container';

import ModalApproveAction from 'components/ModalApproveAction';
import Congrats from 'components/ModalApproveAction/Congrats';

const UserPage = () => {
  const location = useLocation();

  const [isOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const state = location.state;
    // console.log(state);
    if (state) {
      console.log(state);
      const { params } = location.state;
      setIsModalOpen(params);
    }
  }, [location.state]);
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
