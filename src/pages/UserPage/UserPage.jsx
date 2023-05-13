import { Title, User } from './';
import UserData from 'components/User';
import Container from 'shared/components/Container';

const UserPage = () => {
  return (
    <Container>
      <User>
        <Title>My information:</Title>
        <UserData />
      </User>
    </Container>
  );
};

export default UserPage;
