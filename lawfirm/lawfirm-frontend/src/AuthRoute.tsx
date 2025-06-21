import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthRoute;
