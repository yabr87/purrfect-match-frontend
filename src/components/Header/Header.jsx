import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useMedia } from 'shared/hooks/useMedia';
import {
  AppHeader,
  HeaderContainer,
  HeaderIcons,
  HeaderLogout,
  MobileAuth,
  MobileContainer,
  OpenLinksButton,
} from './Header.styles';
import Logo from './Logo';
import Container from 'shared/components/Container';
import AuthNav from './AuthNav';
import Nav from './Nav';
import Icon from 'shared/components/Icon/Icon';
import UserNav from './UserNav';
import useAuth from 'shared/hooks/useAuth';
import { UserLink } from './UserNav/UserNav.styles';
import { logout } from 'redux/auth/authOperations';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)'],
    ['desktop', 'tablet'],
    'xs'
  );

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };
  const userBar = isLoggedIn ? (
    <UserNav handleLinkClick={handleLinkClick} />
  ) : (
    <AuthNav handleLinkClick={handleLinkClick} />
  );
  const nav = useMemo(() => <Nav handleLinkClick={handleLinkClick} />, []);

  const isDesktop = screenSize === 'desktop';
  const isTablet = screenSize === 'tablet';

  return (
    <AppHeader isMobileNavOpen={isMobileNavOpen}>
      <Container>
        <HeaderContainer>
          <Logo />
          {isDesktop && (
            <>
              {nav}
              {userBar}
            </>
          )}
          <HeaderIcons>
            {!isMobileNavOpen && isLoggedIn && (
              <HeaderLogout onClick={handleLogOut}>
                <Icon id="logout" />
              </HeaderLogout>
            )}
            {!isTablet && !isDesktop && !isMobileNavOpen && isLoggedIn && (
              <UserLink to="/user" onClick={handleLinkClick}>
                <Icon id="user" h="28" w="28" />
              </UserLink>
            )}
            {isTablet && !isMobileNavOpen && userBar}
            {!isDesktop && (
              <>
                <OpenLinksButton
                  isMobileNavOpen={isMobileNavOpen}
                  onClick={() => setIsMobileNavOpen(current => !current)}
                >
                  {isMobileNavOpen ? <Icon id="cross" /> : <Icon id="burger" />}
                </OpenLinksButton>
                {isMobileNavOpen && (
                  <MobileContainer>
                    {!isTablet && <MobileAuth>{userBar}</MobileAuth>}
                    {nav}
                  </MobileContainer>
                )}
              </>
            )}
          </HeaderIcons>
        </HeaderContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;
