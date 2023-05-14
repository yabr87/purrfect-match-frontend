import {
  Nav,
  List,
  ListItem,
  StyledNavLink,
} from './NoticesCategoriesNav.styles';

import useAuth from 'shared/hooks/useAuth';

function NoticesCategoriesNav() {
  const { isLoggedIn } = useAuth();
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
        {isLoggedIn && (
          <>
            <ListItem>
              <StyledNavLink to="/notices/favorite">
                favorites adds
              </StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/notices/own">my ads</StyledNavLink>
            </ListItem>
          </>
        )}
      </List>
    </Nav>
  );
}

export default NoticesCategoriesNav;
