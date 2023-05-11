import Nav from "./Nav";
import AuthNav from "./AuthNav";
import { NavBar, AuthBar } from "./Navigation.styles";
// import UserNav from "./UserNav";

const Navigation = () => {
    // const { isLoggedIn } = useAuth();
    
    return (
        <>
            <NavBar>
                <Nav />
            </NavBar>
            <AuthBar>
                <AuthNav />
            {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
             </AuthBar>
        </>
    
    );
};

export default Navigation;
