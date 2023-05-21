import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
} from './';
import Icon from 'shared/components/Icon/Icon';
import { addAvatar, getCurrent } from 'utils/Api';
import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';
import { reverseISODate } from 'utils/reverseISODate';
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
  const [user, setUser] = useState(initialState);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const token = useSelector(store => store.auth.token);
  const { t } = useTranslation();

  useEffect(() => {
    const getUser = async token => {
      const res = await getCurrent(token);
      setUser({ ...res.data, birthday: reverseISODate(res.data.birthday) });
    };
    getUser(token);
  }, [token]);

  const handlePhotoChange = e => {
    setUser({ ...user, photo: e.target.files[0] });
    setIsConfirm(true);
  };

  const handleUploadPhoto = async () => {
    try {
      await addAvatar(token, { avatar: user.photo });
      setIsConfirm(false);
    } catch (error) {
      toast.error(`${t('alert_Try_another_image')}!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleLogOut = () => {
    setIsModalLogoutOpen(true);
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
            <InputItem
              name={t('Name')}
              type="text"
              value={user.name || 'User'}
              pattern="[A-Za-z]{1,32}"
              placeholder={t('Name')}
            />
            <InputItem
              name={t('Email')}
              type="email"
              value={user.email}
              pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              placeholder={t('Email')}
            />
            <InputItem
              name={t('Birthday')}
              placeholder="DD.MM.YYYY"
              value={user.birthday}
              dateFormat="dd.MM.yyyy"
              pattern="(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)"
            />
            <InputItem
              name={t('Phone')}
              type="phone"
              value={user.phone}
              pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
              minlength="13"
              maxlength="13"
              placeholder="+380XXXXXXXXX"
            />
            <InputItem
              name={t('City')}
              type="text"
              pattern="/([A-Za-z]+(?: [A-Za-z]+)*)/"
              value={user.city || ''}
              placeholder={t('City')}
            />
            <UserLabel style={{display: 'flex'}}>Balance:
            <Balance>{user.balance || '0'}<BalanceIcon id='dollar' s='none' f='#111' /></Balance>
              </UserLabel>
            <LogOutBtn onClick={handleLogOut}>
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
