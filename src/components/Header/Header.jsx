import { useState, useMemo } from 'react';
import { useMedia } from 'shared/hooks/useMedia';

import {
  AppHeader,
  HeaderContainer,
  MobileAuth,
  MobileContainer,
  OpenLinksButton,
} from './Header.styles';
import Logo from './Logo';
import Container from 'shared/components/Container';
import AuthNav from './AuthNav';
import Nav from './Nav';
// import UserNav from './UserNav';
// import { useAuth } from 'shared/hooks/useAuth';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);  
// const { isLoggedIn } = useAuth();
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)'],
    ['desktop', 'tablet'],
    'xs'
  );
  const authNav = useMemo(() => <AuthNav />, []);
  // const authNav = useMemo(() => isLoggedIn ? <UserNav /> : <AuthNav />, [isLoggedIn]);
  const nav = useMemo(() => <Nav />, []);

  const isDesktop = screenSize === 'desktop';
  const isTablet = screenSize === 'tablet';

  return (
    <AppHeader>
      <Container>
        <HeaderContainer>
          <Logo />
          {isDesktop && (
            <>
              {nav}
              {authNav}
            </>
          )}
          {isTablet && !isMobileNavOpen && authNav}
          {!isDesktop && (
            <>
              <OpenLinksButton
                isMobileNavOpen={isMobileNavOpen}
                onClick={() => setIsMobileNavOpen((current) => !current)}
              >
                {isMobileNavOpen ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
              {isMobileNavOpen && (
                <MobileContainer>
                  {!isTablet && <MobileAuth>{authNav}</MobileAuth>}
                  {nav}
                </MobileContainer>
              )}
            </>
          )}
        </HeaderContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;