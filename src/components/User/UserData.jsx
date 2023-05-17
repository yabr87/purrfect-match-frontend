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
import { logout } from 'redux/auth/authOperations';

const UserData = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
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
            <InputItem name={'Name'} />
            <InputItem name={'Email'} />
            <InputItem name={'Birthday'} />
            <InputItem name={'Phone'} />
            <InputItem name={'City'} />
            <LogOutBtn onClick={handleLogOut}>
              <Icon id="logout" s="#54ADFF" />
              <LogOutText>Log Out</LogOutText>
            </LogOutBtn>
          </InputContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default UserData;
