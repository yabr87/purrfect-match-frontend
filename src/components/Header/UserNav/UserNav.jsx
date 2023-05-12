import Icon from 'shared/components/Icon/Icon';
import { UserContainer, UserLink, UserName } from './UserNav.styles';

const UserNav = () => {
  return (
    <UserContainer>
    <UserLink to="/user">
      <Icon id="user" h="28" w="28" />
      <UserName>User</UserName>
      </UserLink>
    </UserContainer>
    )
};

export default UserNav;
