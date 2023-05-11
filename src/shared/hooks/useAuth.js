import { useSelector } from 'react-redux';

import {
  isAuth,
  getAuthError,
  getUser,
  selectIsRefreshing,
} from '../../redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(isAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(getAuthError);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    isError,
  };
};

export default useAuth;
