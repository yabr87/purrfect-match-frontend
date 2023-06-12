import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
  UserWrapper,
  Avatar,
  Photo,
  AvatarContainer,
  AvatarInput,
  AvatarLabel,
  Title,
  EditAvatarBtn,
  LogOutBtn,
  BtnText,
  LogOutText,
  InputItem,
  InputContainer,
  Wrap,
  VerifyWrapper,
} from './';

import Icon from 'shared/components/Icon/Icon';
import Button from 'shared/components/Button';
import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';
import VerifyEmail from 'components/ModalApproveAction/VerifyEmail';

import { current, updateAvatar } from 'redux/auth/authOperations';
import { UserLabel } from './UserDataItem.styled';
import { Balance, BalanceIcon } from './UserData.styled';

const initialState = {
  name: '',
  email: '',
  birthday: new Date(),
  phone: '',
  city: '',
  photo: null,
};

const UserData = () => {
  const user = useSelector(store => store.auth.user) || initialState;
  const [userAvatar, setUserAvatar] = useState(null);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [isModalVerifyOpen, setIsModalVerifyOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const token = useSelector(store => store.auth.token);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    dispatch(current(token));
  }, [dispatch, token]);

  const handlePhotoChange = e => {
    setUserAvatar(e.target.files[0]);
    setIsConfirm(true);
  };

  const handleUploadPhoto = async () => {
    try {
      dispatch(updateAvatar({ avatar: userAvatar }));
      setIsConfirm(false);
      toast.success(`Avatar ${t('is_updated_succesfully')}`, {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (error) {
      toast.error(`${t('alert_Try_another_image')}!`, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <>
      <Wrap>
        <Title>{t('My_information')}:</Title>
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
              {userAvatar ? (
                <Photo
                  src={URL.createObjectURL(userAvatar)}
                  alt="Selected file"
                />
              ) : (
                <Photo src={user.avatarUrl} alt="default avatar" />
              )}
            </Avatar>
            {!isConfirm ? (
              <EditAvatarBtn>
                <Icon id="camera" s="#54ADFF" />
                <AvatarLabel htmlFor="avatar">{t('Edit_photo')}</AvatarLabel>
              </EditAvatarBtn>
            ) : (
              <EditAvatarBtn onClick={handleUploadPhoto}>
                <Icon id="complite" s="#54ADFF" />
                <BtnText>{t('Confirm')}</BtnText>
              </EditAvatarBtn>
            )}
          </AvatarContainer>
          <InputContainer>
            <VerifyWrapper>
              Email isn't verified:
              <Button
                onClick={() => setIsModalVerifyOpen(true)}
                type="button"
                w="120"
                h="32"
                shape="solid"
              >
                Verify
              </Button>
            </VerifyWrapper>
            {isModalVerifyOpen && (
              <ModalApproveAction close={() => setIsModalVerifyOpen(false)}>
                <VerifyEmail />
              </ModalApproveAction>
            )}

            <InputItem
              name="email"
              type="email"
              value={user.email}
              pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              placeholder={t('Email')}
            />
            <InputItem
              name="name"
              type="text"
              value={user.name || 'User'}
              pattern="[A-Za-z]{1,32}"
              placeholder={t('Name')}
            />
            <InputItem
              name="birthday"
              placeholder="DD.MM.YYYY"
              value={user.birthday || ''}
              dateFormat="dd.MM.yyyy"
              pattern="/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/"
            />
            <InputItem
              name="phone"
              type="phone"
              value={user.phone}
              pattern="/^\+\d{12}$/"
              minlength="13"
              maxlength="13"
              placeholder="+380XXXXXXXXX"
            />
            <InputItem
              name="city"
              type="text"
              pattern="/([A-Za-z]+(?: [A-Za-z]+)*)/"
              value={user.city || ''}
              placeholder={t('City')}
            />
            <UserLabel style={{ display: 'flex' }}>
              {t('Balance')}:
              <Balance>
                {user.balance || '0'}
                <BalanceIcon id="dollar" s="none" f="currentColor" />
              </Balance>
            </UserLabel>
            <LogOutBtn onClick={() => setIsModalLogoutOpen(true)}>
              <Icon id="logout" s="#54ADFF" />
              <LogOutText>{t('Log_Out')}</LogOutText>
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
