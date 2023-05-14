import { NavContainer, NavItem } from './Nav.styles';


const Nav=({handleLinkClick})=> {
  return (
    <>
      <NavContainer>
        <li><NavItem to="/news" onClick={handleLinkClick}>News</NavItem></li>
        <li><NavItem to="/notices" onClick={handleLinkClick}>Find pet</NavItem></li>
        <li><NavItem to="/friends" onClick={handleLinkClick}>Our Friends</NavItem></li>        
    </NavContainer>
    </>
  );
}

export default Nav;