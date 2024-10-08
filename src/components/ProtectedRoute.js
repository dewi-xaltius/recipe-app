import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../services/auth';

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  return auth.isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
