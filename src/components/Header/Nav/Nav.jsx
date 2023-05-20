import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { NavContainer, NavItem } from './Nav.styles';

const Nav = ({ handleLinkClick }) => {
  const { t } = useTranslation();
  return (
    <>
      <NavContainer>
        <li>
          <NavItem to="/news" onClick={handleLinkClick}>
            {t('News')}
          </NavItem>
        </li>
        <li>
          <NavItem to="/notices" onClick={handleLinkClick}>
            {t('Find_pet')}
          </NavItem>
        </li>
        <li>
          <NavItem to="/friends" onClick={handleLinkClick}>
            {t('Our_friends')}
          </NavItem>
        </li>
      </NavContainer>
    </>
  );
};

Nav.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
};

export default Nav;
