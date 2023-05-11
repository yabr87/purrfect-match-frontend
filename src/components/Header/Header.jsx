import { useState } from 'react';
import { useMedia } from 'shared/hooks/useMedia';

import { AppHeader, HeaderContainer, MobileAuth, MobileContainer, OpenLinksButton } from './Header.styles';
import Logo from './Logo';
import Container from 'shared/components/Container';
import AuthNav from './AuthNav';
import Nav from './Nav';
// import UserNav from './UserNav';


const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const { isLoggedIn } = useAuth();

  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)', '(max-width: 480px)'],
    ['xl', 'lg', 'md', 'sm'],
    'xs'
  );
 
  return (
    <AppHeader>
      <Container>
        <HeaderContainer >
          <Logo />
          {screenSize === 'xl' && (
            <>
              <Nav />
              <AuthNav />
              {/* {!isLoggedIn ? <AuthNav /> : <UserNav />} */}
            </>
          )}
          {screenSize === 'lg'&& !isMobileNavOpen && <AuthNav />}
          {screenSize !== 'xl' && (
            <>
            <OpenLinksButton isMobileNavOpen={isMobileNavOpen}
              onClick={() => {
                setIsMobileNavOpen((current) => !current);
              }}
            >
              {isMobileNavOpen ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </>
          )}
          
          {isMobileNavOpen && screenSize !== 'xl' &&(
              <MobileContainer>
              {screenSize !== 'lg' &&
                (<MobileAuth>
                <AuthNav />
                {/* {!isLoggedIn ? <AuthNav /> : <UserNav />} */}
              </MobileAuth>)}
                <Nav />
              </MobileContainer>)}
        </HeaderContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;
