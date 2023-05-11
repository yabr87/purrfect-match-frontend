import { NavContainer, NavItem } from './Nav.styles';

// const NavItems = [
//   { to: '/news', title: 'News' },
//   { to: '/notices', title: 'Notices' },
//   { to: '/friends', title: 'Our Friends' },
// ];


const Nav=()=> {
  return (
    <>
      <NavContainer>
        <li><NavItem to="/news">News</NavItem></li>
        <li><NavItem to="/notices">Notices</NavItem></li>
        <li><NavItem to="/friends">Our Friends</NavItem></li>        
    </NavContainer>
    </>
  );
}

export default Nav;