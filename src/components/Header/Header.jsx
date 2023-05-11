import { useState } from 'react';
import { AppHeader, HeaderContainer, MobileContainer, OpenLinksButton } from './Header.styles';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import Container from 'shared/components/Container';
import Navigation from './Navigation';



const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
 
  return (
    <AppHeader>
      <Container>
        <HeaderContainer isMobileNavOpen={isMobileNavOpen}>
          <Logo />
          <Navigation />
          <OpenLinksButton
            onClick={() => {
              setIsMobileNavOpen((current) => !current);
            }}
          >
          {isMobileNavOpen ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
          {isMobileNavOpen && (
              <MobileContainer>
                <BurgerMenu />
              </MobileContainer>)}
        </HeaderContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;
