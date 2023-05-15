import PropTypes from 'prop-types';
import { NavContainer, NavItem } from './Nav.styles';

const Nav = ({ handleLinkClick }) => {
  return (
    <>
      <NavContainer>
        <li>
          <NavItem to="/news" onClick={handleLinkClick}>
            News
          </NavItem>
        </li>
        <li>
          <NavItem to="/notices" onClick={handleLinkClick}>
            Find pet
          </NavItem>
        </li>
        <li>
          <NavItem to="/friends" onClick={handleLinkClick}>
            Our Friends
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
