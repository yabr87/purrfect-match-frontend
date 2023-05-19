import { useSelector } from 'react-redux';

import {
  selectAuthError,
  selectIsAuth,
  selectUser,
  selectIsRefreshing,
} from '../../redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectAuthError);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
  };
};

export default useAuth;
