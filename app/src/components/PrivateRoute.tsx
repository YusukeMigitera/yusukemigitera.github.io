import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { FC, ReactNode } from 'react';

interface PrivateRoute {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRoute> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;