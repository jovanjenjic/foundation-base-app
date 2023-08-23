import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { AuthGuardT } from '@components/Routes/types/index';

/**
 * Auth guard is used to redirect user to login page if not authenticated
 * @param children
 * @return JSXElement
 */
const ProtectedRoute = ({
  children,
  fallbackBehavior = 'redirect',
}: AuthGuardT): JSX.Element | null => {
  const userAuthenticated = true;
  const location = useLocation();

  if (userAuthenticated) {
    return <>{children}</>;
  }

  return fallbackBehavior === 'ignore' ? null : (
    <Navigate to="/auth/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
