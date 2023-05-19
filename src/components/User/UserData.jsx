import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  UserWrapper,
  Avatar,
  Photo,
  AvatarContainer,
  AvatarInput,
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

const UserData = () => {
  const [user, setUser] = useState(initialState);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
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
    setIsConfirm(true);
  };

  const handleUploadPhoto = async () => {
    await addAvatar(token, { avatar: user.photo });
    setIsConfirm(false);
  };

  const handleLogOut = () => {
    setIsModalLogoutOpen(true);
  };

  return (
    <>
      <Wrap>
        <Title>My information:</Title>
        <UserWrapper>
          <AvatarContainer>
            <Avatar>
              <AvatarInput
                id="avatar"
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
                <Photo src={user.avatarUrl} alt="default avatar" />
              )}
            </Avatar>
            {!isConfirm ? (
              <EditAvatarBtn>
                <Icon id="camera" s="#54ADFF" />
                <label style={{ cursor: 'pointer' }} htmlFor="avatar">
                  Edit photo
                </label>
              </EditAvatarBtn>
            ) : (
              <EditAvatarBtn onClick={handleUploadPhoto}>
                <Icon id="complite" s="#54ADFF" />
                <BtnText>Confirm</BtnText>
              </EditAvatarBtn>
            )}
          </AvatarContainer>
          <InputContainer>
            <InputItem
              name="name"
              type="text"
              value={user.name || 'User'}
              placeholder="Name"
            />
            <InputItem
              name="email"
              type="text"
              value={user.email}
              placeholder="Email"
            />
            <InputItem
              name="birthday"
              type="text"
              placeholder="DD.MM.YYYY"
              value={reverseISODate(user.birthday) || ''}
            />
            <InputItem
              name="phone"
              type="text"
              value={user.phone}
              placeholder="+380XXXXXXXXX"
            />
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
        </UserWrapper>
      </Wrap>
    </>
  );
};

export default UserData;
