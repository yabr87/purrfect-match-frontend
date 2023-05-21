import { useSelector } from 'react-redux';

import {
  selectAuthError,
  selectIsAuth,
  selectUser,
  selectIsRefreshing,
  getStatusRegister,
} from '../../redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectAuthError);

  const isRegisteredIn = useSelector(getStatusRegister);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isError,

    isRegisteredIn,
  };
};

export default useAuth;
