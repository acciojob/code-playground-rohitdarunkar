import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  component: Component,
  isAuthenticated,
  setIsAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;