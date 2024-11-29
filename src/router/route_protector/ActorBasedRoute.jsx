import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/auth_context/AuthContext";

const ActorBasedRoute = ({ element: Element, requiredRoles, ...rest }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  // Ensure user and user roles exist
  const hasRequiredRole =
    user && user.resource_access && user.resource_access.stylit && user.resource_access.stylit.roles
      ? requiredRoles.some(role => user.resource_access.stylit.roles.includes(role))
      : false;

  return hasRequiredRole ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/public" state={{ from: location }} />
  );
};

export default ActorBasedRoute;
