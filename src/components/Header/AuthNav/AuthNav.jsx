import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Icon from 'shared/components/Icon/Icon';
import { AuthContainer, AuthLink, AuthItem } from './AuthNav.styles';

const AuthNav = ({ handleLinkClick }) => {
  const { t } = useTranslation();

  return (
    <AuthContainer>
      <AuthItem>
        <AuthLink to="/login" onClick={handleLinkClick}>
          {t('Log_IN')}
          <Icon id="paw" f="currentColor" s="none" />
        </AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="/register" onClick={handleLinkClick}>
          {t('Registration')}
        </AuthLink>
      </AuthItem>
    </AuthContainer>
  );
};

AuthNav.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default AuthNav;
