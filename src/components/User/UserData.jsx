import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Avatar,
  Photo,
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
import { addAvatar, getCurrent } from 'utils/Api';
import { reverseISODate } from 'utils/reverseISODate';
import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
  photo: null,
};

const UserData = handleChange => {
  const [user, setUser] = useState(initialState);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    const getUser = async token => {
      const res = await getCurrent(token);
      setUser(res.data);
    };
    getUser(token);
  }, [token]);

  const handlePhotoChange = e => {
    setUser({ ...user, photo: e.target.files[0] });
  };

  const handleUploadPhoto = async () => {
    await addAvatar(token, user.photo);
  };

  const handleLogOut = () => {
    setIsModalLogoutOpen(true);
  };

  return (
    <>
      <Wrap>
        <Title>My information:</Title>
        <Container>
          <AvatarContainer>
            <Avatar>
              <input
                type="file"
                onChange={handlePhotoChange}
                accept="image/png, image/jpeg"
                multiple={false}
              />
              {user.photo ? (
                <Photo
                  src={URL.createObjectURL(user.photo)}
                  alt="Selected file"
                />
              ) : (
                <Icon id="add-photo-pet" w="48" h="48" s="#54ADFF" />
              )}
              <input />
            </Avatar>
            <EditAvatarBtn onClick={handleUploadPhoto}>
              <Icon id="camera" s="#54ADFF" />
              <BtnText>Edit photo</BtnText>
            </EditAvatarBtn>
          </AvatarContainer>
          <InputContainer>
            <InputItem name="name" type="text" value={user.name || 'User'} />
            <InputItem name="email" type="text" value={user.email} />
            <InputItem
              name="birthday"
              type="text"
              value={reverseISODate(user.birthday) || ''}
            />
            <InputItem name="phone" type="text" value={user.phone} />
            <InputItem name="city" type="text" value={user.city || ''} />
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
