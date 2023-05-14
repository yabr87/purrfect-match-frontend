import { User } from './';
import { UserInfo, PetsInfo } from 'components/User';
import Container from 'shared/components/Container';

const UserPage = () => {
  return (
    <Container>
      <User>
        <UserInfo />
        <PetsInfo />
      </User>
    </Container>
  );
};

export default UserPage;
