import { NavContainer, NavItem } from './Nav.styles';


const Nav=()=> {
  return (
    <>
      <NavContainer>
        <li><NavItem to="/news">News</NavItem></li>
        <li><NavItem to="/notices">Find pet</NavItem></li>
        <li><NavItem to="/friends">Our Friends</NavItem></li>        
    </NavContainer>
    </>
  );
}

export default Nav;