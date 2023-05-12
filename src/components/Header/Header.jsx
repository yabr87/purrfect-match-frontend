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

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)', '(max-width: 480px)'],
    ['desktop', 'tablet', 'mobile', 'small'],
    'xs'
  );
  const authNav = useMemo(() => <AuthNav />, []);
  const nav = useMemo(() => <Nav />, []);

  return (
    <AppHeader>
      <Container>
        <HeaderContainer>
          <Logo />
          {screenSize === 'desktop' && (
            <>
              {nav}
              {authNav}
            </>
          )}
          {screenSize === 'tablet' && !isMobileNavOpen && authNav}
          {screenSize !== 'desktop' && (
            <>
              <OpenLinksButton
                isMobileNavOpen={isMobileNavOpen}
                onClick={() => setIsMobileNavOpen((current) => !current)}
              >
                {isMobileNavOpen ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
              {isMobileNavOpen && (
                <MobileContainer>
                  {screenSize !== 'tablet' && <MobileAuth>{authNav}</MobileAuth>}
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