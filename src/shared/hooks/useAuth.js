import { useSelector } from 'react-redux';

import {
  selectAuthError,
  selectIsAuth,
  selectUser,
  selectIsRefreshing,
  getStatusRegister,
  selectAuth,
} from '../../redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectAuthError);

  const isRegisteredIn = useSelector(getStatusRegister);
  const { token } = useSelector(selectAuth);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isError,
    token,
    isRegisteredIn,
  };
};

export default useAuth;
