import { useState, useMemo } from 'react';
import { useMedia } from 'shared/hooks/useMedia';
import useAuth from 'shared/hooks/useAuth';
import Container from 'shared/components/Container';
import Logo from './Logo';
import AuthNav from './AuthNav';
import Nav from './Nav';
import UserNav from './UserNav';
import Icon from 'shared/components/Icon/Icon';
import ModalApproveAction from 'components/ModalApproveAction';
import Logout from 'components/ModalApproveAction/Logout';
import {
  AppHeader,
  HeaderContainer,
  HeaderIcons,
  HeaderLogout,
  MobileAuth,
  MobileContainer,
  OpenLinksButton,
} from './Header.styles';
import { UserLink } from './UserNav/UserNav.styles';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);

  const { isLoggedIn } = useAuth();

  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)'],
    ['desktop', 'tablet'],
    'xs'
  );

  const handleLinkClick = () => {
    setIsMobileNavOpen(false);
  };

  const handleLogout = () => {
    setIsModalLogoutOpen(true);
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
              <HeaderLogout onClick={handleLogout}>
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
          {isModalLogoutOpen && (
            <ModalApproveAction close={() => setIsModalLogoutOpen(false)}>
              <Logout close={() => setIsModalLogoutOpen(false)} />
            </ModalApproveAction>
          )}
        </HeaderContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;
