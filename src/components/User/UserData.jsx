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

const UserData = () => {
  return (
    <>
      <Wrap>
        <Title>My information:</Title>
        <Container>
          <AvatarContainer>
            <Avatar />
            <EditAvatarBtn>
              <Icon id="camera" s={props => props.theme.colors.link} />
              <BtnText>Edit photo</BtnText>
            </EditAvatarBtn>
          </AvatarContainer>
          <InputContainer>
            <InputItem name={'Name'} />
            <InputItem name={'Email'} />
            <InputItem name={'Birthday'} />
            <InputItem name={'Phone'} />
            <InputItem name={'City'} />
            <LogOutBtn>
              <Icon id="logout" s={props => props.theme.colors.link} />
              <LogOutText>Log Out</LogOutText>
            </LogOutBtn>
          </InputContainer>
        </Container>
      </Wrap>
    </>
  );
};

export default UserData;
