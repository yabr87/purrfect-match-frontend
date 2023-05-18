import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Avatar,
  AvatarContainer,
  Title,
  EditAvatarBtn,
  LogOutBtn,
  BtnText,
  LogOutText,
  InputItem,
  InputContainer,
  Wrap,
} from './';
import Icon from 'shared/components/Icon/Icon';
import { current } from 'redux/auth/authOperations';

import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';

const UserData = () => {
  const [user, setUser] = useState([]);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(dispatch(current()));
  }, [dispatch]);

  const handleLogOut = () => {
    setIsModalLogoutOpen(true);
  };

  return (
    <>
      <Wrap>
        <Title>My information:</Title>
        <Container>
          <AvatarContainer>
            <Avatar />
            <EditAvatarBtn>
              <Icon id="camera" s="#54ADFF" />
              <BtnText>Edit photo</BtnText>
            </EditAvatarBtn>
          </AvatarContainer>
          <InputContainer>
            <InputItem name={'Name'} type="text" value={user.name || 'User'} />
            <InputItem name={'Email'} type="email" value={user.email} />
            <InputItem
              name={'Birthday'}
              type="text"
              value={user.birthday || ''}
            />
            <InputItem name={'Phone'} type="phone" value={user.phone} />
            <InputItem name={'City'} type="text" value={user.city || ''} />
            <LogOutBtn onClick={handleLogOut}>
              <Icon id="logout" s="#54ADFF" />
              <LogOutText>Log Out</LogOutText>
            </LogOutBtn>
          </InputContainer>
          {isModalLogoutOpen && (
            <ModalApproveAction close={() => setIsModalLogoutOpen(false)}>
              <Logout close={() => setIsModalLogoutOpen(false)} />
            </ModalApproveAction>
          )}
        </Container>
      </Wrap>
    </>
  );
};

export default UserData;
