import {
  Container,
  Avatar,
  Title,
  EditAvatarBtn,
  LogOutBtn,
  BtnText,
  LogOutText,
  InputItem,
  InputContainer,
} from './';
import Icon from 'shared/components/Icon/Icon';

const UserData = () => {
  return (
    <>
      <Title>My information:</Title>
      <Container>
        <div>
          <Avatar />
          <EditAvatarBtn>
            <Icon id="camera" s={props => props.theme.colors.link} />
            <BtnText>Edit photo</BtnText>
          </EditAvatarBtn>
        </div>
        <InputContainer>
          <InputItem name={'Name'} />
          <InputItem name={'Email'} />
          <InputItem name={'Birthday'} />
          <InputItem name={'Phone'} />
          <InputItem name={'City'} />
        </InputContainer>
        <LogOutBtn>
          <Icon id="logout" s={props => props.theme.colors.link} />
          <LogOutText>Log Out</LogOutText>
        </LogOutBtn>
      </Container>
    </>
  );
};

export default UserData;
