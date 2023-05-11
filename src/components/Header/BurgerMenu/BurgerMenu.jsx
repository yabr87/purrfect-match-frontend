import Nav from "../Navigation/Nav";
import AuthNav from "../Navigation/AuthNav";
import { BurgerContainer, MobileAuth } from "./BurgerMenu.styles";
// import UserNav from "./UserNav";

const BurgerMenu = () => {
  return (
    <>
      {/* const { isLoggedIn } = useAuth(); */}
      <BurgerContainer>
        <MobileAuth>
          <AuthNav />
        </MobileAuth>
        <Nav />
        {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
      </BurgerContainer>
    </>
  );
};

export default BurgerMenu;
