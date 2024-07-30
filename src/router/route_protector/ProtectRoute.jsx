// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth_context/AuthContext';

const ProtectRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/public" />
      }
    />
  );
};

export default ProtectRoute;
