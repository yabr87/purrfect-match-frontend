import PropTypes from 'prop-types';
import Icon from 'shared/components/Icon/Icon';
import { AuthContainer, AuthLink, AuthItem } from './AuthNav.styles';

const AuthNav = ({handleLinkClick}) => {
  return (
    <AuthContainer>
      <AuthItem>
        <AuthLink to="/login" onClick={handleLinkClick}>
          Log IN
        <Icon id="paw" f="currentColor" s="none"/>
        </AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="/register" onClick={handleLinkClick}>
          Registration
        </AuthLink>
      </AuthItem>
      
    </AuthContainer>
  );
}

AuthNav.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default AuthNav;