import {
  Container,
  Avatar,
  EditBtn,
  BtnText,
  InputItem,
  InputContainer,
} from './';
import Icon from 'shared/components/Icon/Icon';

const UserData = () => {
  return (
    <Container>
      <Avatar />
      <EditBtn>
        <Icon id="camera" s={props => props.theme.colors.link} />
        <BtnText>Edit photo</BtnText>
      </EditBtn>
      <InputContainer>
        <InputItem name={'Name'} />
      </InputContainer>
    </Container>
  );
};

export default UserData;
