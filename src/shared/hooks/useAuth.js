import { useSelector } from 'react-redux';

import {
  selectIsAuth,
  selectAuthError,
  selectUser,
  selectIsRefreshing,
} from '../../redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsAuth);
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
