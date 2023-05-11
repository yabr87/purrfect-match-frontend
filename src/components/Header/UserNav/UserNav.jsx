import { UserLink } from './UserNav.styles';
import {BiUserCircle} from "react-icons/bi";

const UserNav = () => {
  return (
    <UserLink to="/user">
      <BiUserCircle />
      <p>User</p>
    </UserLink>
    )
};

export default UserNav;
