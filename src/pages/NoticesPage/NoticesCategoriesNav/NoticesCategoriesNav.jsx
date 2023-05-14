import {
  Nav,
  List,
  ListItem,
  StyledNavLink,
} from './NoticesCategoriesNav.styles';

import { useSelector } from 'react-redux';

import { isAuth } from 'redux/auth/authSelectors';

function NoticesCategoriesNav() {
  const isAuthenticated = useSelector(isAuth);
  return (
    <Nav>
      <List>
        <ListItem>
          <StyledNavLink to="/notices/sell">sell</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/notices/lost-found">lost/found</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/notices/for-free">in good hands</StyledNavLink>
        </ListItem>
      </List>
    </Nav>
  );
}

export default NoticesCategoriesNav;
