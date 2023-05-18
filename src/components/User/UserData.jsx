import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { getCurrent } from 'utils/Api';

import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';

const UserData = () => {
  const [user, setUser] = useState([]);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    const getUser = async token => {
      const res = await getCurrent(token);
      setUser(res.data);
      console.log(res.data);
    };
    getUser(token);
  }, [token]);

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
            <InputItem name="name" type="text" value={user.name || 'User'} />
            <InputItem name="email" type="text" value={user.email} />
            <InputItem
              name={'birthday'}
              type="text"
              value={user.birthday || ''}
            />
            <InputItem name={'phone'} type="text" value={user.phone} />
            <InputItem name={'city'} type="text" value={user.city || ''} />
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
