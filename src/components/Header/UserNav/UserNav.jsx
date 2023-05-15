import PropTypes from 'prop-types';
import Icon from 'shared/components/Icon/Icon';
import { UserContainer, UserLink, UserName } from './UserNav.styles';

const UserNav = ({handleLinkClick}) => {
  return (
    <UserContainer>
    <UserLink to="/user" onClick={handleLinkClick}>
      <Icon id="user" h="28" w="28" />
      <UserName>User</UserName>
      </UserLink>
    </UserContainer>
    )
};


UserNav.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default UserNav;
