// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { useAuth } from 'components/shared/hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLogin } = useAuth();

  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
