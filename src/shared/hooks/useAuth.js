import { useSelector } from 'react-redux';

import {
  selectAuthError,
  selectIsAuth,
  selectUser,
  selectIsRefreshing,
} from '../../redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectIsAuth);
  const isLoggedIn = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectAuthError);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isError,
  };
};

export default useAuth;
