import { Route, Navigate } from 'react-router-dom';
import { Role } from '../../types/role';
import { hasAnyRoles, isAuthenticated } from '../../util/auth';

type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      element={
        !isAuthenticated() ? (
          <Navigate to="/admin/auth/login" />
        ) : !hasAnyRoles(roles) ? (
          <Navigate to="/admin/products" />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
