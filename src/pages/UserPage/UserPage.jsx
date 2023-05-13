import { Title, Container } from './';
import UserData from 'components/User/UserData';

const UserPage = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <UserData />
    </Container>
  );
};

export default UserPage;
