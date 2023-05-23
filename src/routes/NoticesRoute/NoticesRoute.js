import PropTypes from 'prop-types';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/authSelectors';
import Loader from 'shared/components/Loader';

const NoticesRoute = ({ component: Component, redirectTo }) => {
  const { isLogin, token } = useSelector(selectAuth);
  const { categoryName } = useParams();

  if (!['favorite', 'own'].includes(categoryName)) {
    return Component;
  }

  if (!isLogin && token) {
    return <Loader />;
  }

  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};

NoticesRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default NoticesRoute;
