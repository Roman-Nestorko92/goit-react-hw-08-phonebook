import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';

function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  const isLoggeIn = useSelector(state => getIsLoggedIn(state));
  const shouldRedirect = isLoggeIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.prototype = {
  children: propTypes.element,
  restricted: propTypes.bool,
  redirectTo: propTypes.string,
};

export default PublicRoute;
