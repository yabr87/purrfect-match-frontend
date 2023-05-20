import {
  Nav,
  List,
  ListItem,
  StyledNavLink,
} from './NoticesCategoriesNav.styles';
import { useTranslation } from 'react-i18next';

import useAuth from 'shared/hooks/useAuth';

function NoticesCategoriesNav() {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();
  return (
    <Nav>
      <List>
        <ListItem>
          <StyledNavLink to="/notices/sell">{t('sell')}</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/notices/lost-found">
            {t('lost_found')}
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/notices/for-free">
            {t('in_good_hands')}
          </StyledNavLink>
        </ListItem>
        {isLoggedIn && (
          <>
            <ListItem>
              <StyledNavLink to="/notices/favorite">
                {t('favorites_ads')}
              </StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to="/notices/own">{t('my_ads')}</StyledNavLink>
            </ListItem>
          </>
        )}
      </List>
    </Nav>
  );
}

export default NoticesCategoriesNav;
