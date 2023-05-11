import { useState } from 'react';
import { AppHeader, BurgerButton, BurgerIcon, HeaderContainer } from './Header.styles';
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
          <BurgerButton onClick={() =>setIsMobileNavOpen((current) => !current)}>
            {isMobileNavOpen ? <BurgerIcon>X</BurgerIcon> : <BurgerIcon>Открыть</BurgerIcon> }
          </BurgerButton>
          {isMobileNavOpen && <BurgerMenu />}
        </HeaderContainer>
      </Container>
    </AppHeader>
  );
};

export default Header;
