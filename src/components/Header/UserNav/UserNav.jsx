import { UserContainer, UserLink, UserName } from './UserNav.styles';
import {BiUserCircle} from "react-icons/bi";

const UserNav = () => {
  return (
    <UserContainer>
    <UserLink to="/user">
      <BiUserCircle size={28}/>
      <UserName>User</UserName>
      </UserLink>
    </UserContainer>
    )
};

export default UserNav;
