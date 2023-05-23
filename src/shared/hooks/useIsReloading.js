import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSelectors';

const useIsReloading = () => {
  const { isLogin, token } = useSelector(selectAuth);

  return !isLogin && token;
};

export default useIsReloading;
